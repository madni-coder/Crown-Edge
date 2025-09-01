"use client";

import { useEffect, useState } from "react";
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

    const handleCTAClick = () => {
        // Smooth scroll to contact section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
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
                            className={`hero__title ${
                                isLoaded ? "hero__title--animate" : ""
                            }`}
                        >
                            <span className="hero__title-line hero__title-line--1">
                                Digital Solutions
                            </span>
                            <span className="hero__title-line hero__title-line--2 gradient-text">
                                That Drive Results
                            </span>
                        </h1>

                        <p
                            className={`hero__subtitle ${
                                isLoaded ? "hero__subtitle--animate" : ""
                            }`}
                        >
                            We create modern, responsive websites and digital
                            experiences that help your business grow and succeed
                            in the digital world.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div
                            className={`hero__actions ${
                                isLoaded ? "hero__actions--animate" : ""
                            }`}
                        >
                            <button
                                onClick={handleCTAClick}
                                className="hero__cta btn btn-primary"
                                aria-label="Get started with Nexa Agency"
                            >
                                <span className="hero__cta-text">
                                    Get Started
                                </span>
                                <svg
                                    className="hero__cta-icon"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12h14m-7-7l7 7-7 7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleLearnMoreClick}
                                className="hero__secondary-btn"
                                aria-label="Learn more about our services"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual Element */}
                    <div
                        className={`hero__visual ${
                            isLoaded ? "hero__visual--animate" : ""
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

                {/* Scroll Indicator */}
                <div
                    className={`hero__scroll-indicator ${
                        isLoaded ? "hero__scroll-indicator--animate" : ""
                    }`}
                >
                    <button
                        onClick={handleLearnMoreClick}
                        className="hero__scroll-btn"
                        aria-label="Scroll to learn more"
                    >
                        <span className="hero__scroll-text">
                            Scroll to explore
                        </span>
                        <div className="hero__scroll-arrow">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M7 13l5 5 5-5M7 6l5 5 5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
