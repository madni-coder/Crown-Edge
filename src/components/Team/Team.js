"use client";

import { useEffect } from "react";
import {
    initScrollAnimations,
    addStaggeredAnimation,
} from "../../utils/animations";
import "./Team.css";

const teamData = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO & Founder",
        image: "👩‍💼",
        bio: "Visionary leader with 10+ years in digital innovation, driving strategic growth and client success.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Lead Developer",
        image: "👨‍💻",
        bio: "Full-stack expert specializing in modern web technologies and scalable architecture solutions.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "UX/UI Designer",
        image: "👩‍🎨",
        bio: "Creative designer focused on user-centered design and creating intuitive digital experiences.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        id: 4,
        name: "David Kim",
        position: "Marketing Director",
        image: "👨‍📊",
        bio: "Strategic marketer with expertise in digital campaigns and data-driven growth strategies.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        id: 5,
        name: "Lisa Thompson",
        position: "Project Manager",
        image: "👩‍💼",
        bio: "Agile project management expert ensuring seamless delivery and client satisfaction.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        id: 6,
        name: "Alex Rivera",
        position: "DevOps Engineer",
        image: "👨‍🔧",
        bio: "Infrastructure specialist focused on automation, scalability, and reliable deployment solutions.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
];

export default function Team() {
    useEffect(() => {
        // Initialize scroll animations
        initScrollAnimations();

        // Add staggered animation to team cards
        addStaggeredAnimation(".team-card", 100, 150);
    }, []);

    return (
        <section id="team" className="section">
            <div className="container">
                <div className="team-header">
                    <h2 className="team-title animate-on-scroll">Our Team</h2>
                    <p className="team-subtitle animate-on-scroll animate-delay-200">
                        Meet the experts behind our success
                    </p>
                </div>

                <div className="team-grid">
                    {teamData.map((member, index) => (
                        <div
                            key={member.id}
                            className={`team-card animate-on-scroll animate-delay-${
                                (index + 1) * 100
                            }`}
                        >
                            <div className="team-card-inner">
                                {/* Front of card */}
                                <div className="team-card-front">
                                    <div className="team-image">
                                        <span
                                            className="team-avatar"
                                            role="img"
                                            aria-label={`${member.name} avatar`}
                                        >
                                            {member.image}
                                        </span>
                                    </div>

                                    <div className="team-info">
                                        <h3 className="team-name">
                                            {member.name}
                                        </h3>
                                        <p className="team-position">
                                            {member.position}
                                        </p>
                                    </div>

                                    <div className="team-overlay">
                                        <p className="team-bio">{member.bio}</p>
                                        <div className="team-social">
                                            <a
                                                href={member.social.linkedin}
                                                className="social-link"
                                                aria-label={`${member.name} LinkedIn profile`}
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <span className="social-icon">
                                                    💼
                                                </span>
                                            </a>
                                            <a
                                                href={member.social.twitter}
                                                className="social-link"
                                                aria-label={`${member.name} Twitter profile`}
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <span className="social-icon">
                                                    🐦
                                                </span>
                                            </a>
                                            <a
                                                href={member.social.github}
                                                className="social-link"
                                                aria-label={`${member.name} GitHub profile`}
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <span className="social-icon">
                                                    💻
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Stats */}
                <div className="team-stats animate-on-scroll">
                    <div className="team-stats-grid">
                        <div className="team-stat">
                            <div className="stat-number gradient-text">15+</div>
                            <div className="stat-label">Team Members</div>
                        </div>
                        <div className="team-stat">
                            <div className="stat-number gradient-text">8+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="team-stat">
                            <div className="stat-number gradient-text">
                                200+
                            </div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="team-stat">
                            <div className="stat-number gradient-text">
                                24/7
                            </div>
                            <div className="stat-label">Support Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
