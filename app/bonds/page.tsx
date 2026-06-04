"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Bonds() {
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
                Bonds & Government Securities
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div className="about-text-block" style={{ width: "100%" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--primary)" }}>Bonds</h2>
            <p className="about-paragraph">
              An investment option where an individual lends money to a government or corporate body, which agrees to repay the loan along with a fixed interest rate over a set period of time.
            </p>
            <p className="about-paragraph">
              The bond market has not traditionally drawn in retail investors. However, in recent years, weak performance in equity markets and low interest rates have made corporate bonds more appealing to individual investors.
            </p>

            <div style={{ background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "8px", margin: "2rem 0", borderLeft: "4px solid var(--primary)" }}>
              <p className="about-paragraph" style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "var(--success)" }}>Advantage:</strong> Advantages include the potential for higher interest rates.
              </p>
              <p className="about-paragraph" style={{ marginBottom: 0 }}>
                <strong style={{ color: "#ef4444" }}>Disadvantage:</strong> Disadvantages are the lack of collateral and the fact that the interest earned is subject to taxation. Therefore, before investing in bonds, it is important to assess the financial reliability of the issuing company and review its past performance.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", marginBottom: "4rem" }}>
              <Link href="https://investesy.investwell.app/app/#/login" target="_blank" className="floating-contact-btn floating-contact-call" style={{ padding: "0.75rem 2rem", borderRadius: "8px" }}>
                Sign Up
              </Link>
              <Link href="https://investesy.investwell.app/app/#/login" target="_blank" className="floating-contact-btn" style={{ background: "#FF8C00", padding: "0.75rem 2rem", borderRadius: "8px" }}>
                Invest Now
              </Link>
            </div>

            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--primary)" }}>Government Securities</h2>
            <p className="about-paragraph">
              Retail investors have not made significant use of this investment option compared to others. It is suitable for those seeking reasonable returns without the risk of default, as the securities offered by the Government are backed by the state.
            </p>
            <p className="about-paragraph">
              These securities can be held in demat form. However, the market is not very active, which may lead to liquidity challenges. Investors should have a clear understanding of this investment format before considering it.
            </p>
            <p className="about-paragraph about-paragraph-last">
              If you prefer the security of guaranteed returns over the pursuit of high returns, the above debt instruments are suitable for your investment needs.
            </p>

            <div style={{
              background: "#80143456",
              padding: "2rem",
              borderRadius: "12px",
              marginTop: "3rem",
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
          </div>
        </motion.div>
      </section>
    </main>
  );
}
