"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import MFToolsSidebar from "@/components/MFToolsSidebar";

export default function FundFactsheets() {
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
              <h1 className="about-title">Fund Factsheets</h1>
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
          <div className="mf-iframe-card" style={{ "--iframe-height-desktop": "300px", "--iframe-height-mobile": "350px" } as React.CSSProperties & { "--iframe-height-desktop": string; "--iframe-height-mobile": string }}>
            <iframe
              src="https://www.investwell.in/updation/parameter/par_factsheet.jsp?&ht=ffffff&hbg=015FAF&bt=000000&r1=dddddd&r2=f2f2f2"
              width="100%"
              frameBorder="0"
              scrolling="auto"
              className="mf-iframe"
              title="Fund Factsheets"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
