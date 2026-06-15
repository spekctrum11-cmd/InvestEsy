"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NPS() {
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
                National Pension System (NPS)
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
              The New Pension Scheme (NPS) is a government of India initiative to extend pension benefits to all Indian citizens. Any individual whether employed with private sector, self employed or professional can now avail of pension benefits and plan his or her retirement by enrolling in this scheme. The NPS is by far the least complicated, simplest and the lowest cost pension scheme. As the scheme is regulated by the government of India, it is one of the most safe investment options with complete capital protection.
            </p>
            <p className="about-paragraph">
              There are no guarantees on investment as the NPS is a defined contribution plan and the benefits would depend on the amount invested and the investment growth up to the point of exit from the NPS. Being a market-linked product, it does not guarantee returns or inflation protection.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.5rem", marginBottom: "3rem" }}>
              <Link href="https://uatcra.kfintech.com/poponlinev2/registration/popsubscriberregistration/" target="_blank" className="floating-contact-btn floating-contact-call" style={{ padding: "0.75rem 2rem", borderRadius: "8px" }}>
                Open Account
              </Link>
              <Link href="https://uatcra.kfintech.com/poponlinev2/POPContributeOnline?AuthID=DB75FB78A93FCC3AE9D4F1C32228A600BEAD2023311AB8BF51D41AA46AA3A230" target="_blank" className="floating-contact-btn" style={{ background: "#FF8C00", padding: "0.75rem 2rem", borderRadius: "8px" }}>
                Subsequent Contribution
              </Link>
            </div>


            <div style={{
              marginBottom: "2rem",
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}>
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                border: "4px solid white",
                width: "100%",
                maxWidth: "800px",
                background: "var(--surface)"
              }}>
                <Image
                  src="/f4.jpg"
                  alt="NPS Details"
                  width={1200}
                  height={800}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>

            <p className="about-paragraph">
              <b>Liquidity</b>: The NPS is considered liquid and allows for early withdrawal. Currently, there is no specific guideline regarding taking a loan against the NPS, but this could change in the future.
            </p>
            <p className="about-paragraph">
              <b>Exit Option</b>: If you retire before the age of 60, you are required to use 80 per cent of your savings in your Tier-I account to purchase an annuity. The remaining 20 per cent of your savings can be withdrawn as a lump sum.
            </p>
            <p className="about-paragraph">
              <b>Tax Implications</b>: You can claim tax deductions on your investments up to Rs 1.5 lakh under Section 80C and an additional Rs 50,000 under Section 80CCD of the Income Tax Act each financial year.<br />
              However, the amount you receive from the NPS at the end will be taxable. This follows an EET (exempt on contributions, exempt on accumulation, taxed on maturity) structure, unlike EPF and PPF, which are EEE (exempt, exempt, exempt at all stages).
            </p>
            <p className="about-paragraph">
              <b>NPS for Government Employees:<br /></b>
              All government employees (both central and state) who joined after January 1, 2004, no longer have a general provident fund (GPF) account, but are required to have a mandatory NPS account.<br />
              The NPS operates on a defined contribution basis and has two parts &ndash; Tier I and Tier II. Government employees can exit the Tier I scheme after reaching the age of 60, and they must invest 40 per cent of their pension amount to purchase an annuity through a life insurance company. If a member chooses to leave the NPS before the age of 60, they will need to invest 80 per cent of their pension amount as mandatory annuity.
            </p>
            <p className="about-paragraph">
              The Tier I account is a mandatory pension account that does not allow withdrawals. The government contributes 10 per cent of the basic salary, and the same amount is contributed by the employee on a monthly basis.
            </p>
            <p className="about-paragraph">
              The Tier II account is a voluntary savings account from which individuals can withdraw money anytime. There are no contributions from the government in this account.
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
