"use client";

import { useState, useEffect } from "react";
import { useResponsive } from "../../hooks/useResponsive";
import { IoCopyOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import "./Contact.css";

export default function Contact() {
    const { isMobile } = useResponsive();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [copiedItem, setCopiedItem] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        // animations removed — no-op
    }, []);

    const handleCopy = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(type);
            setTimeout(() => setCopiedItem(null), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const validateField = (name, value) => {
        switch (name) {
            case "name":
                return value.trim().length < 2
                    ? "Name must be at least 2 characters"
                    : "";
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value)
                    ? "Please enter a valid email address"
                    : "";
            case "subject":
                return value.trim().length < 3
                    ? "Subject must be at least 3 characters"
                    : "";
            case "message":
                return value.trim().length < 10
                    ? "Message must be at least 10 characters"
                    : "";
            default:
                return "";
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        if (error) {
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all fields
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-header">
                    <h2 className="contact-title">
                        Contact Us
                    </h2>
                    <p className="contact-subtitle">
                        Let&apos;s start your next project together
                    </p>
                </div>

                <div className="contact-content">
                    {/* 3D Get in Touch Card */}
                    <div className="contact-card-3d">
                        {/* Removed duplicate flip button in center */}
                        <div className="card-3d-inner">
                            {/* Animated Background Layers */}
                            <div className="card-bg-layer layer-1"></div>
                            <div className="card-bg-layer layer-2"></div>
                            <div className="card-bg-layer layer-3"></div>

                            {/* Glass morphism overlay */}
                            <div className="card-glass-overlay"></div>

                            {/* Card Content */}
                            <div className="card-3d-content">
                                <div className="card-header-3d">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon-glow"></div>
                                        <div className="card-icon">🤝</div>
                                    </div>
                                    <h3 className="card-title-3d">
                                        Get in Touch
                                    </h3>
                                    <p className="card-subtitle-3d">
                                        Ready to bring your vision to life?
                                        Let&apos;s create something amazing
                                        together.
                                    </p>
                                </div>

                                <div className="contact-details-3d">
                                    <div className="contact-detail-3d">
                                        <div className="detail-icon-3d">
                                            <div className="icon-ring"></div>
                                            <img
                                                src="/gmailLogo.png"
                                                alt="Gmail"
                                                className="gmail-icon detail-icon-img "
                                            />                                        </div>
                                        <div className="detail-content-3d">
                                            <h4 className="detail-title-3d">
                                                Email
                                            </h4>
                                            <p className="detail-text-3d">
                                                <span className="gmail-inline">

                                                    <span>info.crownedge@gmail.com</span>
                                                </span>
                                            </p>
                                        </div>
                                        <button
                                            className="copy-button"
                                            onClick={() =>
                                                handleCopy(
                                                    "info.crownedge@gmail.com",
                                                    "email"
                                                )
                                            }
                                            aria-label="Copy email address"
                                            title="Copy email"
                                        >
                                            <IoCopyOutline
                                                className={`copy-icon ${copiedItem === "email"
                                                    ? "copied"
                                                    : ""
                                                    }`}
                                            />
                                            {copiedItem === "email" && (
                                                <span className="copy-tooltip">
                                                    Copied!
                                                </span>
                                            )}
                                        </button>
                                        <div className="detail-shine"></div>
                                    </div>

                                    <div className="contact-detail-3d">
                                        <div className="detail-icon-3d">
                                            <div className="icon-ring"></div>
                                            <AiOutlinePhone className="phone-icon" />
                                        </div>
                                        <div className="detail-content-3d">
                                            <h4 className="detail-title-3d">
                                                Phone
                                            </h4>
                                            <p className="detail-text-3d">
                                                9993457671
                                            </p>
                                        </div>
                                        <button
                                            className="copy-button"
                                            onClick={() =>
                                                handleCopy(
                                                    "9993457671",
                                                    "phone"
                                                )
                                            }
                                            aria-label="Copy phone number"
                                            title="Copy phone"
                                        >
                                            <IoCopyOutline
                                                className={`copy-icon ${copiedItem === "phone"
                                                    ? "copied"
                                                    : ""
                                                    }`}
                                            />
                                            {copiedItem === "phone" && (
                                                <span className="copy-tooltip">
                                                    Copied!
                                                </span>
                                            )}
                                        </button>
                                        <div className="detail-shine"></div>
                                    </div>

                                    <div className="contact-detail-3d">
                                        <div className="detail-icon-3d">
                                            <div className="icon-ring"></div>
                                            <span>🏢</span>
                                        </div>
                                        <div className="detail-content-3d">
                                            <h4 className="detail-title-3d">
                                                Office
                                            </h4>
                                            <p className="detail-text-3d">
                                             Raipur Chhattisgarh
                                            </p>
                                        </div>
                                        <div className="detail-shine"></div>
                                    </div>

                                    <div className="contact-detail-3d">
                                        <div className="detail-icon-3d">
                                            <div className="icon-ring"></div>
                                            <FaWhatsapp className="whatsapp-icon" />
                                        </div>
                                        <div className="detail-content-3d">
                                            <h4 className="detail-title-3d">
                                                Reach Us On Whatsapp
                                            </h4>
                                            <p className="detail-text-3d">
                                                <a href="https://wa.me/message/K2MCIN3YCBWFA1" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                                                    Open WhatsApp
                                                </a>
                                            </p>
                                        </div>
                                        <div className="detail-shine"></div>
                                    </div>
                                </div>

                                <div className="card-divider-3d">
                                    <div className="divider-line"></div>
                                    <div className="divider-glow"></div>
                                </div>

                                {/* Floating particles removed to disable animations */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
