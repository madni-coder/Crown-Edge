"use client";

import { useEffect } from "react";
import {
    initScrollAnimations,
    addStaggeredAnimation,
} from "../../utils/animations";
import { initPerformanceOptimizations } from "../../utils/lazyLoad";
import "./Services.css";

const servicesData = [
    {
        id: 1,
        title: "Website Development",
        description:
            "Custom website development with responsive layouts, fast performance, and SEO-friendly code.",
        icon: "🌐",
        features: [
            "Responsive Website Design",
            "Performance Optimization",
            "SEO-Friendly Development",
            "Cross-Browser Compatibility",
        ],
    },
    {
        id: 2,
        title: "Web App Development",
        description:
            "Web application development for portals, dashboards, and business platforms.",
        icon: "📱",
        features: [
            "Custom Web Applications",
            "API Integrations",
            "Performance & Security",
            "Maintenance & Support",
        ],
    },

    {
        id: 3,
        title: "Android App Development",
        description:
            "Android app development for scalable, reliable, and user-friendly mobile apps.",
        icon: "🛒",
        features: [
            "Android App Development",
            "Google Play Store Launch",
            "Performance Optimization",
            "Ongoing Support",
        ],
    },
    {
        id: 4,
        title: "iOS App Development",
        description:
            "iOS app development for iPhone and iPad with smooth performance and stability.",
        icon: "🎨",
        features: [
            "iOS App Development",
            "App Store Submission",
            "Quality Assurance",
            "Ongoing Support",
        ],
    },

];

export default function Services() {
    useEffect(() => {
        // Initialize scroll animations
        initScrollAnimations();

        // Add staggered animation to service cards
        addStaggeredAnimation(".service-card", 100, 150);

        // Initialize performance optimizations
        initPerformanceOptimizations();
    }, []);

    return (
        <section id="services" className="section">
            <div className="container">
                <div className="services-header">
                    <h2 className="services-title animate-on-scroll">
                        Our Services
                    </h2>
                    <p className="services-subtitle animate-on-scroll animate-delay-200">
                        Web development and mobile app development solutions for
                        business growth
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className={`card card-active animate-on-scroll animate-delay-${(index + 1) * 100
                                }`}
                        >
                            <div className="light-layer">
                                <div className="slit"></div>
                                <div className="lumen">
                                    <div className="min"></div>
                                    <div className="mid"></div>
                                    <div className="hi"></div>
                                </div>
                                <div className="darken">
                                    <div className="sl"></div>
                                    <div className="ll"></div>
                                    <div className="slt"></div>
                                    <div className="srt"></div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="icon">
                                    <span
                                        className="icon-emoji"
                                        role="img"
                                        aria-label={service.title}
                                    >
                                        {service.icon}
                                    </span>
                                </div>
                                <div className="bottom">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
