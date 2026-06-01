"use client";

import React from "react";
import Link from "next/link";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

const toolsLinks = [
  { label: "Past SIP Performance", href: "/past-sip-performance", active: true },
  { label: "Latest NAV", href: "https://investesy.in/latest-nav/", active: false },
  { label: "Current NFO", href: "https://investesy.in/current-nfo/", active: false },
  { label: "Fund Factsheets", href: "https://investesy.in/fund-factsheets/", active: false },
  { label: "Scheme Performance", href: "https://investesy.in/scheme-performance/", active: false },
  { label: "Scheme Comparison", href: "https://investesy.in/scheme-comparison/", active: false }
];

export default function PastSipPerformance() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="about-banner">
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">MF Tools</span>
              <h1 className="about-title">Past SIP Performance</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="container career-section" style={{ paddingBottom: '4rem' }}>
        <div className="mf-tools-grid">
          {/* Left Column: Sidebar Menu */}
          <div className="mf-sidebar-card">
            <h3 className="mf-sidebar-title">MF Tools</h3>
            <nav className="mf-sidebar-menu">
              {toolsLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`mf-sidebar-link ${link.active ? "active" : ""}`}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column: InvestWell Iframe */}
          <div className="mf-iframe-card">
            <iframe
              src="https://www.investwell.in/updation/parameter/par_sipcalculator.jsp?tbg=ffffff&hbg=eaeaea&ht=111111&bt=222222&r1=eeeeee&r2=f1f1f1&fs=11"
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="auto"
              className="mf-iframe"
              title="Past SIP Performance Calculator"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
