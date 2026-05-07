"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { IoCopyOutline, IoCheckmarkOutline, IoTrashOutline, IoRefreshOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";
import "./enquiries.css";

const SERVICE_LABELS = {
    website: "Website",
    "web-app": "Web Application",
    "mobile-app": "Mobile App",
    software: "Software",
};

const STATUS_OPTIONS = ["new", "contacted", "closed"];

function CopyBtn({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback
        }
    };

    return (
        <button
            className={`enq-copy-btn${copied ? " enq-copy-btn--done" : ""}`}
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy mobile number"}
            aria-label="Copy mobile number"
        >
            {copied ? <IoCheckmarkOutline /> : <IoCopyOutline />}
        </button>
    );
}

export default function EnquiriesPage() {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [filter, setFilter] = useState("all");
    const [deleting, setDeleting] = useState(null);
    const [updating, setUpdating] = useState(null);

    const fetchEnquiries = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get("/api/enquiries");
            setEnquiries(res.data.data);
        } catch {
            setError("Failed to load enquiries. Check your MongoDB connection.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEnquiries();
    }, [fetchEnquiries]);

    const handleDelete = async (id) => {
        if (!confirm("Delete this enquiry? This cannot be undone.")) return;
        setDeleting(id);
        try {
            await axios.delete(`/api/enquiries/${id}`);
            setEnquiries((prev) => prev.filter((e) => e._id !== id));
        } catch {
            alert("Failed to delete enquiry.");
        } finally {
            setDeleting(null);
        }
    };

    const handleStatusChange = async (id, status) => {
        setUpdating(id);
        try {
            const res = await axios.put(`/api/enquiries/${id}`, { status });
            setEnquiries((prev) =>
                prev.map((e) => (e._id === id ? { ...e, status: res.data.data.status } : e))
            );
        } catch {
            alert("Failed to update status.");
        } finally {
            setUpdating(null);
        }
    };

    const filtered =
        filter === "all" ? enquiries : enquiries.filter((e) => e.status === filter);

    return (
        <div className="enq-page">
            {/* Header */}
            <div className="enq-page__header">
                <div>
                    <h1 className="enq-page__title">Enquiries</h1>
                    <p className="enq-page__sub">
                        {enquiries.length} total enquir{enquiries.length === 1 ? "y" : "ies"}
                    </p>
                </div>
                <button className="enq-refresh-btn" onClick={fetchEnquiries} title="Refresh">
                    <IoRefreshOutline />
                    Refresh
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="enq-filters">
                <MdFilterList className="enq-filters__icon" />
                {["all", ...STATUS_OPTIONS].map((f) => (
                    <button
                        key={f}
                        className={`enq-filter-btn${filter === f ? " enq-filter-btn--active" : ""}`}
                        onClick={() => setFilter(f)}
                    >
                        {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                        <span className="enq-filter-btn__count">
                            {f === "all"
                                ? enquiries.length
                                : enquiries.filter((e) => e.status === f).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* States */}
            {loading && (
                <div className="enq-state">
                    <div className="enq-spinner" />
                    Loading enquiries…
                </div>
            )}
            {!loading && error && <div className="enq-state enq-state--error">{error}</div>}
            {!loading && !error && filtered.length === 0 && (
                <div className="enq-state">No enquiries found.</div>
            )}

            {/* Table */}
            {!loading && !error && filtered.length > 0 && (
                <div className="enq-table-wrap">
                    <table className="enq-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name / Company</th>
                                <th>Mobile Number</th>
                                <th>Enquiry For</th>
                                <th>City</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((e, idx) => (
                                <tr key={e._id}>
                                    <td className="enq-table__num">{idx + 1}</td>
                                    <td className="enq-table__name">{e.fullName}</td>
                                    <td>
                                        <div className="enq-mobile-cell">
                                            <span>{e.mobile}</span>
                                            <CopyBtn text={e.mobile} />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="enq-service-tag">
                                            {SERVICE_LABELS[e.service] ?? e.service}
                                        </span>
                                    </td>
                                    <td>{e.city}</td>
                                    <td>
                                        <select
                                            className={`enq-status-select enq-status-select--${e.status}`}
                                            value={e.status}
                                            onChange={(ev) =>
                                                handleStatusChange(e._id, ev.target.value)
                                            }
                                            disabled={updating === e._id}
                                        >
                                            {STATUS_OPTIONS.map((s) => (
                                                <option key={s} value={s}>
                                                    {s.charAt(0).toUpperCase() + s.slice(1)}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="enq-table__date">
                                        {new Date(e.createdAt).toLocaleDateString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                        <span className="enq-table__time">
                                            {new Date(e.createdAt).toLocaleTimeString("en-IN", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                            })}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="enq-delete-btn"
                                            onClick={() => handleDelete(e._id)}
                                            disabled={deleting === e._id}
                                            title="Delete enquiry"
                                            aria-label="Delete enquiry"
                                        >
                                            {deleting === e._id ? (
                                                <div className="enq-spinner enq-spinner--sm" />
                                            ) : (
                                                <IoTrashOutline />
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Mobile Cards — hidden on desktop via CSS */}
            {!loading && !error && filtered.length > 0 && (
                <div className="enq-cards">
                    {filtered.map((e, idx) => (
                        <div className="enq-card" key={e._id}>
                            {/* Card top row: serial + name + delete */}
                            <div className="enq-card__top">
                                <span className="enq-card__num">#{idx + 1}</span>
                                <span className="enq-card__name">{e.fullName}</span>
                                <button
                                    className="enq-delete-btn"
                                    onClick={() => handleDelete(e._id)}
                                    disabled={deleting === e._id}
                                    title="Delete enquiry"
                                    aria-label="Delete enquiry"
                                >
                                    {deleting === e._id ? (
                                        <div className="enq-spinner enq-spinner--sm" />
                                    ) : (
                                        <IoTrashOutline />
                                    )}
                                </button>
                            </div>

                            {/* Card body: label-value rows */}
                            <div className="enq-card__body">
                                <div className="enq-card__row">
                                    <span className="enq-card__label">Mobile</span>
                                    <div className="enq-mobile-cell">
                                        <span>{e.mobile}</span>
                                        <CopyBtn text={e.mobile} />
                                    </div>
                                </div>
                                <div className="enq-card__row">
                                    <span className="enq-card__label">Enquiry For</span>
                                    <span className="enq-service-tag">
                                        {SERVICE_LABELS[e.service] ?? e.service}
                                    </span>
                                </div>
                                <div className="enq-card__row">
                                    <span className="enq-card__label">City</span>
                                    <span>{e.city}</span>
                                </div>
                                <div className="enq-card__row">
                                    <span className="enq-card__label">Date</span>
                                    <span className="enq-table__date">
                                        {new Date(e.createdAt).toLocaleDateString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                        <span className="enq-table__time">
                                            {new Date(e.createdAt).toLocaleTimeString("en-IN", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                            })}
                                        </span>
                                    </span>
                                </div>
                                <div className="enq-card__row">
                                    <span className="enq-card__label">Status</span>
                                    <select
                                        className={`enq-status-select enq-status-select--${e.status}`}
                                        value={e.status}
                                        onChange={(ev) =>
                                            handleStatusChange(e._id, ev.target.value)
                                        }
                                        disabled={updating === e._id}
                                    >
                                        {STATUS_OPTIONS.map((s) => (
                                            <option key={s} value={s}>
                                                {s.charAt(0).toUpperCase() + s.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
