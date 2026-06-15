"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
}

const videos: VideoItem[] = [
  {
    id: "nke3160rCas",
    title: "Introduction to Mutual Funds",
    description: "Learn the fundamentals of mutual funds, how they operate, and why they are a powerful vehicle for building wealth.",
    embedUrl: "https://www.youtube.com/embed/nke3160rCas"
  },
  {
    id: "QISY70zukng",
    title: "SIP: Systematic Investment Plans",
    description: "Discover how regular investing through SIP can help you build long-term wealth, average out purchase costs, and form a strong financial habit.",
    embedUrl: "https://www.youtube.com/embed/QISY70zukng"
  },
  {
    id: "5ThhgoWFHyc",
    title: "Impact of Inflation on Your Savings",
    description: "Explore how inflation reduces your purchasing power over time, and why investing is crucial to beat inflation and preserve capital.",
    embedUrl: "https://www.youtube.com/embed/5ThhgoWFHyc"
  },
  {
    id: "deaU-eVM5xs",
    title: "Term Life Insurance vs Health Insurance",
    description: "Understand the key differences between Term Life and Health Insurance, and how to balance both to ensure full family protection.",
    embedUrl: "https://www.youtube.com/embed/deaU-eVM5xs"
  },
  {
    id: "E0IsRmvkNwo",
    title: "National Pension System (NPS) Explained",
    description: "Learn how the National Pension System works, its dual benefit of retirement savings and tax deductions under Section 80CCD.",
    embedUrl: "https://www.youtube.com/embed/E0IsRmvkNwo?list=UUbdqkbn7Bu7wpdlBJR3xINg"
  },
  {
    id: "PmEhyAWcSz0",
    title: "Understanding Bonds & Fixed Income",
    description: "Explore how debt instruments and bonds work, their role in portfolio diversification, and how they offer stable interest payouts.",
    embedUrl: "https://www.youtube.com/embed/PmEhyAWcSz0"
  }
];

export default function EducationalVideos() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="about-banner" style={{
          backgroundColor: "var(--surface)",
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}>
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">Investor Zone</span>
              <h1 className="about-title">
                Educational Videos
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: "3rem 1.5rem", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2 style={{ fontSize: "1.75rem", color: "#1e293b", fontWeight: "600", marginBottom: "0.75rem" }}>
              Academy &amp; Insights
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#64748b", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
              Gain clarity on complex financial concepts. Our handpicked educational videos help you build the foundation for successful long-term financial planning.
            </p>
          </motion.div>

          {/* Videos Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
            marginBottom: "3.5rem"
          }}>
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  border: "1px solid #eaeaea",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* 16:9 Video Wrapper */}
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#000" }}>
                  <iframe
                    src={video.embedUrl}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                    allowFullScreen
                    title={video.title}
                  />
                </div>

                {/* Video Info Block */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#193c56", margin: "0 0 0.5rem 0", lineHeight: "1.4" }}>
                      {video.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: "1.5", margin: 0 }}>
                      {video.description}
                    </p>
                  </div>
                  
                  {/* Subtle video tag */}
                  <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{
                      display: "inline-block",
                      background: "rgba(1, 95, 175, 0.08)",
                      color: "#015FAF",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "12px"
                    }}>
                      Video #{idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}
          >
            <div style={{
              background: "#E87B1E",
              padding: "1rem 1.5rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1.5rem"
            }}>
              <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "500", color: "#fff" }}>
                If you have any query, please do contact us
              </p>
              <a href="tel:+917669016565" style={{
                background: "#2A8B42",
                color: "#fff",
                padding: "0.5rem 1.2rem",
                borderRadius: "4px",
                display: "inline-flex",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.85rem"
              }}>
                Call Us Now
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
