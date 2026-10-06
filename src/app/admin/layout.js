import AdminShell from "./AdminShell";
import "./layout.css";

export const metadata = {
    title: "Admin Panel",
    robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }) {
    return <AdminShell>{children}</AdminShell>;
}
