import AdminSidebar from "./AdminSidebar";
import "./layout.css";

export const metadata = {
    title: "Admin Panel | Crown Edge Technologies",
};

export default function AdminLayout({ children }) {
    return (
        <div className="admin-shell">
            <AdminSidebar />
            <main className="admin-main">{children}</main>
        </div>
    );
}
