"use client";

import { useRef } from "react";
import "./About.css";

const About = () => {
    const aboutRef = useRef(null);

    // Features/Services data

    const features = [
        {
            id: 1,
            icon: "🚀",
            title: "Innovation First",
            description:
                "We leverage cutting-edge technologies to create solutions that push boundaries and drive innovation.",
        },
        {
            id: 2,
            icon: "🎯",
            title: "Results Driven",
            description:
                "Every project is focused on delivering measurable results that contribute to your business growth.",
        },
        {
            id: 3,
            icon: "🤝",
            title: "Client Partnership",
            description:
                "We believe in building long-term partnerships, working closely with clients throughout the journey.",
        },
        {
            id: 4,
            icon: "⚡",
            title: "Fast Delivery",
            description:
                "Efficient workflows and agile methodologies ensure timely delivery without compromising quality.",
        },
    ];

    return (
        <section id="about" className="about" ref={aboutRef}>
            <div className="container">
                {/* Section Header */}
                <div className="about__header">
                    <div className="about__header-content animate-on-scroll">
                        <span className="about__label">About Our Company</span>
                        <h2 className="about__title">
                            We Build Websites & Mobile Apps
                            <span className="gradient-text">
                                {" "}
                                That Drive Results
                            </span>
                        </h2>
                        <p className="about__subtitle">
                            With years of expertise in website development and
                            mobile app development, we transform ideas into fast,
                            secure digital products that help businesses grow.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="about__content">
                    {/* Left Column - Story & Mission */}
                    <div className="about__story animate-on-scroll animate-slide-in-left">
                        <div className="about__story-content">
                            <h3 className="about__story-title">Our Story</h3>
                            <p className="about__story-text">
                                Founded with a vision to bridge the gap between
                                technology and business success, our company has
                                grown from a small team of passionate developers
                                to a web development and mobile app development
                                company trusted by businesses.
                            </p>
                            <p className="about__story-text">
                                We specialize in custom website development, web
                                application development, ecommerce development,
                                and Android/iOS app development that deliver
                                real business value. Our approach focuses on
                                performance, security, and measurable results.
                            </p>

                            {/* Mission Statement */}
                            <div className="about__mission">
                                <h4 className="about__mission-title">
                                    Our Mission
                                </h4>
                                <p className="about__mission-text">
                                    To empower businesses with innovative
                                    web development and mobile app development
                                    that drive growth, improve performance, and
                                    create lasting competitive advantages in the
                                    digital landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Features Grid */}

                    <div className="about__features animate-on-scroll animate-slide-in-right">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="about__feature animate-on-scroll"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                <div className="about__feature-icon">
                                    {feature.icon}
                                </div>
                                <div className="about__feature-content">
                                    <h5 className="about__feature-title">
                                        {feature.title}
                                    </h5>
                                    <p className="about__feature-description">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section - Values */}
                <div className="about__values animate-on-scroll mt-4">
                    <h3 className="about__values-title">Our Core Values</h3>
                    <div className="about__values-grid ">
                        <div className="about__value animate-on-scroll">
                            <div className="about__value-icon">💡</div>
                            <h4 className="about__value-title">Innovation</h4>
                            <p className="about__value-description">
                                Constantly exploring new technologies and
                                methodologies to deliver cutting-edge solutions.
                            </p>
                        </div>
                        <div className="about__value animate-on-scroll animate-delay-200">
                            <div className="about__value-icon">🔒</div>
                            <h4 className="about__value-title">Reliability</h4>
                            <p className="about__value-description">
                                Building robust, secure, and scalable solutions
                                that our clients can depend on.
                            </p>
                        </div>
                        <div className="about__value animate-on-scroll animate-delay-400">
                            <div className="about__value-icon">🌟</div>
                            <h4 className="about__value-title">Excellence</h4>
                            <p className="about__value-description">
                                Maintaining the highest standards in every
                                aspect of our work, from architecture to deployment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
