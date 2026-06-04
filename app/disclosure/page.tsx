"use client";

import React from "react";
import { motion } from "framer-motion";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

export default function Disclosure() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner */}
        <div className="cu-banner" style={{ minHeight: "160px", marginTop: "110px" }}>
          <div className="cu-banner-decor">
            <div className="cu-blob cu-blob-1" style={{ opacity: 0.15 }} />
            <div className="cu-blob cu-blob-2" style={{ opacity: 0.15 }} />
            <div className="cu-grid-pattern" />
          </div>

          <div className="cu-banner-overlay">
            <div className="container cu-banner-content" style={{ padding: "0 1rem" }}>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="cu-title"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", margin: 0 }}
              >
                Disclosure
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="cu-main-section" style={{ padding: "1.5rem 0 5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", position: "relative", zIndex: 1, padding: "0 1.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              color: "var(--foreground)",
            }}
          >
            <div>
              <div style={{ overflowX: "hidden", marginBottom: "2rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                      <th style={{ padding: "clamp(0.5rem, 2vw, 1rem)", fontWeight: "600", color: "var(--foreground)", width: "60%" }}>Scheme Type</th>
                      <th style={{ padding: "clamp(0.5rem, 2vw, 1rem)", fontWeight: "600", color: "var(--foreground)", width: "40%" }}>Trail-1st Year onwards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Liquid/Ultra Short Term Schemes", "0.05% – 0.70%"],
                      ["Short Term Income Funds", "0.50% – 0.90%"],
                      ["Income Funds", "0.40% – 1.00%"],
                      ["Gilt Funds", "0.15% – 0.90%"],
                      ["Hybrid Debt/Monthly Income Plans", "0.90% – 1.20%"],
                      ["Arbitrage Funds", "0.35% – 0.70%"],
                      ["Fund of Funds", "0.25% – 0.50%"],
                      ["ELSS", "0.65% – 2.00%"],
                      ["Index Funds", "0.30% – 1.00%"],
                      ["Equity/ Hybrid Equity/ Balance Funds", "0.30% – 2.00%"],
                      ["Fixed Maturity Plans", "Variable"],
                    ].map((row, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "clamp(0.5rem, 2vw, 1rem)", color: "var(--text-muted)" }}>{row[0]}</td>
                        <td style={{ padding: "clamp(0.5rem, 2vw, 1rem)", color: "var(--text-muted)", fontWeight: "500" }}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
                <p style={{ marginBottom: "1rem" }}>
                  Details of Scheme level commission on Mutual funds are available with the Relationship Managers and would be produced on demand.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  This is on a best effort basis and rates are updated as and when actual rates are received from AMCs.
                </p>
                <p style={{ margin: 0 }}>
                  We are a NISM certified / AMFI registered mutual fund distributor and not an RIA. We get compensated / incentivised by AMCs. We don't charge any fees for our services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
