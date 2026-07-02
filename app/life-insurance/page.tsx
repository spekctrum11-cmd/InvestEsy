"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Asterisk } from "lucide-react";

export default function LifeInsurance() {
  const importantPoints = [
    "Keep the highest possible term",
    "Maximise maturity age",
    "Choose the plan that has the lowest premium at your parameters",
    "Undergo medical tests, if required",
    "Keep the nominees informed",
    "Pay premiums every year"
  ];

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
              <span className="about-badge">Services</span>
              <h1 className="about-title">
                Term Life Insurance
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ 
        backgroundImage: "url(/b5.jpg)", 
        backgroundSize: "cover", 
        backgroundPosition: "center center", 
        backgroundRepeat: "no-repeat",
        padding: "6rem 2rem 4rem 2rem",
        width: "100%"
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap" }}
        >
          {/* Left Column for Text */}
          <div style={{ flex: "1 1 500px", paddingRight: "2rem" }}>
            <p className="about-paragraph" style={{ color: "#333", fontSize: "0.95rem" }}>
              Insurance is often misunderstood and is frequently purchased and sold for incorrect reasons. At the same time, it plays a crucial role in our lives, and it&apos;s important to understand certain key points to make the right choices this year. Many people view insurance as just another way to save money on taxes.
            </p>
            <p className="about-paragraph" style={{ color: "#333", fontSize: "0.95rem" }}>
              Our daily lives are filled with unpredictable risks, such as the loss of life, income, critical illness, or disability. Insurance planning involves identifying suitable coverage for these &quot;insurable risks&quot; and making the most of the premium you pay. Tax benefits are just one part of the overall picture. Life Insurance is a contract that allows you to protect yourself from specific losses by paying a premium over a period of time.
            </p>
            <p className="about-paragraph" style={{ color: "#333", fontSize: "0.95rem" }}>
              As each of us faces various risks throughout our lives&mdash;including health issues, financial setbacks, accidents, and even death&mdash;our natural instinct is to safeguard against these challenges. While an insurance policy cannot prevent the emotional pain that comes with these events, it can help reduce the financial burden that often follows.
            </p>
            <p className="about-paragraph" style={{ color: "#333", fontSize: "0.95rem" }}>
              In short, life brings many unexpected events, both good and bad. By taking out a Life Insurance Plan, you can be better prepared to handle these uncertainties in several ways.
            </p>

            <div style={{ marginTop: "3rem" }}>
              <Link href="https://beemaaa.com/home/term-life" target="_blank" style={{ 
                background: "#E87B1E", 
                color: "#fff",
                padding: "0.8rem 2.5rem", 
                borderRadius: "4px", 
                fontSize: "1.2rem", 
                fontWeight: "600",
                textDecoration: "none",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                display: "inline-block"
              }}>
                Buy Now
              </Link>
            </div>
          </div>
          
          {/* Right Column Empty for Background Image visibility */}
          <div style={{ flex: "1 1 500px", minHeight: "300px" }}></div>
        </motion.div>
      </section>

      {/* Important Section Full Width */}
      <section style={{ 
        backgroundImage: "url(/b6.jpg)", 
        backgroundSize: "cover", 
        backgroundPosition: "center center", 
        backgroundRepeat: "no-repeat",
        padding: "6rem 2rem 6rem 2rem",
        width: "100%"
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap" }}
        >
          {/* Left Column for Important Text */}
          <div style={{ flex: "1 1 500px", paddingRight: "2rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem", color: "#FFFFFF", fontWeight: "600" }}>
              Important:
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {importantPoints.map((point, idx) => (
                <div key={idx} style={{
                  background: "#FFFFFF",
                  padding: "0.8rem 1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  width: "100%"
                }}>
                  <div style={{ 
                    color: "#000", 
                    flexShrink: 0, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    border: "2px solid #000",
                    padding: "4px"
                  }}>
                    <Asterisk size={18} strokeWidth={3} />
                  </div>
                  <h4 style={{ margin: 0, fontWeight: "600", fontSize: "1rem", color: "#000" }}>
                    {point}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Empty for Background Image visibility */}
          <div style={{ flex: "1 1 500px", minHeight: "300px" }}></div>
        </motion.div>
      </section>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div style={{ 
            background: "#80143456", 
            padding: "2rem", 
            borderRadius: "12px", 
            marginTop: "4rem", 
            marginBottom: "4rem",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            border: "1px solid #000000"
          }}>
            <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold", color: "#000" }}>
              If you have any query, please do contact us.
            </p>
            <a href="tel:+917669016565" style={{ 
              background: "#FF8C00", 
              color: "#fff", 
              padding: "0.75rem 2rem", 
              borderRadius: "8px",
              border: "1px solid #000000",
              display: "inline-flex",
              textDecoration: "none",
              fontWeight: 500,
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ea580c"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#FF8C00"}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
    </main>
  );
}
