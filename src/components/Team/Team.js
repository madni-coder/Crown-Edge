'use client'
import React, { useState, useRef, useEffect } from 'react';
import './Team.css';

const teamData = [
    {
        id: 1,
        name: "Sayyed Amaan Hussain",
        position: "Founder & CEO",
        image: "👨‍💻",
       
    },
    {
        id: 2,
        name: "Asad Madni",
        position: "CO FOUNDER",
        image: "👨‍💻",
       
    },
    {
        id: 3,
        name: "Syed Aaqib Ali",
        position: "Chief Technology Officer (CTO)",
        image: "👩‍🎨",
        
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
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Stats */}
               
            </div>
        </section>
    );
}
