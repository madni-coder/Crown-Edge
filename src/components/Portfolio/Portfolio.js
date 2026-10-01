"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "../../lib/gsap";
import "./Portfolio.css";

const portfolioData = [
    {
        id: 1,
        title: "Saubhagya Weddings",
        category: "Website",
        description: "A wedding-planning brand site with elegant galleries and a simple booking enquiry flow.",
        image: "/sau.webp",
        link: "https://saubhagya-one.vercel.app/",
    },
    {
        id: 9,
        title: "Simnani Estates",
        category: "Website",
        description: "Property listings and lead-capture built for a growing real-estate brand.",
        image: "/sim.png",
        link: "https://www.simnaniestates.com/",
    },
    {
        id: 3,
        title: "Al Aziz Education",
        category: "Website",
        description: "An education platform with program information and an admissions enquiry funnel.",
        image: "/al-aziz.webp",
        link: "https://www.alazizedu.org/",
    },
    {
        id: 4,
        title: "Ambition Perfumes",
        category: "Website",
        description: "A fragrance brand showcase with a premium, minimal product catalog feel.",
        image: "/amss.webp",
        link: "https://ambtionperfumes.vercel.app/",
    },
    {
        id: 5,
        title: "Food Sport",
        category: "Website",
        description: "A food ordering experience built for speed, clarity, and repeat customers.",
        image: "/food.webp",
        link: "https://foodsport-dev.vercel.app/",
    },
    {
        id: 6,
        title: "Sunshine Hospitals",
        category: "Website",
        description: "A healthcare website focused on trust, clarity, and easy appointment enquiries.",
        image: "/sun.webp",
        link: "https://sunshine-hospital-rose.vercel.app",
    },
    {
        id: 7,
        title: "Choice Center",
        category: "Website",
        description: "An institutional site built for clear information architecture and easy navigation.",
        image: "/ss.webp",
        link: "https://shahjahan-cc.vercel.app/",
    },
    {
        id: 8,
        title: "Islamic Prayer Times",
        category: "Mobile App",
        description: "A prayer-times companion app with accurate, location-aware schedules.",
        image: "/pra.webp",
        link: "https://raahehidayat.vercel.app/",
    },
];

export default function Portfolio() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".portfolio-header > *", {
                y: 24,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        gsap.from(".uiverse-parent", {
            y: 24,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.08,
        });
    }, []);

    const openProjectLink = (e, link) => {
        e.stopPropagation();
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="portfolio" className="section" ref={sectionRef}>
            <div className="container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title">Our Projects</h2>
                    <p className="portfolio-subtitle">
                        Showcasing our best work across web development and
                        mobile app development projects
                    </p>
                </div>

                <div className="portfolio-grid">
                    {portfolioData.map((item) => (
                        <div key={item.id} className="uiverse-parent">
                            <div className="uiverse-card">
                                <div className="uiverse-logo">
                                    <span className="uiverse-circle uiverse-circle1"></span>
                                    <span className="uiverse-circle uiverse-circle2"></span>
                                    <span className="uiverse-circle uiverse-circle3"></span>
                                    <span className="uiverse-circle uiverse-circle4"></span>
                                    <span className="uiverse-circle uiverse-circle5">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="uiverse-svg"
                                        >
                                            <rect width="20" height="14" x="2" y="3" rx="2" />
                                            <line x1="8" x2="16" y1="21" y2="21" />
                                            <line x1="12" x2="12" y1="17" y2="21" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="uiverse-content">
                                    <span className="uiverse-title">{item.title}</span>
                                    <span className="uiverse-text">{item.description}</span>
                                </div>
                                <div className="uiverse-bottom">
                                    <div className="uiverse-view-more">
                                        <button
                                            className="uiverse-view-more-button"
                                            onClick={(e) => openProjectLink(e, item.link)}
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </div>
                                <div className="uiverse-image-wrap">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: "cover" }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
