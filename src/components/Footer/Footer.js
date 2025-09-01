"use client";

import { useEffect } from "react";
import { initScrollAnimations, smoothScrollTo } from "../../utils/animations";
import "./Footer.css";

export default function Footer() {
    useEffect(() => {
        initScrollAnimations();
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        smoothScrollTo(targetId, 80);
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section animate-on-scroll">
                        <div className="footer-logo">
                            <h3 className="logo-text gradient-text">
                                Nexa Agency
                            </h3>
                            <p className="logo-tagline">
                                Digital Innovation Partners
                            </p>
                        </div>
                        <p className="footer-description">
                            Transforming ideas into powerful digital solutions
                            that drive business growth and create exceptional
                            user experiences.
                        </p>
                        <div className="footer-social">
                            <a
                                href="#"
                                className="social-link"
                                aria-label="LinkedIn"
                            >
                                <span className="social-icon">💼</span>
                            </a>
                            <a
                                href="#"
                                className="social-link"
                                aria-label="Twitter"
                            >
                                <span className="social-icon">🐦</span>
                            </a>
                            <a
                                href="#"
                                className="social-link"
                                aria-label="GitHub"
                            >
                                <span className="social-icon">💻</span>
                            </a>
                            <a
                                href="#"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <span className="social-icon">📷</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section animate-on-scroll animate-delay-200">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <a
                                    href="#home"
                                    onClick={(e) => handleNavClick(e, "home")}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => handleNavClick(e, "about")}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) =>
                                        handleNavClick(e, "services")
                                    }
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    onClick={(e) =>
                                        handleNavClick(e, "portfolio")
                                    }
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#team"
                                    onClick={(e) => handleNavClick(e, "team")}
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) =>
                                        handleNavClick(e, "contact")
                                    }
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section animate-on-scroll animate-delay-300">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="#services">Web Development</a>
                            </li>
                            <li>
                                <a href="#services">UI/UX Design</a>
                            </li>
                            <li>
                                <a href="#services">Digital Marketing</a>
                            </li>
                            <li>
                                <a href="#services">E-commerce Solutions</a>
                            </li>
                            <li>
                                <a href="#services">Mobile Development</a>
                            </li>
                            <li>
                                <a href="#services">Cloud Solutions</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section animate-on-scroll animate-delay-400">
                        <h4 className="footer-title">Contact Info</h4>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <span className="contact-text">
                                    hello@nexaagency.com
                                </span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span className="contact-text">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span className="contact-text">
                                    123 Innovation Street
                                    <br />
                                    Tech District, CA 90210
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom animate-on-scroll">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © 2024 Nexa Agency. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#" className="footer-link">
                                Privacy Policy
                            </a>
                            <a href="#" className="footer-link">
                                Terms of Service
                            </a>
                            <a href="#" className="footer-link">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                className="back-to-top animate-on-scroll"
                onClick={() => smoothScrollTo("home")}
                aria-label="Back to top"
            >
                <span className="back-to-top-icon">↑</span>
            </button>
        </footer>
    );
}
