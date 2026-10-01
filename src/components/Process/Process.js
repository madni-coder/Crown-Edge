"use client";

import { useEffect, useRef } from "react";
import { FaMagnifyingGlass, FaChessKnight, FaPenRuler, FaCode, FaRocket } from "react-icons/fa6";
import { gsap } from "../../lib/gsap";
import { useMediaQuery } from "../../hooks/useResponsive";
import "./Process.css";

const stages = [
    {
        number: "01",
        title: "Discover",
        description: "Understand the business, goals, audience, and requirements.",
        icon: <FaMagnifyingGlass />,
    },
    {
        number: "02",
        title: "Strategize",
        description: "Plan the experience, technology, structure, and creative direction.",
        icon: <FaChessKnight />,
    },
    {
        number: "03",
        title: "Design",
        description: "Create beautiful, intuitive, user-centered interfaces.",
        icon: <FaPenRuler />,
    },
    {
        number: "04",
        title: "Develop",
        description: "Build responsive, secure, and high-performance digital products.",
        icon: <FaCode />,
    },
    {
        number: "05",
        title: "Launch",
        description: "Test, optimize, deploy, and support the finished product.",
        icon: <FaRocket />,
    },
];

export default function Process() {
    const sectionRef = useRef(null);
    const fillRef = useRef(null);
    const isDesktop = useMediaQuery("(min-width: 900px)");
    const prefersReduced = useMediaQuery("(prefers-reduced-motion: reduce)");

    useEffect(() => {
        const axis = isDesktop ? "scaleX" : "scaleY";

        if (prefersReduced) {
            gsap.set(fillRef.current, { [axis]: 1 });
            gsap.set(".process-stage", { opacity: 1, y: 0, x: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            gsap.set(fillRef.current, { [axis]: 0 });

            gsap.to(fillRef.current, {
                [axis]: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 65%",
                    scrub: true,
                },
            });

            gsap.from(".process-stage", {
                opacity: 0,
                y: isDesktop ? 30 : 0,
                x: isDesktop ? 0 : -24,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [isDesktop, prefersReduced]);

    return (
        <section className="section process" ref={sectionRef}>
            <div className="container">
                <div className="process__header">
                    <span className="section-eyebrow">Our Process</span>
                    <h2 className="process__title">From idea to launch, five steps</h2>
                </div>

                <div className="process__track">
                    <div className="process__line">
                        <div className="process__line-fill" ref={fillRef} />
                    </div>

                    {stages.map((stage) => (
                        <div className="process-stage" key={stage.number}>
                            <div className="process-stage__node glass-panel">
                                <span className="process-stage__icon">{stage.icon}</span>
                            </div>
                            <span className="process-stage__number">{stage.number}</span>
                            <h3 className="process-stage__title">{stage.title}</h3>
                            <p className="process-stage__desc">{stage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
