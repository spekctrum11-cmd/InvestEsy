"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div style={{ position: "relative", height: "220px", overflow: "hidden", marginTop: "130px" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground)"
            }}
          >
            <div className="container" style={{ maxWidth: "800px", width: "100%", textAlign: "left" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: "rgba(15, 23, 42, 0.06)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                  color: "var(--primary)"
                }}
              >
                About Us
              </span>
              <h1
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "var(--foreground)"
                }}
              >
                InvestEsy — Real Fincorp Private Limited
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Text Left, Image Right */}
      <section className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem clamp(1rem, 4vw, 2.5rem)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center"
          }}
          className="about-grid"
        >
          <div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.3, textAlign: "justify", marginBottom: "0.75rem" }}>
              In a era of constant changing and volatile financial Market, Investors need an Qualified /Trained and unbiased professional to assist them in achieving their short term and long term Investment goal.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.3, textAlign: "justify", marginBottom: "0.75rem" }}>
              At InvestEsy( Real Fincorp Private Limited ) our single utmost aim is to assist clients with dedication and integrity so that we exceed their expectations and build enduring relationships.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.3, textAlign: "justify" }}>
              We are having more than six years of experience in Financial Services Sector. We offer technology based services for our clients to effectively monitor their portfolio and help them reach their financial goals. We are one solution for all insurance and investment needs. We focus at being the most reliable prompt and efficient provider of financial and insurance services.
            </p>
          </div>
          <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <img
              src="/about-us/a1.jpg"
              alt="About InvestEsy"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2: Image Left, Text Right */}
      <section className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem clamp(1rem, 4vw, 2.5rem) 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center"
          }}
          className="about-grid"
        >
          <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <img
              src="/about-us/a2.jpg"
              alt="About InvestEsy Mission"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
          <div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.3, textAlign: "justify", marginBottom: "0.75rem" }}>
              We take the opportunity to introduce ourselves as a bunch of committed professionals with a single vision and mission statement
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--foreground)", lineHeight: 1.3, textAlign: "justify", fontWeight: 600, fontStyle: "italic", marginBottom: "0.75rem" }}>
              &quot;To serve our customers with integrity and honesty, always putting Investor&apos;s interest first&quot;.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7, textAlign: "justify" }}>
              Our main aim is to provide Investment solutions keeping in mind client&apos;s short and long-term goals by using various tools of asset allocation and financial planning and we take a reasonable amount of care whilst doing this.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
