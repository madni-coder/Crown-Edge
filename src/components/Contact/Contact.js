"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io5";
import { FaWhatsapp, FaHandshake, FaBuilding, FaSpinner } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { gsap } from "../../lib/gsap";
import "./Contact.css";

const SERVICES = [
    { value: "", label: "Select a service…" },
    { value: "website", label: "Website" },
    { value: "web-app", label: "Web Application" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "software", label: "Software" },
];

const INITIAL = { fullName: "", mobile: "", service: "", city: "" };

export default function Contact() {
    const router = useRouter();
    const sectionRef = useRef(null);
    const [form, setForm] = useState(INITIAL);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copiedItem, setCopiedItem] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact__info, .contact__form-panel", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
            });
        }, sectionRef);
        return () => ctx.revert();
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

    const validate = () => {
        const newErrors = {};
        if (!form.fullName.trim() || form.fullName.trim().length < 2) {
            newErrors.fullName = "Please enter your name (min. 2 characters).";
        }
        if (!/^\d{10}$/.test(form.mobile.trim())) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }
        if (!form.service) {
            newErrors.service = "Please select a service.";
        }
        if (!form.city.trim() || form.city.trim().length < 2) {
            newErrors.city = "Please enter your city.";
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobile" && value && !/^\d*$/.test(value)) return;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await axios.post("/api/enquiries", {
                fullName: form.fullName.trim(),
                mobile: form.mobile.trim(),
                service: form.service,
                city: form.city.trim(),
            });
            setForm(INITIAL);
            setErrors({});
            router.push("/thank-you");
        } catch (err) {
            const msg = err?.response?.data?.error || "Submission failed. Please try again.";
            setErrors({ submit: msg });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section contact" ref={sectionRef}>
            <div className="contact__ambient" aria-hidden="true" />
            <div className="container">
                <div className="contact-header">
                    <span className="section-eyebrow">Get In Touch</span>
                    <h2 className="contact-title">Have an Idea? Let&apos;s Build Something Extraordinary.</h2>
                    <p className="contact-subtitle">
                        Tell us what you&apos;re imagining — we&apos;ll help you turn it into a
                        digital product.
                    </p>
                </div>

                <div className="contact__layout">
                    <div className="contact__info glass-panel">
                        <div className="contact__info-head">
                            <div className="contact__info-icon"><FaHandshake /></div>
                            <h3>Get in Touch</h3>
                            <p>Ready to build a high-performing website or mobile app? Let&apos;s talk.</p>
                        </div>

                        <div className="contact__detail">
                            <div className="contact__detail-icon">
                                <Image src="/gmailLogo.webp" alt="Gmail" width={20} height={20} className="contact__gmail-icon" />
                            </div>
                            <div className="contact__detail-body">
                                <h4>Email</h4>
                                <p>info.crownedge@gmail.com</p>
                            </div>
                            <button
                                className="contact__copy-btn"
                                onClick={() => handleCopy("info.crownedge@gmail.com", "email")}
                                aria-label="Copy email address"
                                type="button"
                            >
                                <IoCopyOutline />
                                {copiedItem === "email" && <span className="contact__copy-tooltip">Copied!</span>}
                            </button>
                        </div>

                        <div className="contact__detail">
                            <div className="contact__detail-icon"><AiOutlinePhone /></div>
                            <div className="contact__detail-body">
                                <h4>Phone</h4>
                                <p>9993457671</p>
                            </div>
                            <button
                                className="contact__copy-btn"
                                onClick={() => handleCopy("9993457671", "phone")}
                                aria-label="Copy phone number"
                                type="button"
                            >
                                <IoCopyOutline />
                                {copiedItem === "phone" && <span className="contact__copy-tooltip">Copied!</span>}
                            </button>
                        </div>

                        <div className="contact__detail">
                            <div className="contact__detail-icon"><FaBuilding /></div>
                            <div className="contact__detail-body">
                                <h4>Office</h4>
                                <p>Office No 357, Sanjay Nagar, Raipur Chhattisgarh</p>
                            </div>
                        </div>

                        <div className="contact__detail">
                            <div className="contact__detail-icon"><FaWhatsapp /></div>
                            <div className="contact__detail-body">
                                <h4>Reach Us On WhatsApp</h4>
                                <p>
                                    <a
                                        href="https://wa.me/message/K2MCIN3YCBWFA1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-cursor="Chat"
                                    >
                                        Open WhatsApp
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact__form-panel glass-panel glow-border">
                        <form className="contact__form" onSubmit={handleSubmit} noValidate>
                            <div className="contact__field">
                                <label htmlFor="contact-fullName">Name <span>*</span></label>
                                <input
                                    id="contact-fullName"
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    maxLength={80}
                                    className={errors.fullName ? "error" : ""}
                                />
                                {errors.fullName && <span className="contact__error">{errors.fullName}</span>}
                            </div>

                            <div className="contact__field">
                                <label htmlFor="contact-mobile">Mobile Number <span>*</span></label>
                                <input
                                    id="contact-mobile"
                                    type="tel"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                    autoComplete="tel"
                                    maxLength={10}
                                    inputMode="numeric"
                                    className={errors.mobile ? "error" : ""}
                                />
                                {errors.mobile && <span className="contact__error">{errors.mobile}</span>}
                            </div>

                            <div className="contact__field">
                                <label htmlFor="contact-service">Project Type <span>*</span></label>
                                <select
                                    id="contact-service"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className={errors.service ? "error" : ""}
                                >
                                    {SERVICES.map((s) => (
                                        <option key={s.value} value={s.value} disabled={s.value === ""}>
                                            {s.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.service && <span className="contact__error">{errors.service}</span>}
                            </div>

                            <div className="contact__field">
                                <label htmlFor="contact-city">City <span>*</span></label>
                                <input
                                    id="contact-city"
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="e.g. Raipur"
                                    autoComplete="address-level2"
                                    maxLength={60}
                                    className={errors.city ? "error" : ""}
                                />
                                {errors.city && <span className="contact__error">{errors.city}</span>}
                            </div>

                            {errors.submit && (
                                <span className="contact__error contact__error--submit">{errors.submit}</span>
                            )}

                            <button type="submit" className="btn btn-primary contact__submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="contact__spin" /> Sending…
                                    </>
                                ) : (
                                    <>
                                        <FiSend /> Send Inquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
