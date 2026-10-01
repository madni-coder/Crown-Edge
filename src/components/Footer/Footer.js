"use client";

import Link from "next/link";
import { MdCall, MdLocationOn, MdEmail, MdArrowUpward } from "react-icons/md";
import { smoothScrollTo } from "../../utils/animations";
import "./Footer.css";

export default function Footer() {
    const handleNavClick = (e, targetId) => {
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
                            <li><a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a></li>
                            <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a></li>
                            <li><a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")}>Portfolio</a></li>
                            <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a></li>
                            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#services">Web Development</a></li>
                            <li><a href="#services">E-commerce Development</a></li>
                            <li><a href="#services">Mobile App Development</a></li>
                            <li><a href="#services">UI/UX Design</a></li>
                            <li><a href="#services">Automation &amp; AI Solutions</a></li>
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
                                <span>9993457671</span>
                            </div>
                            <div className="contact-item">
                                <MdLocationOn className="contact-icon" aria-hidden="true" />
                                <span>Office No 357, Sanjay Nagar, Raipur Chhattisgarh</span>
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
