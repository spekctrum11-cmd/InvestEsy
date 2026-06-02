"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import DownloadsSidebar from "@/components/DownloadsSidebar";

export default function MfForms() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="about-banner">
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">Downloads</span>
              <h1 className="about-title">MF Forms</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="mf-tools-grid">
          {/* Left Column: Sidebar Menu */}
          <DownloadsSidebar />

          {/* Right Column: PrintWell Iframe */}
          <div style={{ background: "#ffffff", borderRadius: "12px", padding: "1rem", boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)" }}>
            <iframe
              src="https://formprint.printwellonline.com/formprintpage.aspx?zp0k34=305E1D18-3172-42D7-95CE-0EC14BA21637"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="auto"
              title="MF Forms"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
