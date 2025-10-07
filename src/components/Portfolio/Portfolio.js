"use client";

import { useState, useEffect } from "react";
import {
    initScrollAnimations,
    addStaggeredAnimation,
} from "../../utils/animations";
import "./Portfolio.css";

const portfolioData = [
    {
        id: 1,
        title: "Food Sport",
        category: "Website",
        image: "/food.png",

        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://foodsport-dev.vercel.app/",
    },
    {
        id: 2,
        title: "Islamic Prayer Times",
        category: "Mobile App",
        image: "/prayer.png",

        technologies: ["React Native", "Firebase", "Biometrics"],
        link: "https://madni-prayer.vercel.app/",
    },
    {
        id: 3,
        title: "Al Aziz Education",
        category: "Website",
        image: "/alazeez.png",
        technologies: ["Figma", "Illustrator", "Photoshop"],
        link: "https://www.alazizedu.org/",
    },
];

const categories = [
    { id: "all", label: "All Projects", count: portfolioData.length },
    {
        id: "Website",
        label: "Web Development",
        count: portfolioData.filter((item) => item.category === "web").length,
    },
    {
        id: "Mobile App",
        label: "Mobile Apps",
        count: portfolioData.filter((item) => item.category === "mobile")
            .length,
    },
    {
        id: "Web & Mobile",
        label: "UI/UX Design",
        count: portfolioData.filter((item) => item.category === "design")
            .length,
    },
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [filteredItems, setFilteredItems] = useState(portfolioData);

    useEffect(() => {
        // Initialize scroll animations
        initScrollAnimations();

        // Add staggered animation to portfolio items
        addStaggeredAnimation(".portfolio-item", 100, 100);
    }, []);

    useEffect(() => {
        // Filter items based on active filter
        if (activeFilter === "all") {
            setFilteredItems(portfolioData);
        } else {
            setFilteredItems(
                portfolioData.filter((item) => item.category === activeFilter)
            );
        }
    }, [activeFilter]);

    const handleFilterChange = (categoryId) => {
        setActiveFilter(categoryId);
    };

    const openProjectLink = (e, link) => {
        e.stopPropagation(); // Prevent event bubbling
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title animate-on-scroll">
                        Our Projects
                    </h2>
                    <p className="portfolio-subtitle animate-on-scroll animate-delay-200">
                        Showcasing our best work across web, mobile, and design
                        projects
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="portfolio-grid">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="uiverse-parent animate-on-scroll animate-delay-100"
                        >
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
                                            <rect
                                                width="20"
                                                height="14"
                                                x="2"
                                                y="3"
                                                rx="2"
                                            />
                                            <line
                                                x1="8"
                                                x2="16"
                                                y1="21"
                                                y2="21"
                                            />
                                            <line
                                                x1="12"
                                                x2="12"
                                                y1="17"
                                                y2="21"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="uiverse-content">
                                    <span className="uiverse-title">
                                        {item.title}
                                    </span>
                                </div>
                                <div className="uiverse-bottom">
                                    <div className="uiverse-view-more">
                                        <button
                                            className="uiverse-view-more-button"
                                            onClick={(e) =>
                                                openProjectLink(e, item.link)
                                            }
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "50%",
                                        borderTopLeftRadius: "50px",
                                        borderTopRightRadius: "50px",
                                        overflow: "hidden",
                                        zIndex: 1,
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
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
