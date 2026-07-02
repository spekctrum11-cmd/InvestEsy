"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="about-banner">
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">About Us</span>
              <h1 className="about-title">
                InvestEsy — Real Fincorp Private Limited
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Text Left, Image Right */}
      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-grid"
        >
          <div className="about-text-block">
            <p className="about-paragraph">
              In a era of constant changing and volatile financial Market, Investors need an Qualified /Trained and unbiased professional to assist them in achieving their short term and long term Investment goal.
            </p>
            <p className="about-paragraph">
              At InvestEsy( Real Fincorp Private Limited ) our single utmost aim is to assist clients with dedication and integrity so that we exceed their expectations and build enduring relationships.
            </p>
            <p className="about-paragraph about-paragraph-last">
              We are having more than six years of experience in Financial Services Sector. We offer technology based services for our clients to effectively monitor their portfolio and help them reach their financial goals. We are one solution for all insurance and investment needs. We focus at being the most reliable prompt and efficient provider of financial and insurance services.
            </p>
          </div>
          <div className="about-image-block">
            <Image
              src="/about-us/a1.jpg"
              alt="About InvestEsy"
              className="about-image"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2: Image Left, Text Right */}
      <section className="about-section about-section-last">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="about-grid about-grid-reverse"
        >
          <div className="about-image-block">
            <Image
              src="/about-us/a2.jpg"
              alt="About InvestEsy Mission"
              className="about-image"
              width={600}
              height={400}
            />
          </div>
          <div className="about-text-block">
            <p className="about-paragraph">
              We take the opportunity to introduce ourselves as a bunch of committed professionals with a single vision and mission statement
            </p>
            <p className="about-quote">
              &quot;To serve our customers with integrity and honesty, always putting Investor&apos;s interest first&quot;.
            </p>
            <p className="about-paragraph about-paragraph-last" style={{ lineHeight: 1.7 }}>
              Our main aim is to provide Investment solutions keeping in mind client&apos;s short and long-term goals by using various tools of asset allocation and financial planning and we take a reasonable amount of care whilst doing this.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
