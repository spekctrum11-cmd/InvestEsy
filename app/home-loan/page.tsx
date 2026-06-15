"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomeLoan() {
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
                Home Loan
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
              src="/b8.jpg"
              alt="Home Loan"
              width={350}
              height={220}
              style={{ width: "100%", maxWidth: "350px", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
            />

            <h2 style={{ fontSize: "1.2rem", color: "#333", textAlign: "center", fontWeight: "400", margin: "0 0 1rem 0" }}>
              &quot; Home is not a place…it’s a feeling. &quot;
            </h2>

            <Link href="https://udhary.com/home-loan/" target="_blank" style={{
              background: "#005FAF",
              color: "#fff",
              padding: "0.5rem 1.5rem",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-block"
            }}>
              Buy Now
            </Link>
          </div>

          {/* Right Column - Text Content */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 1.5rem", background: "#005FAF", justifyContent: "center" }}>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
              Home is where the heart is!
            </h3>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              At Real Fincorp, we understand this better than most — the hard work and effort that go into building or buying a house, and the satisfaction that comes with owning one. This is why our housing loan schemes are designed to make it easier for you to handle the financing aspect with simplicity and clarity.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              A home loan is a type of loan used to purchase a house. It is a secured loan, which means the house itself serves as collateral or security for the loan.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              Home loans, also referred to as mortgages, use the borrower&apos;s home as the collateral. This can include a single-family home up to a four-unit property, as well as a condominium or cooperative unit. These loans are provided by banks and non-banking financial companies, and we assist you in securing them conveniently from the comfort of your home.
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
