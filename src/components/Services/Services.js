"use client";

import { useEffect, useRef } from "react";
import { FaGlobe, FaMobile, FaAndroid, FaApple } from "react-icons/fa";
import { gsap } from "../../lib/gsap";
import "./Services.css";

const servicesData = [
    {
        id: 1,
        title: "Website Development",
        description: "Custom website development with responsive layouts.",
        icon: <FaGlobe />,
    },
    {
        id: 2,
        title: "Web App Development",
        description: "Web application development for portals, dashboards, and business platforms.",
        icon: <FaMobile />,
    },
    {
        id: 3,
        title: "Android App Development",
        description: "Android app development for scalable, reliable, and user-friendly mobile apps.",
        icon: <FaAndroid />,
    },
    {
        id: 4,
        title: "iOS App Development",
        description: "iOS app development for iPhone and iPad with smooth performance and stability.",
        icon: <FaApple />,
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".services-header > *", {
                y: 24,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
            });
            gsap.from(".card", {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" className="section" ref={sectionRef}>
            <div className="container">
                <div className="services-header">
                    <h2 className="services-title">Our Services</h2>
                    <p className="services-subtitle">
                        Web development and mobile app development solutions for
                        business growth
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="card card-active">
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
                                    <span className="icon-emoji" role="img" aria-label={service.title}>
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
