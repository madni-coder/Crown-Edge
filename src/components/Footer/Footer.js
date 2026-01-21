"use client";

import { useEffect } from "react";
import { MdCall, MdLocationOn, MdEmail } from "react-icons/md";
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
                            Delivering custom web development and mobile app
                            development that drive growth, performance, and
                            measurable results.
                        </p>

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
                            <li>
                                <a href="/privacy">Privacy Policy</a>
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
                                <a href="#services">Web Application Development</a>
                            </li>
                            <li>
                                <a href="#services">E-commerce Development</a>
                            </li>
                            <li>
                                <a href="#services">Mobile App Development</a>
                            </li>
                            <li>
                                <a href="#services">Website Maintenance</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section animate-on-scroll animate-delay-400 ">
                        <h4 className="footer-title">Contact Info</h4>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <span className="contact-text">
                                    <span className="gmail-outline">
                                        <MdEmail className="contact-icon gmail-icon" aria-hidden="true" />
                                        <a href="mailto:info.crownedge@gmail.com">info.crownedge@gmail.com</a>
                                    </span>
                                </span>
                            </div>
                            <div className="contact-item">
                                <MdCall className="contact-icon" aria-hidden="true" />
                                <span className="contact-text">9993457671</span>
                            </div>
                            <div className="contact-item">
                                <MdLocationOn className="contact-icon" aria-hidden="true" />
                                <span className="contact-text">
                                    Raipur
                                    <br />
                                    Chhattisgarh
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom animate-on-scroll">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © 2026 Crown Edge Technologies. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="/privacy" className="footer-link">
                                Privacy Policy
                            </a>
                            <a href="/privacy" className="footer-link">
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
