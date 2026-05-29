"use client";
import { useState, useMemo } from "react";

const CurrencyInput = ({ label, value, onChange, prefix = "₹" }: any) => (
  <div className="hlv-input-wrapper">
    <label>{label}</label>
    <div className="hlv-input-inner">
      <span className="hlv-prefix">{prefix}</span>
      <input type="number" placeholder="0" value={value || ""} onChange={(e) => onChange(e.target.value)} />
    </div>
  </div>
);

export default function HLVCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [personal, setPersonal] = useState({ age: 30, retirementAge: 60 });
  const [assets, setAssets] = useState({ bank: 0, pf: 0, shares: 0, mutualFunds: 0 });
  const [liabilities, setLiabilities] = useState({ home: 0, personal: 0, auto: 0, education: 0 });
  const [inflows, setInflows] = useState({ income: 0, house: 0, other: 0 });
  const [assumptions, setAssumptions] = useState({ increase: 5, roi: 10, existingCover: 0 });

  const results = useMemo(() => {
    const totalAssets = assets.bank + assets.pf + assets.shares + assets.mutualFunds;
    const totalLiabilities = liabilities.home + liabilities.personal + liabilities.auto + liabilities.education;
    const totalInflows = inflows.income + inflows.house + inflows.other;
    
    let years = personal.retirementAge - personal.age;
    if (years < 0) years = 0;

    let capitalToProtect = 0;
    if (years > 0 && totalInflows > 0) {
      const i = assumptions.increase / 100;
      const r = assumptions.roi / 100;
      const netRate = (r - i) / (1 + i);
      
      if (netRate === 0) {
        capitalToProtect = totalInflows * years;
      } else {
        capitalToProtect = totalInflows * ((1 - Math.pow(1 + netRate, -years)) / netRate);
      }
    }

    const additionalCover = Math.max(0, capitalToProtect + totalLiabilities - totalAssets - assumptions.existingCover);

    return {
      totalInflows,
      totalAssets,
      totalLiabilities,
      capitalToProtect: Math.round(capitalToProtect),
      additionalCover: Math.round(additionalCover)
    };
  }, [personal, assets, liabilities, inflows, assumptions]);

  const handleNumber = (setter: any, field: string, val: string) => {
    setter((prev: any) => ({ ...prev, [field]: Number(val) || 0 }));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="hlv-container">
      
      {!isCalculated ? (
        <div className="hlv-form-panel">
          <div className="hlv-group">
            <h4 className="hlv-group-title"><span style={{ fontSize: "1.05rem" }}>👤</span> Personal Details</h4>
            <div className="hlv-row-2">
              <CurrencyInput prefix="" label="Current Age" value={personal.age} onChange={(v: string) => handleNumber(setPersonal, 'age', v)} />
              <CurrencyInput prefix="" label="Retirement Age" value={personal.retirementAge} onChange={(v: string) => handleNumber(setPersonal, 'retirementAge', v)} />
            </div>
          </div>

          <hr className="hlv-divider" />

          <div className="hlv-group">
            <h4 className="hlv-group-title"><span style={{ fontSize: "1.05rem" }}>💸</span> Annual Cash Inflows</h4>
            <div className="hlv-row-3">
              <CurrencyInput label="Net Income (Self)" value={inflows.income} onChange={(v: string) => handleNumber(setInflows, 'income', v)} />
              <CurrencyInput label="House Property" value={inflows.house} onChange={(v: string) => handleNumber(setInflows, 'house', v)} />
              <CurrencyInput label="Other (Bonus)" value={inflows.other} onChange={(v: string) => handleNumber(setInflows, 'other', v)} />
            </div>
          </div>

          <hr className="hlv-divider" />

          <div className="hlv-group">
            <h4 className="hlv-group-title"><span style={{ fontSize: "1.05rem" }}>🏦</span> Financial Snapshot</h4>
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: "0.5rem" }}>Existing Assets</label>
            <div className="hlv-row-4">
              <CurrencyInput label="Bank Deposits" value={assets.bank} onChange={(v: string) => handleNumber(setAssets, 'bank', v)} />
              <CurrencyInput label="PF / PPF" value={assets.pf} onChange={(v: string) => handleNumber(setAssets, 'pf', v)} />
              <CurrencyInput label="Shares/Equity" value={assets.shares} onChange={(v: string) => handleNumber(setAssets, 'shares', v)} />
              <CurrencyInput label="Mutual Funds" value={assets.mutualFunds} onChange={(v: string) => handleNumber(setAssets, 'mutualFunds', v)} />
            </div>
            
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--destructive, #ef4444)", display: "block", marginBottom: "0.5rem", marginTop: "1rem" }}>Existing Liabilities</label>
            <div className="hlv-row-4">
              <CurrencyInput label="Home Loan" value={liabilities.home} onChange={(v: string) => handleNumber(setLiabilities, 'home', v)} />
              <CurrencyInput label="Personal Loan" value={liabilities.personal} onChange={(v: string) => handleNumber(setLiabilities, 'personal', v)} />
              <CurrencyInput label="Auto Loan" value={liabilities.auto} onChange={(v: string) => handleNumber(setLiabilities, 'auto', v)} />
              <CurrencyInput label="Education Loan" value={liabilities.education} onChange={(v: string) => handleNumber(setLiabilities, 'education', v)} />
            </div>
          </div>

          <hr className="hlv-divider" />

          <div className="hlv-group">
            <h4 className="hlv-group-title"><span style={{ fontSize: "1.05rem" }}>📈</span> Goals & Assumptions</h4>
            <div className="hlv-row-3">
              <CurrencyInput prefix="%" label="Income Increase Rate" value={assumptions.increase} onChange={(v: string) => handleNumber(setAssumptions, 'increase', v)} />
              <CurrencyInput prefix="%" label="Return on Investments" value={assumptions.roi} onChange={(v: string) => handleNumber(setAssumptions, 'roi', v)} />
              <CurrencyInput label="Existing Life Cover" value={assumptions.existingCover} onChange={(v: string) => handleNumber(setAssumptions, 'existingCover', v)} />
            </div>
          </div>

          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <button className="hlv-action-btn" onClick={() => setIsCalculated(true)}>
              Calculate My HLV
            </button>
          </div>
        </div>
      ) : (
        <div className="hlv-results-page">
          <div className="hlv-results-header">
            <h3>Your Human Life Value Report</h3>
            <p>Based on a retirement age of {personal.retirementAge} and annual inflows of {formatCurrency(results.totalInflows)}</p>
          </div>
          
          <div className="hlv-results-grid">
            <div className="hlv-res-card">
              <div className="hlv-res-icon">🛡️</div>
              <span className="hlv-res-label">Capital to Protect</span>
              <strong className="hlv-res-val">{formatCurrency(results.capitalToProtect)}</strong>
            </div>
            <div className="hlv-res-card">
              <div className="hlv-res-icon">📉</div>
              <span className="hlv-res-label">Total Liabilities</span>
              <strong className="hlv-res-val">+ {formatCurrency(results.totalLiabilities)}</strong>
            </div>
            <div className="hlv-res-card">
              <div className="hlv-res-icon">💰</div>
              <span className="hlv-res-label">Assets & Existing Cover</span>
              <strong className="hlv-res-val">- {formatCurrency(results.totalAssets + assumptions.existingCover)}</strong>
            </div>
          </div>

          <div className="hlv-final-card">
            <span className="hlv-final-label">Additional Life Cover Required</span>
            <strong className="hlv-final-val">{formatCurrency(results.additionalCover)}</strong>
          </div>

          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <button className="hlv-action-btn hlv-outline-btn" onClick={() => setIsCalculated(false)}>
              ← Back to Edit Details
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}
