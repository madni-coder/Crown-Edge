"use client";

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import EnquireNow from "./EnquireNow";
import ResponsiveWrapper from "./ResponsiveWrapper";
import { EnquireNowProvider } from "../context/EnquireNowContext";
import "./PageShell.css";

/** Chrome shared by every standalone route, so pages stay plain server components. */
export default function PageShell({ children }) {
    return (
        <EnquireNowProvider>
            <ResponsiveWrapper>
                <Header />
                <EnquireNow />
                <main className="page-main">{children}</main>
                <Footer />
            </ResponsiveWrapper>
        </EnquireNowProvider>
    );
}

/** Page masthead: visible breadcrumb trail + the single H1 for the route. */
export function PageHero({ eyebrow, title, intro, crumb, children }) {
    return (
        <section className="page-hero">
            <div className="container">
                <nav className="page-hero__crumbs" aria-label="Breadcrumb">
                    <ol>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li aria-current="page">{crumb}</li>
                    </ol>
                </nav>
                {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
                <h1 className="page-hero__title">{title}</h1>
                {intro && <p className="page-hero__intro">{intro}</p>}
                {children}
            </div>
        </section>
    );
}

/** Closing conversion block — also the main internal link hub for each page. */
export function PageCta({
    title = "Ready to start your project?",
    body = "Tell us what you want to build. We reply to every enquiry within 24 hours with a clear scope, timeline and price.",
}) {
    return (
        <section className="page-cta">
            <div className="container">
                <div className="page-cta__inner glass-panel">
                    <h2 className="page-cta__title">{title}</h2>
                    <p className="page-cta__body">{body}</p>
                    <div className="page-cta__actions">
                        <Link href="/contact" className="btn btn-primary">
                            Get a free quote
                        </Link>
                        <a href="tel:+919993457671" className="btn btn-ghost">
                            Call +91 99934 57671
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
