import AdminShell from "./AdminShell";
import "./layout.css";

export const metadata = {
    title: "Admin Panel | Crown Edge Technologies",
};

export default function AdminLayout({ children }) {
    return <AdminShell>{children}</AdminShell>;
}
