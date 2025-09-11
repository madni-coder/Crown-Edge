"use client";

import { useState, useEffect, useCallback } from "react";
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
    const [selectedItem, setSelectedItem] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

    const openLightbox = (item) => {
        setSelectedItem(item);
        setIsLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const openProjectLink = (e, link) => {
        e.stopPropagation(); // Prevent opening lightbox
        window.open(link, "_blank", "noopener,noreferrer");
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedItem(null);
        document.body.style.overflow = "unset";
    };

    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
    }, []);

    useEffect(() => {
        if (isLightboxOpen) {
            document.addEventListener("keydown", handleKeyDown);
            return () => document.removeEventListener("keydown", handleKeyDown);
        }
    }, [isLightboxOpen, handleKeyDown]);

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
                            className={`portfolio-item animate-on-scroll animate-delay-${
                                (index + 1) * 100
                            }`}
                            onClick={() => openLightbox(item)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openLightbox(item);
                                }
                            }}
                            aria-label={`View details for ${item.title}`}
                        >
                            <div className="portfolio-image-container">
                                <div
                                    className="portfolio-image"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                    role="img"
                                    aria-label={item.title}
                                />
                            </div>
                            <div className="portfolio-overlay">
                                <div className="portfolio-overlay-content">
                                    <h3 className="portfolio-item-title">
                                        {item.title}
                                    </h3>
                                    <p className="portfolio-item-category">
                                        {item.category}
                                    </p>
                                    <button
                                        className="portfolio-view-btn"
                                        onClick={(e) =>
                                            openProjectLink(e, item.link)
                                        }
                                    >
                                        <span>View Project</span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
