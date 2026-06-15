"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PmsAif() {
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
                PMS / AIF
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: "3rem 1rem", background: "#f8f9fa", display: "flex", flexDirection: "column", gap: "3rem" }}>
        
        {/* Card 1: Portfolio Management Services (PMS) */}
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
              src="/b9-1.jpg"
              alt="Portfolio Management Services"
              width={350}
              height={350}
              style={{ width: "100%", maxWidth: "280px", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
            />

            <h2 style={{ fontSize: "1.1rem", color: "#333", textAlign: "center", fontWeight: "400", margin: "0 0 1.5rem 0", lineHeight: "1.4" }}>
              &quot; Empowering wealth creation with insight and integrity. &quot;
            </h2>

            <Link href="https://investesy.investwell.app/app/#/login" target="_blank" style={{
              background: "#005FAF",
              color: "#fff",
              padding: "0.5rem 1.5rem",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-block"
            }}>
              Invest Now
            </Link>
          </div>

          {/* Right Column - Text Content */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 1.5rem", background: "#005FAF", justifyContent: "center" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "600", margin: 0, borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}>
              Portfolio Management Services (PMS)
            </h3>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              Portfolio Management Services (PMS) is a tailored and professionally managed investment option that employs various investment strategies to capitalize on market opportunities.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              PMS is particularly suited for high-net worth individuals (HNIs) who are open to taking on risk and want to gain exposure to the market by investing directly in a range of securities like equities, fixed income, structured products, and more.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              A good portfolio is not overly diversified but still provides the best possible returns relative to the risk taken. We identify such portfolios through an unbiased selection process based on our own proprietary analytical tools. It is also easier to promote and sell these products, which is a common practice among wealth managers.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              We are transforming the wealth management sector by focusing on fundamental principles and thorough analysis. We emphasize insight and integrity, and our goal is to ensure long-term financial success for our clients.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              InvestEsy is partnered with a variety of respected third-party PMS providers in India, including Asset Management Companies (AMCs) and financial institutions, offering specialized PMS solutions.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Alternate Investment Funds (AIF) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", boxShadow: "0 0 15px rgba(0,0,0,0.05)", background: "#fff" }}
        >
          {/* Left Column - Text Content */}
          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 1.5rem", background: "#005FAF", justifyContent: "center" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "600", margin: 0, borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}>
              Alternate Investment Funds (AIF&apos;s)
            </h3>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              Alternate Investment Funds (AIFs) typically include assets such as real estate, private equity, hedge funds, venture capital funds, and investments in stocks and bonds. These funds use strategies that go beyond conventional investing methods, such as long/short or arbitrage strategies. Since alternative investments often behave differently from traditional stock and bond investments, including them in a portfolio can offer greater diversification, lower risk, and potentially higher returns.
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              AIFs combine the ease of operation of a mutual fund with the flexibility of a Portfolio Management Service (PMS).
            </p>
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: "1.5", margin: 0 }}>
              This combination makes them well-suited for achieving the best possible performance in line with a specific investment goal. To improve risk-adjusted returns, these funds may employ sophisticated strategies such as investing in unlisted equities or using a long-short hedging approach.
            </p>
          </div>

          {/* Right Column - Image & CTA */}
          <div style={{ flex: "1 1 350px", backgroundColor: "#93bfd1ff", display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1.5rem", justifyContent: "center" }}>
            <Image
              src="/sw.jpg"
              alt="Alternate Investment Funds"
              width={350}
              height={200}
              style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
            />

            <h2 style={{ fontSize: "1.1rem", color: "#333", textAlign: "center", fontWeight: "400", margin: "0 0 1.5rem 0", lineHeight: "1.4" }}>
              &quot; Greater diversification and lower overall portfolio risk. &quot;
            </h2>

            <Link href="tel:+917669016565" style={{
              background: "#005FAF",
              color: "#fff",
              padding: "0.5rem 1.5rem",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-block"
            }}>
              Consult Expert
            </Link>
          </div>
        </motion.div>

        {/* Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "700px", margin: "1rem auto" }}
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
