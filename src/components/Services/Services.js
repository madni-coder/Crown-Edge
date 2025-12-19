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
        title: "Web Development",
        description:
            "Modern, responsive websites built with the latest technologies and best practices.",
        icon: "🌐",
        features: [
            "Responsive Design",
            "Performance Optimization",
            "SEO Ready",
            "Cross-browser Compatible",
        ],
    },
    {
        id: 2,
        title: "UI/UX Design",
        description:
            "Beautiful, user-friendly interfaces that convert visitors to customers.",
        icon: "🎨",
        features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Visual Design",
        ],
    },
    {
        id: 3,
        title: "Digital Marketing",
        description:
            "Strategic marketing campaigns that drive growth and engagement.",
        icon: "📈",
        features: [
            "SEO Strategy",
            "Social Media",
            "Content Marketing",
            "Analytics",
        ],
    },
    {
        id: 4,
        title: "E-commerce Solutions",
        description:
            "Complete online store solutions with secure payment processing.",
        icon: "🛒",
        features: [
            "Payment Integration",
            "Inventory Management",
            "Order Processing",
            "Mobile Commerce",
        ],
    },
    {
        id: 5,
        title: "Mobile App Development",
        description:
            "Native and cross-platform mobile applications for iOS and Android.",
        icon: "📱",
        features: [
            "iOS Development",
            "Android Development",
            "React Native",
            "App Store Optimization",
        ],
    },
    {
        id: 6,
        title: "Social Media Ads",
        description:
            "Boost your brand's visibility and engagement with our expert social media strategies.",
        icon: "📢",
        features: ["Google Ads", "Facebook Ads", "Instagram Ads"],
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
                        Comprehensive digital solutions for your business growth
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className={`card card-active animate-on-scroll animate-delay-${
                                (index + 1) * 100
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
