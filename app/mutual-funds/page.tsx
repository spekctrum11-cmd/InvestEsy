"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

export default function MutualFundsPage() {
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
                Mutual Funds
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
          style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div className="about-text-block" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>

            <div style={{ display: "flex", flexDirection: "row", gap: "3rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 400px" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: "var(--primary)" }}>
                  What is <span style={{ color: "#015FAF" }}>Mutual Fund?</span>
                </h2>

                <p className="about-paragraph">
                  A mutual fund serves as a financial intermediary that allows a group of investors to combine their money with a clearly defined investment goal.
                </p>
                <p className="about-paragraph">
                  The fund is managed by a fund manager, whose role is to invest the collected funds into particular securities, usually stocks or bonds.
                </p>
                <p className="about-paragraph">
                  Mutual funds are one of the best investments options available due to their cost efficiency and ease of use, as investors do not need to decide on individual stocks or bonds to purchase.
                </p>

                <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", marginBottom: "1rem" }}>
                  <Link href="https://investesy.investwell.app/app/#/kycOnBoarding/mobileSignUp" target="_blank" className="floating-contact-btn" style={{ background: "#FF8C00", padding: "0.75rem 2rem", borderRadius: "8px" }}>
                    Invest Now
                  </Link>
                </div>
              </div>

              <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <div style={{ 
                  borderRadius: "16px", 
                  overflow: "hidden", 
                  boxShadow: "var(--shadow-xl)", 
                  border: "4px solid white",
                  width: "100%",
                  maxWidth: "350px",
                  height: "280px"
                }}>
                  <Image 
                    src="/images/mutual-funds/a4-1.jpg" 
                    alt="Mutual Fund Investment" 
                    width={400} 
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* How it Works Section */}
            <div style={{
              background: "var(--surface-alt)",
              padding: "1.5rem",
              borderRadius: "12px",
              borderLeft: "4px solid #015FAF",
              marginTop: "0.5rem"
            }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--primary)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ background: "#015FAF", color: "white", padding: "0.5rem", borderRadius: "8px", display: "flex" }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                How it Works?
              </h3>
              <p className="about-paragraph" style={{ marginBottom: 0 }}>
                A mutual fund is a group of stocks, bonds, or other investment assets owned by many investors and managed by a professional company. It can be challenging for an individual to create a well-diversified investment portfolio on their own. Mutual funds allow individuals to invest in both equity and debt instruments at the same time. When an investor puts in a certain amount of money into a mutual fund, they become a unit holder of that fund. The mutual fund then uses the money from all unit holders to buy stocks, bonds, or other securities that generate income through interest or dividends. This income is shared with the unit holders. If the fund sells some of its stocks at a higher price than what it paid for them, the unit holders may receive capital gains as a result.
              </p>
            </div>

            {/* Advantages Section */}
            <div style={{ marginTop: "1rem" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--primary)" }}>
                Advantages of Mutual Fund
              </h2>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                gap: "1rem" 
              }}>
                {/* Card 1: Simplicity */}
                <div style={{ background: "#ffedd5", padding: "1rem", borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="24" height="24" fill="none" stroke="#ea580c" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#000", margin: 0 }}>Simplicity</h3>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#000", lineHeight: "1.5", margin: 0 }}>
                    Buying a mutual fund is easy! The minimum investment is also very small. As little as Rs. 500 can be invested on a monthly basis. Just contact us to know more.
                  </p>
                </div>

                {/* Card 2: Economies of Scale */}
                <div style={{ background: "#dcfce7", padding: "1rem", borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="24" height="24" fill="none" stroke="#16a34a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#000", margin: 0 }}>Economies of Scale</h3>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#000", lineHeight: "1.5", margin: 0 }}>
                    Because a mutual fund buys and sells large amounts of securities at a time, its transaction costs are lower than you as an individual would pay.
                  </p>
                </div>

                {/* Card 3: Diversification */}
                <div style={{ background: "#ede9fe", padding: "1rem", borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="24" height="24" fill="none" stroke="#7c3aed" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#000", margin: 0 }}>Diversification</h3>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#000", lineHeight: "1.5", margin: 0 }}>
                    By holding &quot;shares,&quot; also called &quot;units,&quot; in a mutual fund rather than buying individual stocks or bonds, you spread out your risk. Diversification means investing in various assets so that any loss in one investment is offset by gains in others. In short, the more stocks and bonds you own, the less impact any single one of them can have on your overall investment.
                  </p>
                </div>

                {/* Card 4: Professional Management */}
                <div style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="24" height="24" fill="none" stroke="#0284c7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#000", margin: 0 }}>Professional Management</h3>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#000", lineHeight: "1.5", margin: 0 }}>
                    The main advantage of mutual funds is that professional experts take care of your money. A lot of people prefer for mutual funds because they either lack the time or the expertise to manage their own investments. Through mutual funds, even individuals with limited resources can benefit from the guidance of a professional manager who makes investment decisions and oversees the portfolio efficiently at a reasonable cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Query Block */}
            <div style={{
              background: "#80143456",
              padding: "1.5rem 2rem",
              borderRadius: "12px",
              marginTop: "1rem",
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

          </div>
        </motion.div>
      </section>
    </main>
  );
}
