"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Landmark, Factory, Home, Landmark as GovBuilding } from "lucide-react";

export default function FixedDeposits() {
  const companyTypes = [
    { title: "Financial Institutions", icon: Building2 },
    { title: "Non-Banking Finance Companies", icon: Landmark },
    { title: "Manufacturing Companies", icon: Factory },
    { title: "Housing Finance Companies", icon: Home },
    { title: "Government Companies", icon: GovBuilding },
  ];

  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="about-banner" style={{ 
          backgroundColor: "var(--surface)", 
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)", 
          backgroundSize: "20px 20px" 
        }}>
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">Services</span>
              <h1 className="about-title">
                Fixed Deposits
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="about-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div className="about-text-block" style={{ width: "100%" }}>
            
            <p className="about-paragraph">
              Fixed Deposits are among the oldest and most widely used ways to invest. When it comes to guaranteed returns, selecting the right type of savings plan is very important. Fixed Deposits allow you to take advantage of additional benefits while building your wealth with minimal risk.
            </p>
            <p className="about-paragraph">
              Fixed Deposits offered by companies that promise a fixed rate of return for a specific period are known as Company Fixed Deposits.
            </p>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem", marginBottom: "4rem" }}>
              <Link href="https://affiliate.shriramfinance.in/affiliate/cos_schemedetails.aspx?affiliatecode=DEBMUM132&subaffiliatecode=" target="_blank" className="floating-contact-btn" style={{ background: "#FF8C00", padding: "1rem 2.5rem", borderRadius: "8px", fontSize: "1.1rem" }}>
                Click here for Shriram FD
              </Link>
            </div>

            <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", color: "var(--primary)", textAlign: "center" }}>
              Types of Companies offering Fixed Deposits
            </h2>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", 
              gap: "0.75rem", 
              marginBottom: "4rem" 
            }}>
              {companyTypes.map((type, idx) => (
                <div key={idx} style={{
                  background: "var(--surface)",
                  padding: "1rem 0.5rem",
                  borderRadius: "8px",
                  boxShadow: "var(--shadow-sm)",
                  textAlign: "center",
                  border: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem"
                }}>
                  <div style={{ color: "var(--primary)" }}>
                    <type.icon size={28} strokeWidth={1.5} />
                  </div>
                  <p style={{ margin: 0, fontWeight: "600", fontSize: "0.75rem", color: "#000", lineHeight: "1.2" }}>
                    {type.title}
                  </p>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--primary)" }}>
              Features and Benefits
            </h2>
            
            <p className="about-paragraph">
              Company Fixed Deposits usually provide better returns compared to those offered by banks.
            </p>
            <p className="about-paragraph">
              <br />You can select the tenure that best suits your needs from a variety of options.<br />You also have the choice of how often you want to receive your interest payments:
            </p>
            <p className="about-paragraph">
              &#8211; At maturity<br />
              &#8211; Annually<br />
              &#8211; Semi-annually<br />
              &#8211; Quarterly<br />
              &#8211; Monthly
            </p>
            <p className="about-paragraph">
              Company Fixed Deposits are non-transferable, meaning there&apos;s no risk of the FD receipt being stolen.<br />
              If it does fall into the wrong hands, it cannot be used for any unauthorized purpose.
            </p>
            <p className="about-paragraph">
              You can withdraw your deposit before maturity, but you may have to pay a penalty as per the rules.
            </p>
            <p className="about-paragraph">
              <br />To reduce risk, it is advisable to spread your deposits across a number of companies involved in different industries.<br />
              This helps in distributing the risk across various sectors and businesses.
            </p>
            <p className="about-paragraph">
              There are many companies in the Company Deposit market, giving you a wide range of options.<br />
              This helps you decide whether to keep your deposit as it is or switch it to another one.
            </p>
            <p className="about-paragraph">
              The interest rates offered on Company Fixed Deposits vary from time to time and are attractive compared to other investment options.
            </p>

          </div>

          <div style={{ 
            background: "#80143456", 
            padding: "2rem", 
            borderRadius: "12px", 
            marginTop: "4rem", 
            marginBottom: "4rem",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            border: "1px solid #000000"
          }}>
            <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold", color: "#000" }}>
              If you have any query, please do contact us.
            </p>
            <a href="tel:+917669016565" style={{ 
              background: "#FF8C00", 
              color: "#fff", 
              padding: "0.75rem 2rem", 
              borderRadius: "8px",
              border: "1px solid #000000",
              display: "inline-flex",
              textDecoration: "none",
              fontWeight: 500,
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ea580c"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#FF8C00"}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
