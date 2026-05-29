"use client";

import { useState } from "react";
import HLVCalculator from "./HLVCalculator";

const calculators = [
  { id: 1, title: "SIP Calculator", icon: "📈", src: "https://www.investwell.in/updation/parameter/Calculator/par_sipcalculatorCus.jsp?scl=ff6000&icl=1F2434&ifs=16&ofs=28&lcl=000&phcl=ffffff&pbcl=ccc&ocl=1F2434", height: 700 },
  { id: 2, title: "Become a Crorepati", icon: "💰", src: "https://www.investwell.in/updation/parameter/Calculator/par_sip_calculatorN.jsp", height: 520 },
  { id: 3, title: "Child Education", icon: "🎓", src: "https://www.investwell.in/updation/parameter/Calculator/par_education_plannerN.jsp?obgl=eeeeee&fs=14&ol=222222&obgr=dddddddd&or=111111&share=N", height: 950 },
  { id: 4, title: "Children Wedding", icon: "💍", src: "https://www.investwell.in/updation/parameter/Calculator/par_marriage_plannerN.jsp?bbg=ffffff&fs=12&fsh=14&bt=000000&ht=ffffff&lc=cccccc&ocl=009d07&share=N", height: 1000 },
  { id: 5, title: "Retirement", icon: "🌴", src: "https://www.investwell.in/updation/parameter/Calculator/par_retirement_calculatorN.jsp?obgl=eeeeee&fs=14&ol=222222&obgr=dddddddd&or=111111", height: 1200 },
  { id: 6, title: "EMI Calculator", icon: "🏠", src: "https://www.investwell.in/updation/parameter/Calculator/par_emi_calculatorN.jsp?g1=0f172a&g2=000000&sbg=000000", height: 550 },
  { id: 7, title: "Power of Compounding", icon: "⚡", src: "https://www.investwell.in/updation/parameter/Calculator/par_sip_calculatorN.jsp", height: 520 },
  { id: 8, title: "Own an Asset", icon: "🏖️", src: "https://www.investwell.in/updation/parameter/Calculator/par_vacation_calculatorN.jsp", height: 600 },
  { id: 9, title: "SIP Step-Up", icon: "🚀", src: "https://www.investwell.in/updation/parameter/Calculator/par_sip_stepup_calculatorN.jsp?share=N", height: 700 },
  { id: 10, title: "SIP Delay", icon: "⏳", src: "https://www.investwell.in/updation/parameter/Calculator/par_sipdelay_calculatorN.jsp?obgl=eeeeee&fs=14&ol=222222&obgr=dddddddd&or=111111&share=N", height: 630 },
  { id: 11, title: "HLV Calculator", icon: "🛡️", src: "https://www.investwell.in/updation/parameter/Calculator/par_human_life.jsp?hbg=FCB817&bbg=eeeeee&fs=12&fsh=14&bt=000000&ht=ffffff", height: 1000 },
];

export default function FinancialCalculators() {
  const [activeTab, setActiveTab] = useState(calculators[0]);

  return (
    <section className="container" style={{ position: "relative", marginTop: "3rem", marginBottom: "0", zIndex: 20 }}>
      {/* Neon Pink Aurora Effect */}
      <div className="aurora-wrapper">
        <div className="aurora-blob aurora-3" style={{ top: "0%", left: "-5%", bottom: "auto", right: "auto", width: "45vw", height: "45vw", maxWidth: "600px", maxHeight: "600px" }}></div>
        <div className="aurora-blob aurora-3" style={{ top: "auto", left: "auto", bottom: "-5%", right: "-5%", width: "40vw", height: "40vw", maxWidth: "550px", maxHeight: "550px", animationDelay: "-4s" }}></div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "2.5rem", position: "relative", zIndex: 10 }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", letterSpacing: "-0.02em" }} className="text-gradient">Financial Calculators</h2>
        <div className="animated-underline"></div>
        <p className="text-muted" style={{ marginTop: "1rem", fontSize: "1rem" }}>Plan your future dynamically with elite algorithmic precision.</p>
      </div>

      <div className="calculator-elite-container animate-fade-in" style={{ position: "relative", zIndex: 10 }}>

        {/* Mobile Dropdown Navigation */}
        <div className="calc-mobile-select-wrapper">
          <select
            className="calc-mobile-select"
            value={activeTab.id}
            onChange={(e) => {
              const selected = calculators.find(c => c.id === parseInt(e.target.value));
              if (selected) setActiveTab(selected);
            }}
          >
            {calculators.map((calc) => (
              <option key={calc.id} value={calc.id}>
                {calc.icon} {calc.title}
              </option>
            ))}
          </select>
        </div>

        {/* Sleek Vertical Sidebar Navigation (Desktop) */}
        <div className="calc-sidebar custom-scrollbar">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setActiveTab(calc)}
              className={`calc-sidebar-item ${activeTab.id === calc.id ? "active" : ""}`}
            >
              <span className="calc-icon">{calc.icon}</span>
              <span className="calc-title">{calc.title}</span>
            </button>
          ))}
        </div>

        {/* Clean Iframe Content Area */}
        <div className="calc-content">
          <div className="calc-content-header">
            <h3>{activeTab.icon} {activeTab.title}</h3>
          </div>
          <div className="calc-iframe-wrapper" style={{ overflow: "hidden", height: activeTab.id === 11 ? "auto" : `${activeTab.height * 0.65}px` }}>
            {activeTab.id === 11 ? (
              <HLVCalculator />
            ) : (
              <div style={{ width: "154%", transform: "scale(0.65)", transformOrigin: "top left" }}>
                <iframe
                  key={activeTab.id} /* Forces refresh on tab switch */
                  src={activeTab.src}
                  width="100%"
                  height={activeTab.height}
                  frameBorder="0"
                  scrolling="no"
                  style={{ display: "block", border: "none" }}
                ></iframe>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
