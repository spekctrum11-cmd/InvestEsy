"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import MFToolsSidebar from "@/components/MFToolsSidebar";

export default function SchemeComparison() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="about-banner">
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">MF Tools</span>
              <h1 className="about-title">Scheme Comparison</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="mf-tools-grid">
          {/* Left Column: Sidebar Menu */}
          <MFToolsSidebar />

          {/* Right Column: InvestWell Iframe */}
          <div className="mf-iframe-card" style={{ '--iframe-height-desktop': '350px', '--iframe-height-mobile': '400px' } as any}>
            <iframe
              src="https://investwell.in/updation/parameter/par_fund_compare_big.jsp?hbg=cccccc&ht=111111&bt=222222&ff=verdana&fs=12"
              width="100%"
              frameBorder="0"
              scrolling="auto"
              className="mf-iframe"
              title="Scheme Comparison"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
