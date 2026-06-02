"use client";
import React, { useState, useMemo } from "react";

export default function PastSipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const results = useMemo(() => {
    const P = monthlyInvestment;
    const n = years * 12;
    const r = expectedReturn / 12 / 100;
    
    // SIP Formula: FV = P × ({[1 + r]^n - 1} / r) × (1 + r)
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvested = P * n;
    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      futureValue: Math.round(futureValue)
    };
  }, [monthlyInvestment, years, expectedReturn]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border-light)",
      borderRadius: "16px",
      padding: "1rem",
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)"
    }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--foreground)" }}>
        SIP Calculator
      </h2>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        
        {/* Input Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          
          <div className="sip-input-group">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
              <label style={{ fontWeight: 600, fontSize: "0.85rem" }}>Monthly Investment</label>
              <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>{formatCurrency(monthlyInvestment)}</span>
            </div>
            <input 
              type="range" 
              min="500" max="100000" step="500" 
              value={monthlyInvestment} 
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--primary)" }}
            />
          </div>

          <div className="sip-input-group">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
              <label style={{ fontWeight: 600, fontSize: "0.85rem" }}>Investment Period</label>
              <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>{years} Years</span>
            </div>
            <input 
              type="range" 
              min="1" max="40" step="1" 
              value={years} 
              onChange={(e) => setYears(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--primary)" }}
            />
          </div>

          <div className="sip-input-group">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
              <label style={{ fontWeight: 600, fontSize: "0.85rem" }}>Expected Return Rate</label>
              <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>{expectedReturn}%</span>
            </div>
            <input 
              type="range" 
              min="1" max="30" step="0.5" 
              value={expectedReturn} 
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--primary)" }}
            />
          </div>
          
        </div>

        {/* Results Card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.03) 0%, rgba(37, 99, 235, 0.05) 100%)",
          borderRadius: "16px",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem"
        }}>
          
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Value
            </span>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--primary)", marginTop: "0.25rem" }}>
              {formatCurrency(results.futureValue)}
            </div>
          </div>

          <div style={{ height: "1px", background: "var(--border-light)", margin: "0.5rem 0" }}></div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 500, fontSize: "0.85rem" }}>Total Invested</span>
            <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{formatCurrency(results.totalInvested)}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 500, fontSize: "0.85rem" }}>Estimated Returns</span>
            <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#10b981" }}>+ {formatCurrency(results.estimatedReturns)}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
