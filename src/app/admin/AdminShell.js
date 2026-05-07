"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

export default function AdminShell({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin/login";

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="admin-shell">
            <AdminSidebar />
            <main className="admin-main">{children}</main>
        </div>
    );
}
