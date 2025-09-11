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
                    

                    {/* Contact Information */}
                    <div className="contact-info animate-on-scroll animate-delay-400 ">
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
                                       Sanjay Nagar
                                        <br />
Raipur                                    </p>
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
