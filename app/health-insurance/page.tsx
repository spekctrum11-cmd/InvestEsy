"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HealthInsurance() {
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
                Health Insurance
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: "2rem 1rem", background: "#f8f9fa" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", boxShadow: "0 0 15px rgba(0,0,0,0.05)", background: "#fff" }}
        >
          {/* Left Column - Image & CTA */}
          <div style={{ flex: "1 1 350px", backgroundColor: "#93bfd1ff", display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1.5rem", justifyContent: "center" }}>
            <Image
              src="/b7.jpg"
              alt="Health Insurance"
              width={350}
              height={220}
              style={{ width: "100%", maxWidth: "350px", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
            />

            <h2 style={{ fontSize: "1.2rem", color: "#333", textAlign: "center", fontWeight: "400", margin: "0 0 1rem 0" }}>
              " Your Health is our Priority "
            </h2>

            <Link href="https://beemaaa.com/home/health-Insurance" target="_blank" style={{
              background: "#005FAF",
              color: "#fff",
              padding: "0.5rem 1.5rem",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-block"
            }}>
              Apply Now
            </Link>
          </div>

          {/* Right Column - Text Content */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 1.5rem", background: "#005FAF", justifyContent: "center" }}>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              Medical expenses rising sharply and the growing prevalence of lifestyle-related illnesses, healthcare costs are at an all-time high. If an unexpected illness occurs, you may find yourself forced to use your savings, which you have accumulated over the years. Nothing is more important than your health, and the best way to safeguard it is by choosing the right Health Insurance Plan.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              A Health Insurance plan provides complete peace of mind, ensuring that your hard-earned money is used for what truly matters—whether it&apos;s your child’s education, a dream wedding, a family vacation, or any other goal you&apos;ve always wanted to achieve. For those who have a family, we recommend a family floater plan instead of separate individual policies, as it is highly unlikely that all family members will require hospitalization at the same time.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              Even if your employer offers group medical insurance, it is advisable to obtain your own coverage. A job change or retirement could leave you without health insurance. Additionally, it is often challenging to get new coverage once you reach the age of 45.
            </p>
          </div>
        </motion.div>

        {/* Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "700px", margin: "2.5rem auto 1rem auto" }}
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
      </section>
    </main>
  );
}
