"use client";

import { useState, useEffect } from "react";
import { initScrollAnimations } from "../../utils/animations";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        initScrollAnimations();
    }, []);

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
                    <h2 className="contact-title animate-on-scroll">
                        Contact Us
                    </h2>
                    <p className="contact-subtitle animate-on-scroll animate-delay-200">
                        Let&apos;s start your next project together
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-container animate-on-scroll animate-delay-300">
                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="form-row">
                                <div className="form-group">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                        className={`form-input ${
                                            errors.name ? "error" : ""
                                        }`}
                                        placeholder="Your full name"
                                        required
                                        aria-describedby={
                                            errors.name
                                                ? "name-error"
                                                : undefined
                                        }
                                    />
                                    {errors.name && (
                                        <span
                                            id="name-error"
                                            className="form-error"
                                            role="alert"
                                        >
                                            {errors.name}
                                        </span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                        className={`form-input ${
                                            errors.email ? "error" : ""
                                        }`}
                                        placeholder="your.email@example.com"
                                        required
                                        aria-describedby={
                                            errors.email
                                                ? "email-error"
                                                : undefined
                                        }
                                    />
                                    {errors.email && (
                                        <span
                                            id="email-error"
                                            className="form-error"
                                            role="alert"
                                        >
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    className={`form-input ${
                                        errors.subject ? "error" : ""
                                    }`}
                                    placeholder="Project inquiry, consultation, etc."
                                    required
                                    aria-describedby={
                                        errors.subject
                                            ? "subject-error"
                                            : undefined
                                    }
                                />
                                {errors.subject && (
                                    <span
                                        id="subject-error"
                                        className="form-error"
                                        role="alert"
                                    >
                                        {errors.subject}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    className={`form-textarea ${
                                        errors.message ? "error" : ""
                                    }`}
                                    placeholder="Tell us about your project, goals, and how we can help..."
                                    rows="6"
                                    required
                                    aria-describedby={
                                        errors.message
                                            ? "message-error"
                                            : undefined
                                    }
                                />
                                {errors.message && (
                                    <span
                                        id="message-error"
                                        className="form-error"
                                        role="alert"
                                    >
                                        {errors.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className={`form-submit ${
                                    isSubmitting ? "submitting" : ""
                                }`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="submit-spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            {submitStatus && (
                                <div
                                    className={`submit-feedback ${submitStatus}`}
                                    role="alert"
                                >
                                    {submitStatus === "success" ? (
                                        <>
                                            <span className="feedback-icon">
                                                ✓
                                            </span>
                                            Thank you! Your message has been
                                            sent successfully.
                                        </>
                                    ) : (
                                        <>
                                            <span className="feedback-icon">
                                                ✗
                                            </span>
                                            Sorry, there was an error sending
                                            your message. Please try again.
                                        </>
                                    )}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info animate-on-scroll animate-delay-400">
                        <h3 className="contact-info-title">Get in Touch</h3>
                        <p className="contact-info-text">
                            Ready to bring your vision to life? We&apos;d love
                            to hear about your project and discuss how we can
                            help you achieve your goals.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="detail-icon">📧</div>
                                <div className="detail-content">
                                    <h4 className="detail-title">Email</h4>
                                    <p className="detail-text">
                                        hello@nexaagency.com
                                    </p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="detail-icon">📞</div>
                                <div className="detail-content">
                                    <h4 className="detail-title">Phone</h4>
                                    <p className="detail-text">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="detail-icon">📍</div>
                                <div className="detail-content">
                                    <h4 className="detail-title">Office</h4>
                                    <p className="detail-text">
                                        123 Innovation Street
                                        <br />
                                        Tech District, CA 90210
                                    </p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="detail-icon">⏰</div>
                                <div className="detail-content">
                                    <h4 className="detail-title">Hours</h4>
                                    <p className="detail-text">
                                        Mon - Fri: 9:00 AM - 6:00 PM
                                        <br />
                                        Weekend: By appointment
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social">
                            <h4 className="social-title">Follow Us</h4>
                            <div className="social-links">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
