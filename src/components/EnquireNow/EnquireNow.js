"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdMailOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import "./EnquireNow.css";

const SERVICES = [
    { value: "", label: "Select a service…" },
    { value: "website", label: "Website" },
    { value: "web-app", label: "Web Application" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "software", label: "Software" },
];

const INITIAL = {
    fullName: "",
    mobile: "",
    service: "",
    city: "",
};

export default function EnquireNow() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(INITIAL);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close on Escape key
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape" && open) {
                setOpen(false);
            }
        },
        [open]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const validate = () => {
        const newErrors = {};
        if (!form.fullName.trim() || form.fullName.trim().length < 2) {
            newErrors.fullName = "Please enter your full name (min. 2 characters).";
        }
        if (!/^\d{10}$/.test(form.mobile.trim())) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }
        if (!form.service) {
            newErrors.service = "Please select a service.";
        }
        if (!form.city.trim() || form.city.trim().length < 2) {
            newErrors.city = "Please enter your city name.";
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Allow only digits for mobile field
        if (name === "mobile" && value && !/^\d*$/.test(value)) return;

        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSubmitting(true);
        try {
            await axios.post("/api/enquiries", {
                fullName: form.fullName.trim(),
                mobile: form.mobile.trim(),
                service: form.service,
                city: form.city.trim(),
            });
            setOpen(false);
            setForm(INITIAL);
            setErrors({});
            router.push("/thank-you");
        } catch (err) {
            const msg = err?.response?.data?.error || "Submission failed. Please try again.";
            setErrors({ submit: msg });
        } finally {
            setSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setOpen(false);
        }
    };

    return (
        <>
            {/* ── Sticky Enquire Now Button ── */}
            <button
                className="enquire-btn"
                onClick={() => setOpen(true)}
                aria-label="Open enquiry form"
                type="button"
            >
                <MdMailOutline className="enquire-btn__icon" aria-hidden="true" />
                Enquire Now
                <div className="enquire-btn__pulse" aria-hidden="true" />
            </button>

            {/* ── Modal ── */}
            {open && (
                <div
                    className="enquire-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="enquire-title"
                    onClick={handleOverlayClick}
                >
                    <div className="enquire-modal">
                        {/* Close button */}
                        <button
                            className="enquire-modal__close"
                            onClick={() => setOpen(false)}
                            aria-label="Close enquiry form"
                            type="button"
                        >
                            <IoClose />
                        </button>

                        {/* Header */}
                        <div className="enquire-modal__header">
                            <div className="enquire-modal__badge">
                                <BsStars aria-hidden="true" /> Get in Touch
                            </div>
                            <h2 className="enquire-modal__title" id="enquire-title">
                                Let&apos;s Build Something Great
                            </h2>

                        </div>

                        {/* Form */}
                        <form className="enquire-form" onSubmit={handleSubmit} noValidate>
                            {/* Full Name */}
                            <div className="enquire-form__group">
                                <label className="enquire-form__label" htmlFor="enq-fullName">
                                    Name/Company Name <span>*</span>
                                </label>
                                <input
                                    id="enq-fullName"
                                    className={`enquire-form__input${errors.fullName ? " error" : ""}`}
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    maxLength={80}
                                />
                                {errors.fullName && (
                                    <span className="enquire-form__error" role="alert">
                                        {errors.fullName}
                                    </span>
                                )}
                            </div>

                            {/* Mobile Number */}
                            <div className="enquire-form__group">
                                <label className="enquire-form__label" htmlFor="enq-mobile">
                                    Mobile Number <span>*</span>
                                </label>
                                <input
                                    id="enq-mobile"
                                    className={`enquire-form__input${errors.mobile ? " error" : ""}`}
                                    type="tel"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                    autoComplete="tel"
                                    maxLength={10}
                                    inputMode="numeric"
                                    pattern="\d*"
                                />
                                {errors.mobile && (
                                    <span className="enquire-form__error" role="alert">
                                        {errors.mobile}
                                    </span>
                                )}
                            </div>

                            {/* Service Dropdown */}
                            <div className="enquire-form__group">
                                <label className="enquire-form__label" htmlFor="enq-service">
                                    My Enquiry is for <span>*</span>
                                </label>
                                <div className="enquire-form__select-wrap">
                                    <select
                                        id="enq-service"
                                        className={`enquire-form__select${errors.service ? " error" : ""}`}
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                    >
                                        {SERVICES.map((s) => (
                                            <option key={s.value} value={s.value} disabled={s.value === ""}>
                                                {s.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.service && (
                                    <span className="enquire-form__error" role="alert">
                                        {errors.service}
                                    </span>
                                )}
                            </div>

                            {/* City */}
                            <div className="enquire-form__group">
                                <label className="enquire-form__label" htmlFor="enq-city">
                                    City <span>*</span>
                                </label>
                                <input
                                    id="enq-city"
                                    className={`enquire-form__input${errors.city ? " error" : ""}`}
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="e.g. Mumbai "
                                    autoComplete="address-level2"
                                    maxLength={60}
                                />
                                {errors.city && (
                                    <span className="enquire-form__error" role="alert">
                                        {errors.city}
                                    </span>
                                )}
                            </div>

                            {/* Submit error */}
                            {errors.submit && (
                                <span className="enquire-form__error enquire-form__error--submit" role="alert">
                                    {errors.submit}
                                </span>
                            )}

                            {/* Submit */}
                            <button
                                className="enquire-form__submit"
                                type="submit"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                                        <FaSpinner className="enquire-form__spin" aria-hidden="true" />
                                        Submitting…
                                    </>
                                ) : (
                                    <>
                                        <FiSend aria-hidden="true" />
                                        Submit Enquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
