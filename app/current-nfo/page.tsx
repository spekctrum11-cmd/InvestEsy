"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import MFToolsSidebar from "@/components/MFToolsSidebar";
import CurrentNfoList from "@/components/CurrentNfoList";

export default function CurrentNfo() {
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
              <h1 className="about-title">Current NFO</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="mf-tools-grid">
          {/* Left Column: Sidebar Menu */}
          <MFToolsSidebar />

          {/* Right Column: Custom Current NFO List */}
          <div className="mf-custom-card" style={{ padding: "0" }}>
            <CurrentNfoList />
          </div>
        </div>
      </section>
    </main>
  );
}
