"use client";

import { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
    const aboutRef = useRef(null);

    // Statistics data
    const stats = [
        {
            id: 1,
            number: 150,
            suffix: "+",
            label: "Projects Completed",
            description:
                "Successfully delivered projects across various industries",
        },
        {
            id: 2,
            number: 50,
            suffix: "+",
            label: "Happy Clients",
            description: "Satisfied clients who trust our expertise",
        },
        {
            id: 3,
            number: 5,
            suffix: "+",
            label: "Years Experience",
            description: "Years of excellence in digital solutions",
        },
        {
            id: 4,
            number: 98,
            suffix: "%",
            label: "Success Rate",
            description: "Project completion rate with client satisfaction",
        },
    ];

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
                        <span className="about__label">About Nexa Agency</span>
                        <h2 className="about__title">
                            We Create Digital Experiences
                            <span className="gradient-text">
                                {" "}
                                That Drive Results
                            </span>
                        </h2>
                        <p className="about__subtitle">
                            With years of expertise in digital innovation, we
                            transform ideas into powerful digital solutions that
                            help businesses thrive in the modern world.
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
                                technology and business success, Nexa Agency has
                                grown from a small team of passionate developers
                                to a full-service digital agency trusted by
                                companies worldwide.
                            </p>
                            <p className="about__story-text">
                                We specialize in creating custom web
                                applications, mobile solutions, and digital
                                marketing strategies that not only look great
                                but deliver real business value. Our approach
                                combines creativity with technical expertise to
                                ensure every project exceeds expectations.
                            </p>

                            {/* Mission Statement */}
                            <div className="about__mission">
                                <h4 className="about__mission-title">
                                    Our Mission
                                </h4>
                                <p className="about__mission-text">
                                    To empower businesses with innovative
                                    digital solutions that drive growth, enhance
                                    user experiences, and create lasting
                                    competitive advantages in the digital
                                    landscape.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="about__features">
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
                    </div>

                    {/* Right Column - Statistics */}
                    <div className="about__stats animate-on-scroll animate-slide-in-right">
                        <div className="about__stats-content">
                            <h3 className="about__stats-title">
                                By the Numbers
                            </h3>
                            <p className="about__stats-subtitle">
                                Our track record speaks for itself. Here&apos;s
                                what we&apos;ve achieved together with our
                                clients.
                            </p>

                            <div className="about__stats-grid">
                                {stats.map((stat, index) => (
                                    <div
                                        key={stat.id}
                                        className="about__stat animate-on-scroll"
                                        style={{
                                            animationDelay: `${index * 0.2}s`,
                                        }}
                                    >
                                        <div className="about__stat-number">
                                            <span
                                                className="about__stat-value gradient-text"
                                                data-counter={stat.number}
                                                data-duration="2000"
                                            >
                                                0
                                            </span>
                                            <span className="about__stat-suffix">
                                                {stat.suffix}
                                            </span>
                                        </div>
                                        <h4 className="about__stat-label">
                                            {stat.label}
                                        </h4>
                                        <p className="about__stat-description">
                                            {stat.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Call to Action */}
                            <div className="about__cta animate-on-scroll">
                                <h4 className="about__cta-title">
                                    Ready to Start Your Project?
                                </h4>
                                <p className="about__cta-text">
                                    Let&apos;s discuss how we can help bring
                                    your vision to life with our expertise and
                                    passion.
                                </p>
                                <button
                                    className="about__cta-button btn btn-primary"
                                    onClick={() => {
                                        const contactSection =
                                            document.getElementById("contact");
                                        if (contactSection) {
                                            contactSection.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Values */}
                <div className="about__values animate-on-scroll">
                    <h3 className="about__values-title">Our Core Values</h3>
                    <div className="about__values-grid">
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
                                aspect of our work, from design to deployment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
