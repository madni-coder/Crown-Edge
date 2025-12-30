"use client";

import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import "./Hero.css";

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const [isCallFlipped, setIsCallFlipped] = useState(false);
    const [copyTooltip, setCopyTooltip] = useState(false);
    const phoneNumber = "9993457671";

    const handleCallClick = (e) => {
        // Prevent default link behavior (tel: on mac opens FaceTime)
        if (e && e.preventDefault) e.preventDefault();

        // Disable flip behavior on mobile devices; preserve desktop/web view
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

        if (isMobile) {
            // On mobile, open the phone dialer instead of scrolling or flipping
            if (typeof window !== "undefined") {
                window.location.href = `tel:${phoneNumber}`;
            }
            return;
        }

        // Toggle flip state on desktop/web; do not auto-reset
        setIsCallFlipped((prev) => !prev);

    };

    const handleCopyPhone = async () => {
        try {
            await navigator.clipboard.writeText(phoneNumber);
            setCopyTooltip(true);
            setTimeout(() => setCopyTooltip(false), 2000);
        } catch (err) {
            console.error("Failed to copy phone number:", err);
        }
    };

    const handleLearnMoreClick = () => {
        // Smooth scroll to about section
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section id="home" className="hero">
            {/* Background Elements */}
            <div className="hero__background">
                <div className="hero__gradient-overlay"></div>
                <div className="hero__particles">
                    <div className="hero__particle hero__particle--1"></div>
                    <div className="hero__particle hero__particle--2"></div>
                    <div className="hero__particle hero__particle--3"></div>
                    <div className="hero__particle hero__particle--4"></div>
                    <div className="hero__particle hero__particle--5"></div>
                </div>
            </div>

            <div className="container">
                <div className="hero__content">
                    {/* Main Headline */}
                    <div className="hero__text">
                        <h1
                            className={`hero__title ${isLoaded ? "hero__title--animate" : ""
                                }`}
                        >
                            <span className="hero__title-line hero__title-line--1">
                                CROWN EDGE{" "}
                            </span>
                            <span className="hero__title-line hero__title-line--2 gradient-text">
                                TECHNOLOGIES
                            </span>
                        </h1>

                        <div
                            className={`hero__slogan ${isLoaded ? "hero__slogan--animate" : ""
                                }`}
                        >
                            <span className="hero__slogan-text">
                                Empowering You with a Royal Edge
                            </span>
                            <div className="hero__slogan-accent"></div>
                        </div>

                        <div className="hero__subtitle-container">
                            <p
                                className={`hero__subtitle hero__subtitle--animated hero__subtitle--animate`}
                            >
                                Turn Your Business Into a Brand
                                <br />— Website Starts @ ₹9,999
                            </p>
                        </div>

                        {/* Hanging Call Banner (always visible) */}
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={handleCallClick}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleCallClick(e);
                                }
                            }}
                            className={`hero__call-banner ${isLoaded ? "hero__call-banner--animate" : ""}`}
                            aria-label="Contact us"
                        >
                            <div className={`hero__call-banner-content ${isCallFlipped ? "flipped" : ""}`}>
                                <div className="hero__call-front">
                                    <svg
                                        className="hero__call-icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="hero__call-text">contact us</span>
                                    <div className="hero__call-pulse"></div>
                                </div>

                                <div className="hero__call-back" aria-hidden={!isCallFlipped}>
                                    <span className="hero__call-back-text">
                                        <span>{phoneNumber}</span>
                                        <button
                                            type="button"
                                            className="hero__call-copy-btn"
                                            onClick={(ev) => {
                                                ev.stopPropagation();
                                                handleCopyPhone();
                                            }}
                                            aria-label="Copy phone number"
                                        >
                                            <IoCopyOutline />
                                        </button>
                                        {copyTooltip && (
                                            <span className="hero__call-copy-tooltip" role="status">Copied!</span>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual Element */}
                    <div
                        className={`hero__visual ${isLoaded ? "hero__visual--animate" : ""
                            }`}
                    >
                        <div className="hero__visual-container">
                            {/* Animated geometric shapes */}
                            <div className="hero__shape hero__shape--circle"></div>
                            <div className="hero__shape hero__shape--triangle"></div>
                            <div className="hero__shape hero__shape--square"></div>

                            {/* Central focal point */}
                            <div className="hero__focal-point">
                                <div className="hero__focal-inner">
                                    <svg
                                        className="hero__focal-icon"
                                        width="60"
                                        height="60"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                                            fill="url(#heroGradient)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="heroGradient"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="100%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#a18cd1"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#fbc2eb"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
