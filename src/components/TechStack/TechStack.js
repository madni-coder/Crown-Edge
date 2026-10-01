"use client";

import { useEffect, useRef, useState } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiThreedotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { gsap } from "../../lib/gsap";
import "./TechStack.css";

const stack = [
    { name: "React", blurb: "Component-driven UI, the foundation of every build.", icon: <SiReact /> },
    { name: "Next.js", blurb: "Server rendering, routing, and performance out of the box.", icon: <SiNextdotjs /> },
    { name: "Node.js", blurb: "Fast, scalable backend services and APIs.", icon: <SiNodedotjs /> },
    { name: "MongoDB", blurb: "Flexible, document-based data storage that scales.", icon: <SiMongodb /> },
    { name: "Express", blurb: "Lightweight routing and middleware for our APIs.", icon: <SiExpress /> },
    { name: "Tailwind CSS", blurb: "Consistent, utility-first styling at speed.", icon: <SiTailwindcss /> },
    { name: "Three.js", blurb: "Real-time 3D graphics for immersive web experiences.", icon: <SiThreedotjs /> },
    { name: "React Native", blurb: "One codebase, native Android & iOS apps.", icon: <TbBrandReactNative /> },
];

export default function TechStack() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tech-chip", {
                opacity: 0,
                y: 20,
                scale: 0.9,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.07,
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section tech" ref={sectionRef}>
            <div className="container">
                <div className="tech__header">
                    <span className="section-eyebrow">Our Toolkit</span>
                    <h2 className="tech__title">Technology we build with</h2>
                </div>

                <div className="tech__grid">
                    {stack.map((item, i) => (
                        <button
                            key={item.name}
                            type="button"
                            className={`tech-chip glass-panel ${activeIndex === i ? "is-active" : ""}`}
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseLeave={() => setActiveIndex(null)}
                            onFocus={() => setActiveIndex(i)}
                            onBlur={() => setActiveIndex(null)}
                        >
                            <span className="tech-chip__icon">{item.icon}</span>
                            <span className="tech-chip__name">{item.name}</span>
                            <span className="tech-chip__blurb">{item.blurb}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
