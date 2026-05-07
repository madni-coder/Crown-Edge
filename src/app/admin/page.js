import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import Link from "next/link";
import "./dashboard.css";

async function getStats() {
    await connectDB();
    const [total, newCount, contacted, closed] = await Promise.all([
        Enquiry.countDocuments(),
        Enquiry.countDocuments({ status: "new" }),
        Enquiry.countDocuments({ status: "contacted" }),
        Enquiry.countDocuments({ status: "closed" }),
    ]);
    const recent = await Enquiry.find().sort({ createdAt: -1 }).limit(5).lean();
    return { total, newCount, contacted, closed, recent };
}

const SERVICE_LABELS = {
    website: "Website",
    "web-app": "Web Application",
    "mobile-app": "Mobile App",
    software: "Software",
};

export default async function AdminDashboard() {
    const { total, newCount, contacted, closed, recent } = await getStats();

    const cards = [
        { label: "Total Enquiries", value: total, color: "#84fab0" },
        { label: "New", value: newCount, color: "#60b8f5" },
        { label: "Contacted", value: contacted, color: "#f5a623" },
        { label: "Closed", value: closed, color: "#7ed321" },
    ];

    return (
        <div className="dash">
            <h1 className="dash__title">Dashboard</h1>
            <p className="dash__sub">Welcome to Crown Edge admin panel</p>

            {/* Stat Cards */}
            <div className="dash__cards">
                {cards.map((c) => (
                    <div className="dash__card" key={c.label} style={{ "--card-color": c.color }}>
                        <span className="dash__card-value">{c.value}</span>
                        <span className="dash__card-label">{c.label}</span>
                    </div>
                ))}
            </div>

            {/* Recent Enquiries */}
            <div className="dash__section">
                <div className="dash__section-header">
                    <h2 className="dash__section-title">Recent Enquiries</h2>
                    <Link href="/admin/enquiries" className="dash__view-all">
                        View all →
                    </Link>
                </div>

                {recent.length === 0 ? (
                    <p className="dash__empty">No enquiries yet.</p>
                ) : (
                    <div className="dash__table-wrap">
                        <table className="dash__table">
                            <thead>
                                <tr>
                                    <th>Name / Company</th>
                                    <th>Mobile</th>
                                    <th>Enquiry For</th>
                                    <th>City</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recent.map((e) => (
                                    <tr key={e._id.toString()}>
                                        <td>{e.fullName}</td>
                                        <td>{e.mobile}</td>
                                        <td>{SERVICE_LABELS[e.service] ?? e.service}</td>
                                        <td>{e.city}</td>
                                        <td>
                                            <span className={`dash__badge dash__badge--${e.status}`}>
                                                {e.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
