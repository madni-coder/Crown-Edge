"use client";

import { useEffect, useRef } from "react";
import { FaRocket, FaBullseye, FaHandshake, FaBolt, FaLightbulb, FaLock, FaStar } from "react-icons/fa";
import { gsap } from "../../lib/gsap";
import "./About.css";

const features = [
    {
        id: 1,
        icon: <FaRocket />,
        title: "Innovation First",
        description:
            "We leverage cutting-edge technologies to create solutions that push boundaries and drive innovation.",
    },
    {
        id: 2,
        icon: <FaBullseye />,
        title: "Results Driven",
        description:
            "Every project is focused on delivering measurable results that contribute to your business growth.",
    },
    {
        id: 3,
        icon: <FaHandshake />,
        title: "Client Partnership",
        description:
            "We believe in building long-term partnerships, working closely with clients throughout the journey.",
    },
    {
        id: 4,
        icon: <FaBolt />,
        title: "Fast Delivery",
        description:
            "Efficient workflows and agile methodologies ensure timely delivery without compromising quality.",
    },
];

const values = [
    {
        id: 1,
        icon: <FaLightbulb />,
        title: "Innovation",
        description: "Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
        id: 2,
        icon: <FaLock />,
        title: "Reliability",
        description: "Building robust, secure, and scalable solutions that our clients can depend on.",
    },
    {
        id: 3,
        icon: <FaStar />,
        title: "Excellence",
        description: "Maintaining the highest standards in every aspect of our work, from architecture to deployment.",
    },
];

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about__header-content", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: ".about__header-content", start: "top 80%" },
            });
            gsap.from(".about__story", {
                x: -50,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: ".about__story", start: "top 80%" },
            });
            gsap.from(".about__feature", {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: { trigger: ".about__features", start: "top 85%" },
            });
            gsap.from(".about__value", {
                y: 30,
                opacity: 0,
                scale: 0.96,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: { trigger: ".about__values-grid", start: "top 85%" },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="section about" ref={sectionRef}>
            <div className="container">
                <div className="about__header">
                    <div className="about__header-content">
                        <span className="section-eyebrow">About Our Company</span>
                        <h2 className="about__title">
                            We Build Websites &amp; Mobile Apps
                            <span className="gradient-text"> That Drive Results</span>
                        </h2>
                        <p className="about__subtitle">
                            With years of expertise in website development and mobile app
                            development, we transform ideas into fast, secure digital
                            products that help businesses grow.
                        </p>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__story">
                        <div className="glass-panel about__story-content">
                            <h3 className="about__story-title">Our Story</h3>
                            <p className="about__story-text">
                                Founded with a vision to bridge the gap between technology
                                and business success, our company has grown from a small
                                team of passionate developers to a web development and
                                mobile app development company trusted by businesses.
                            </p>
                            <p className="about__story-text">
                                We specialize in custom website development, web
                                application development, ecommerce development, and
                                Android/iOS app development that deliver real business
                                value. Our approach focuses on performance, security, and
                                measurable results.
                            </p>
                            <div className="about__mission">
                                <h4 className="about__mission-title">Our Mission</h4>
                                <p className="about__mission-text">
                                    To empower businesses with innovative web development
                                    and mobile app development that drive growth, improve
                                    performance, and create lasting competitive advantages
                                    in the digital landscape.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about__features">
                        {features.map((feature) => (
                            <div key={feature.id} className="about__feature glass-panel glow-border">
                                <div className="about__feature-icon">{feature.icon}</div>
                                <div className="about__feature-content">
                                    <h5 className="about__feature-title">{feature.title}</h5>
                                    <p className="about__feature-description">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about__values">
                    <h3 className="about__values-title">Our Core Values</h3>
                    <div className="about__values-grid">
                        {values.map((value) => (
                            <div key={value.id} className="about__value glass-panel">
                                <div className="about__value-icon">{value.icon}</div>
                                <h4 className="about__value-title">{value.title}</h4>
                                <p className="about__value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
