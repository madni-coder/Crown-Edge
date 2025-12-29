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
                            <h3 className="logo-text gradient-text ">
                                Crown Edge Technologies
                            </h3>
                            <p className="logo-tagline">
                                Empowering You with a Royal Edge
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
                                <a href="#services">Mobile App Development</a>
                            </li>
                            <li>
                                <a href="#services">
                                    Social Media Marketing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section animate-on-scroll animate-delay-400 ">
                        <h4 className="footer-title">Contact Info</h4>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <span className="contact-text">
                                    <span className="gmail-inline">
                                        <img
                                            src="/gmailLogo.png"
                                            alt="Gmail"
                                            className="gmail-icon"
                                        />
                                        <a href="mailto:info.crownedge@gmail.com">info.crownedge@gmail.com</a>
                                    </span>
                                </span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span className="contact-text">9993457671</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span className="contact-text">
                                    Sanjay Nagar
                                    <br />
                                    Raipur
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom animate-on-scroll">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © 2025 Crown Edge Technologies. All rights reserved.
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
        </footer>
    );
}
