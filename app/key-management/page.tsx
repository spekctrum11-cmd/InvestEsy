"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Pankaj Kumar",
    role: "CEO",
    image: "/key-management/pankaj-kumar.png",
    bio: "Pankaj Kumar is a highly experienced professional in the investment sector, boasting over 20 years of expertise. He's recognized as the founder of Invest Esy and is a key member of the Board. His role revolves around overseeing how investments are distributed, whether through various channels, direct sales, or institutional avenues. He's deeply involved in shaping business strategies, managing finances, and ensuring smooth distribution operations. Pankaj Kumar actively steers the company's growth by contributing extensively to strategy formulation. His responsibilities extend to handling employee relations and communication within the organization.",
  },
  {
    name: "Rricha Varshney",
    role: "Director",
    image: "/key-management/rricha-varshney.png",
    bio: "Rricha Varshney is a postgraduate who has used her resourcefulness and creativity to create success. With a passion for working hard, this attribute of Rricha has helped the company grow by leaps and bounds. Rricha contributes to the success of the company with her insight into key business levers and understanding of all business dynamics. Through her intense involvement in the processes of formulating strategy, she also directs the strategic direction and growth of the business. She also plays a crucial part in handling the relationship with staff and interaction. With a background in entrepreneurship, she has consistently propelled startups and established companies to new heights of growth.",
  },
];

export default function KeyManagement() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="about-banner">
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">Leadership</span>
              <h1 className="about-title">Key Management</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <section className="km-section">
        <div className="km-grid">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="km-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="km-card-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="km-card-image"
                />
              </div>
              <div className="km-card-body">
                <h2 className="km-card-name">{member.name}</h2>
                <span className="km-card-role">( {member.role} )</span>
                <p className="km-card-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
