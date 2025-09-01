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
        title: "E-commerce Platform",
        category: "web",
        image: "/api/placeholder/400/300",
        description:
            "Modern e-commerce platform with advanced filtering and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#",
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "mobile",
        image: "/api/placeholder/400/300",
        description:
            "Secure mobile banking application with biometric authentication.",
        technologies: ["React Native", "Firebase", "Biometrics"],
        link: "#",
    },
    {
        id: 3,
        title: "Brand Identity Design",
        category: "design",
        image: "/api/placeholder/400/300",
        description: "Complete brand identity package for a tech startup.",
        technologies: ["Figma", "Illustrator", "Photoshop"],
        link: "#",
    },
    {
        id: 4,
        title: "SaaS Dashboard",
        category: "web",
        image: "/api/placeholder/400/300",
        description:
            "Analytics dashboard for SaaS companies with real-time data visualization.",
        technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
        link: "#",
    },
    {
        id: 5,
        title: "Fitness Tracking App",
        category: "mobile",
        image: "/api/placeholder/400/300",
        description: "Comprehensive fitness tracking app with social features.",
        technologies: ["Flutter", "Firebase", "HealthKit"],
        link: "#",
    },
    {
        id: 6,
        title: "Restaurant Website",
        category: "web",
        image: "/api/placeholder/400/300",
        description:
            "Elegant restaurant website with online reservation system.",
        technologies: ["Next.js", "Sanity CMS", "Tailwind"],
        link: "#",
    },
    {
        id: 7,
        title: "UI/UX Case Study",
        category: "design",
        image: "/api/placeholder/400/300",
        description:
            "Complete UX research and design process for a fintech app.",
        technologies: ["Figma", "Miro", "Principle"],
        link: "#",
    },
    {
        id: 8,
        title: "Travel Planning App",
        category: "mobile",
        image: "/api/placeholder/400/300",
        description:
            "AI-powered travel planning app with personalized recommendations.",
        technologies: ["React Native", "AI/ML", "Maps API"],
        link: "#",
    },
    {
        id: 9,
        title: "Corporate Website",
        category: "web",
        image: "/api/placeholder/400/300",
        description: "Professional corporate website with CMS integration.",
        technologies: ["WordPress", "PHP", "MySQL"],
        link: "#",
    },
];

const categories = [
    { id: "all", label: "All Projects", count: portfolioData.length },
    {
        id: "web",
        label: "Web Development",
        count: portfolioData.filter((item) => item.category === "web").length,
    },
    {
        id: "mobile",
        label: "Mobile Apps",
        count: portfolioData.filter((item) => item.category === "mobile")
            .length,
    },
    {
        id: "design",
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
                        Our Portfolio
                    </h2>
                    <p className="portfolio-subtitle animate-on-scroll animate-delay-200">
                        Showcasing our best work across web, mobile, and design
                        projects
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="portfolio-filters animate-on-scroll animate-delay-300">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-btn ${
                                activeFilter === category.id ? "active" : ""
                            }`}
                            onClick={() => handleFilterChange(category.id)}
                            aria-label={`Filter by ${category.label}`}
                        >
                            {category.label}
                            <span className="filter-count">
                                ({category.count})
                            </span>
                        </button>
                    ))}
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
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        width: "100%",
                                        height: "200px",
                                    }}
                                    role="img"
                                    aria-label={item.title}
                                />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-overlay-content">
                                        <h3 className="portfolio-item-title">
                                            {item.title}
                                        </h3>
                                        <p className="portfolio-item-category">
                                            {item.category}
                                        </p>
                                        <div className="portfolio-view-btn">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {isLightboxOpen && selectedItem && (
                    <div className="lightbox-overlay" onClick={closeLightbox}>
                        <div
                            className="lightbox-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="lightbox-close"
                                onClick={closeLightbox}
                                aria-label="Close lightbox"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <div className="lightbox-image-container">
                                <div
                                    className="lightbox-image"
                                    style={{
                                        backgroundImage: `url(${selectedItem.image})`,
                                        backgroundSize: "contain",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        width: "100%",
                                        height: "400px",
                                    }}
                                    role="img"
                                    aria-label={selectedItem.title}
                                />
                            </div>

                            <div className="lightbox-info">
                                <h3 className="lightbox-title">
                                    {selectedItem.title}
                                </h3>
                                <p className="lightbox-description">
                                    {selectedItem.description}
                                </p>

                                <div className="lightbox-technologies">
                                    <h4>Technologies Used:</h4>
                                    <div className="tech-tags">
                                        {selectedItem.technologies.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="tech-tag"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                <a
                                    href={selectedItem.link}
                                    className="lightbox-cta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Live Project
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15,3 21,3 21,9"></polyline>
                                        <line
                                            x1="10"
                                            y1="14"
                                            x2="21"
                                            y2="3"
                                        ></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
