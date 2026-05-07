"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdDashboard, MdInbox, MdMenu, MdClose, MdLogout } from "react-icons/md";
import "./AdminSidebar.css";

const NAV = [
    { href: "/admin", label: "Dashboard", icon: MdDashboard },
    { href: "/admin/enquiries", label: "Enquiries", icon: MdInbox },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    function handleLogout() {
        document.cookie = "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";
        router.push("/admin/login");
    }

    return (
        <>
            {/* Mobile top-bar */}
            <header className="admin-topbar">
                <button
                    className="admin-topbar__menu"
                    onClick={() => setOpen(true)}
                    aria-label="Open menu"
                >
                    <MdMenu />
                </button>
                <span className="admin-topbar__brand">Crown Edge Admin</span>
            </header>

            {/* Overlay */}
            {open && (
                <div
                    className="admin-overlay"
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside className={`admin-sidebar${open ? " admin-sidebar--open" : ""}`}>
                <div className="admin-sidebar__header">
                    <span className="admin-sidebar__brand">
                        <span className="admin-sidebar__brand-accent">Crown</span> Edge
                    </span>
                    <button
                        className="admin-sidebar__close"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >
                        <MdClose />
                    </button>
                </div>

                <nav className="admin-sidebar__nav">
                    {NAV.map(({ href, label, icon: Icon }) => {
                        const active =
                            href === "/admin"
                                ? pathname === "/admin"
                                : pathname.startsWith(href);
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`admin-nav-item${active ? " admin-nav-item--active" : ""}`}
                                onClick={() => setOpen(false)}
                            >
                                <Icon className="admin-nav-item__icon" aria-hidden="true" />
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="admin-sidebar__footer">
                    <Link href="/" className="admin-sidebar__home-link">
                        ← Back to Website
                    </Link>
                    <button className="admin-sidebar__logout" onClick={handleLogout}>
                        <MdLogout aria-hidden="true" /> Logout
                    </button>
                </div>
            </aside>
        </>
    );
}
