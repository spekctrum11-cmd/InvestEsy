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
        <div style={{ position: "relative", height: "220px", overflow: "hidden", marginTop: "130px" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground)"
            }}
          >
            <div className="container" style={{ maxWidth: "1200px", width: "100%", textAlign: "left" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: "rgba(15, 23, 42, 0.06)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  border: "1px solid rgba(15, 23, 42, 0.1)",
                  color: "var(--primary)"
                }}
              >
                MF Tools
              </span>
              <h1
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "var(--foreground)"
                }}
              >
                Past SIP Performance
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section
        className="container"
        style={{
          padding: "2rem clamp(1rem, 4vw, 2.5rem)",
          maxWidth: "1200px",
          margin: "0 auto 4rem auto"
        }}
      >
        <div className="mf-tools-grid">
          {/* Left Column: Sidebar Menu */}
          <div
            className="card"
            style={{
              padding: "1.25rem",
              borderRadius: "16px",
              background: "var(--surface)",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--border-light)"
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--foreground)",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid var(--border-light)"
              }}
            >
              MF Tools
            </h3>
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
          <div
            className="card"
            style={{
              padding: "0.5rem",
              borderRadius: "16px",
              background: "var(--surface)",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--border-light)",
              overflow: "hidden"
            }}
          >
            <iframe
              src="https://www.investwell.in/updation/parameter/par_sipcalculator.jsp?tbg=ffffff&hbg=eaeaea&ht=111111&bt=222222&r1=eeeeee&r2=f1f1f1&fs=11"
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="auto"
              style={{ borderRadius: "12px", display: "block" }}
              title="Past SIP Performance Calculator"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
