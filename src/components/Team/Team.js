"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./Team.css";

const teamData = [
    {
        id: 1,
        name: "Syed Amaan Hussain",
        position: "CEO",
        image: "/api/placeholder/400/320",
        borderColor: "#8B2A2A",
        bgGradient:
            "linear-gradient(135deg, rgba(139, 42, 42, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)",
    },
    {
        id: 2,
        name: "Asad Madni",
        position: "Co Founder",
        image: "/api/placeholder/400/320",
        borderColor: "#1B4F72",
        bgGradient:
            "linear-gradient(135deg, rgba(27, 79, 114, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)",
    },
    {
        id: 3,
        name: "Syed Aqib Ali",
        position: "CTO",
        image: "/api/placeholder/400/320",
        borderColor: "#6A4C93",
        bgGradient:
            "linear-gradient(135deg, rgba(106, 76, 147, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)",
    },
];

export default function Team() {
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
                    {teamData.map((card, index) => (
                        <div
                            key={card.id}
                            className={`moon-card animate-on-scroll animate-delay-${
                                (index + 1) * 100
                            }`}
                            style={{
                                "--border-color": card.borderColor,
                                "--bg-gradient": card.bgGradient,
                            }}
                        >
                            <div className="moon-card-content">
                                <h3 className="moon-card-title">{card.name}</h3>
                                <p className="moon-card-description">
                                    {card.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
