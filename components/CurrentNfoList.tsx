"use client";
import React from "react";

const mockNFOs = [
  {
    id: 1,
    name: "InvestEsy Flexi Cap Fund",
    category: "Equity - Flexi Cap",
    openDate: "10 Jun 2026",
    closeDate: "24 Jun 2026",
    minInvestment: 5000,
    status: "Upcoming",
    risk: "Very High"
  },
  {
    id: 2,
    name: "InvestEsy Short Term Debt Fund",
    category: "Debt - Short Duration",
    openDate: "01 Jun 2026",
    closeDate: "15 Jun 2026",
    minInvestment: 1000,
    status: "Live",
    risk: "Moderate"
  },
  {
    id: 3,
    name: "InvestEsy Small Cap Index Fund",
    category: "Equity - Index",
    openDate: "28 May 2026",
    closeDate: "11 Jun 2026",
    minInvestment: 500,
    status: "Closing Soon",
    risk: "Very High"
  }
];

export default function CurrentNfoList() {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const getStatusColor = (status: string) => {
    if (status === "Live") return { bg: "rgba(16, 185, 129, 0.1)", color: "#10b981" };
    if (status === "Closing Soon") return { bg: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" };
    return { bg: "rgba(59, 130, 246, 0.1)", color: "#3b82f6" };
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--foreground)" }}>Current NFOs</h2>
        <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>{mockNFOs.length} Funds Available</span>
      </div>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
        {mockNFOs.map((nfo) => {
          const statusColors = getStatusColor(nfo.status);
          return (
            <div key={nfo.id} style={{
              background: "var(--surface)",
              border: "1px solid var(--border-light)",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(0, 0, 0, 0.05)";
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <span style={{
                  padding: "0.2rem 0.5rem",
                  borderRadius: "99px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  background: statusColors.bg,
                  color: statusColors.color
                }}>
                  • {nfo.status}
                </span>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-muted)", background: "rgba(15,23,42,0.05)", padding: "0.2rem 0.4rem", borderRadius: "6px" }}>
                  {nfo.risk} Risk
                </span>
              </div>

              <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.25rem", color: "var(--foreground)" }}>
                {nfo.name}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem", fontWeight: 500 }}>
                {nfo.category}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                <div>
                  <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Open Date</span>
                  <strong style={{ fontSize: "0.85rem" }}>{nfo.openDate}</strong>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Close Date</span>
                  <strong style={{ fontSize: "0.85rem" }}>{nfo.closeDate}</strong>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Min. Investment</span>
                  <strong style={{ fontSize: "0.85rem" }}>{formatCurrency(nfo.minInvestment)}</strong>
                </div>
              </div>

              <button style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "8px",
                background: "var(--primary)",
                color: "#fff",
                border: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "opacity 0.2s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
              >
                Apply Now
              </button>

            </div>
          )
        })}
      </div>
    </div>
  );
}
