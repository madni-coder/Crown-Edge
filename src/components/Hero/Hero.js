"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { IoCopyOutline } from "react-icons/io5";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useEnquireNow } from "../../context/EnquireNowContext";
import { useMediaQuery } from "../../hooks/useResponsive";
import { smoothScrollTo } from "../../utils/animations";
import "./Hero.css";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
    ssr: false,
    loading: () => <div className="hero__poster" aria-hidden="true" />,
});

const HEADLINE_WORDS = [
    "We", "Build", "Digital", "Experiences", "That", "Move", "You.",
];

const Hero = () => {
    const sectionRef = useRef(null);
    const headlineRef = useRef(null);
    const scrollProgress = useRef(0);
    const [isCallFlipped, setIsCallFlipped] = useState(false);
    const [copyTooltip, setCopyTooltip] = useState(false);
    const { openEnquiry } = useEnquireNow();
    const prefersReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
    const phoneNumber = "9993457671";

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                scrollProgress.current = self.progress;
            },
        });

        const words = headlineRef.current?.querySelectorAll(".hero__word") ?? [];
        let tl;
        if (prefersReduced) {
            gsap.set(words, { opacity: 1, yPercent: 0 });
        } else {
            tl = gsap.timeline({ delay: 0.3 });
            tl.fromTo(
                words,
                { yPercent: 120, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.06 }
            );
            tl.fromTo(
                ".hero__reveal",
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
                "-=0.4"
            );
        }

        return () => {
            trigger.kill();
            tl?.kill();
        };
    }, [prefersReduced]);

    const handleCallClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        if (isMobile) {
            if (typeof window !== "undefined") window.location.href = `tel:${phoneNumber}`;
            return;
        }
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

    const handleExploreWork = () => smoothScrollTo("portfolio", 80);

    return (
        <section id="home" className="hero" ref={sectionRef}>
            <div className="hero__canvas-wrap">
                <HeroCanvas scrollProgress={scrollProgress} reduced={prefersReduced} />
            </div>
            <div className="hero__gradient-overlay" aria-hidden="true" />

            <div className="container hero__container">
                <div className="hero__content">
                    <span className="hero__reveal hero__eyebrow section-eyebrow">
                        Empowering You with a Royal Edge
                    </span>

                    <h1 className="hero__title" ref={headlineRef} aria-label={HEADLINE_WORDS.join(" ")}>
                        {HEADLINE_WORDS.map((word, i) => (
                            <span className="hero__word-wrap" key={`${word}-${i}`}>
                                <span
                                    className={`hero__word ${i >= 4 ? "gradient-text" : ""}`}
                                >
                                    {word}
                                </span>
                            </span>
                        ))}
                    </h1>

                    <p className="hero__reveal hero__subtitle">
                        From stunning websites to powerful mobile apps, we turn
                        ambitious ideas into extraordinary digital products.
                    </p>

                    <div className="hero__reveal hero__cta-row">
                        <div
                            className="hero__price-badge"
                            data-cursor="Start"
                            role="button"
                            tabIndex={0}
                            onClick={() => openEnquiry()}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openEnquiry();
                                }
                            }}
                        >
                            <span className="hero__price-badge-dot" aria-hidden="true" />
                            Website Starts @ <strong>₹9,999</strong>
                        </div>
                        <button
                            type="button"
                            className="btn btn-ghost"
                            data-cursor="Scroll"
                            onClick={handleExploreWork}
                        >
                            Explore Our Work
                        </button>
                    </div>

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
                        className="hero__reveal hero__call-banner"
                        aria-label="Contact us"
                    >
                        <div className={`hero__call-banner-content ${isCallFlipped ? "flipped" : ""}`}>
                            <div className="hero__call-front">
                                <svg className="hero__call-icon" width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="hero__call-text">Call Us</span>
                                <div className="hero__call-pulse" />
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
            </div>
        </section>
    );
};

export default Hero;
