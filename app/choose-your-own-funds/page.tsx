"use client";

import React, { useState } from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const tabs = [
  { id: "retirement", label: "Retirement Funds", type: "retirement", height: 800 },
  { id: "childFuture", label: "Child Future", type: "childFuture", height: 820 },
  { id: "equity", label: "Equity Funds", type: "equity", height: 500 },
  { id: "global", label: "Global Funds", type: "global", height: 800 },
  { id: "hybrid", label: "Hybrid Funds", type: "hybrid", height: 800 },
  { id: "taxSaving", label: "Tax Saving", type: "elss", height: 800 },
  { id: "gilt", label: "Gilt Funds", type: "gilt", height: 800 },
];

export default function ChooseYourOwnFunds() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

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
                Choose your own Funds
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="about-section" style={{ padding: "clamp(2rem, 5vw, 4rem) clamp(0.5rem, 3vw, 2rem)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Mobile Dropdown Navigation (Visible on phones) */}
            <div className="calc-mobile-select-wrapper" style={{ borderRadius: "12px", marginBottom: "0.5rem" }}>
              <select
                className="calc-mobile-select"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                style={{ cursor: "pointer" }}
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Tabs Header - Responsive scrolling on mobile */}
            <div className="desktop-only-tabs" style={{ 
              display: "flex", 
              overflowX: "auto", 
              gap: "0.5rem", 
              borderBottom: "1px solid var(--border-light)",
              paddingBottom: "1rem",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                div.desktop-only-tabs::-webkit-scrollbar {
                  display: none;
                }
                .responsive-tab-height {
                  width: 100%;
                  height: var(--tab-height);
                }
                .scalable-iframe {
                  border: none;
                  width: 100%;
                  height: var(--tab-height);
                  display: block;
                }
                @media (max-width: 900px) {
                  .desktop-only-tabs {
                    display: none !important;
                  }
                  .responsive-tab-height {
                    height: var(--scaled-height);
                  }
                  .iframe-scalable-wrapper {
                    width: 154%;
                    transform: scale(0.65);
                    transform-origin: top left;
                  }
                }
              `}} />
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "0.5rem 1rem",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    background: activeTab === tab.id ? "var(--primary)" : "transparent",
                    color: activeTab === tab.id ? "#fff" : "var(--foreground)",
                    border: activeTab === tab.id ? "none" : "1px solid var(--border-light)",
                    borderRadius: "8px",
                    fontWeight: activeTab === tab.id ? "600" : "500",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ width: "100%", background: "var(--surface)", borderRadius: "12px", padding: "0.5rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", overflow: "hidden" }}>
              {tabs.map((tab) => (
                <div 
                  key={tab.id} 
                  className="responsive-tab-height"
                  style={{ 
                    display: activeTab === tab.id ? "block" : "none",
                    "--tab-height": `${tab.height}px`,
                    "--scaled-height": `${tab.height * 0.65}px`
                  } as React.CSSProperties}
                >
                  {activeTab === tab.id && (
                    <div className="iframe-scalable-wrapper">
                      <iframe
                        src={`https://www.investwell.in/updation/parameter/par_mfperform_${tab.type}.jsp?scl=ff6000&icl=1F2434&ifs=16&ofs=28&lcl=000&phcl=ffffff&pbcl=ccc&ocl=1F2434`}
                        className="scalable-iframe"
                        frameBorder="0"
                        scrolling="auto"
                        title={tab.label}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>
    </main>
  );
}
