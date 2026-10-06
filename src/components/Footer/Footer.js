"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCall, MdLocationOn, MdEmail, MdArrowUpward } from "react-icons/md";
import { smoothScrollTo } from "../../utils/animations";
import "./Footer.css";

const quickLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "portfolio", label: "Portfolio", href: "/portfolio" },
    { id: "contact", label: "Contact", href: "/contact" },
];

const serviceLinks = [
    { label: "Website Development", hash: "website-development" },
    { label: "Web App Development", hash: "web-application-development" },
    { label: "E-commerce Development", hash: "ecommerce-development" },
    { label: "Android App Development", hash: "android-app-development" },
    { label: "iOS App Development", hash: "ios-app-development" },
    { label: "UI/UX Design", hash: "ui-ux-design" },
];

export default function Footer() {
    const pathname = usePathname();

    // On the one-page home route the links still scroll; elsewhere they navigate.
    const handleNavClick = (e, targetId) => {
        if (pathname !== "/" || targetId === "home") return;
        e.preventDefault();
        smoothScrollTo(targetId, 80);
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="footer">
            <div className="footer__wordmark-wrap">
                <span className="footer__wordmark">Crown Edge Technologies</span>
            </div>

            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="logo-text gradient-text">Crown Edge Technologies</h3>
                        <p className="logo-tagline">Empowering You with a Royal Edge</p>
                        <p className="footer-description">
                            Delivering custom web development and mobile app development
                            that drive growth, performance, and measurable results.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.href} onClick={(e) => handleNavClick(e, item.id)}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            {serviceLinks.map((item) => (
                                <li key={item.hash}>
                                    <Link href={`/services#${item.hash}`}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Contact Info</h4>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <MdEmail className="contact-icon" aria-hidden="true" />
                                <a href="mailto:info.crownedge@gmail.com">info.crownedge@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <MdCall className="contact-icon" aria-hidden="true" />
                                <a href="tel:+919993457671">+91 99934 57671</a>
                            </div>
                            <div className="contact-item">
                                <MdLocationOn className="contact-icon" aria-hidden="true" />
                                <address>Office No 357, Sanjay Nagar, Raipur, Chhattisgarh, India</address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Crown Edge Technologies. All rights reserved.</p>
                    <button
                        className="footer__back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        type="button"
                    >
                        <MdArrowUpward />
                    </button>
                </div>
            </div>
        </footer>
    );
}
