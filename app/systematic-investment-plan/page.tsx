"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SystematicInvestmentPlan() {
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
                Systematic Investment Plan
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
              <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem", color: "var(--primary)", lineHeight: "1.2" }}>
                Grow Your Money with Systematic Investment Plans
              </h2>
              
              <p className="about-paragraph">
                This is a direct method for building wealth over time by regularly investing a fixed amount in mutual fund schemes at set intervals. It is similar to a recurring deposit scheme, but instead of fixed income, it involves equity, which comes with a higher level of risk and the potential for higher returns.
              </p>
              
              <p className="about-paragraph">
                <strong>What is SIP?</strong>
              </p>
              <p className="about-paragraph">
                An investor agrees to invest a fixed amount at regular intervals over a set period. This approach helps in buying more units when prices are low and fewer units when prices are high. It operates on the principle of rupee cost averaging, allowing the investor to automatically benefit from market fluctuations.
              </p>

              <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--primary)", marginTop: "2rem", fontWeight: "600" }}>Advantages of SIP:</h4>
              <p className="about-paragraph">
                The power of compounding plays a key role in wealth growth.<br />
                To benefit from this, one should start investing early and maintain regular contributions. Delaying investment can result in a larger financial burden to achieve the same financial goals. At an early stage, a smaller investment is sufficient, whereas a larger investment is required later to reach the same target amount.
              </p>

              <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--primary)", marginTop: "2rem", fontWeight: "600" }}>Rupee-Cost averaging:</h4>
              <p className="about-paragraph">
                It means averaging the cost price of your investments.<br />
                Systematic Investment Plan, or SIP, helps to average the cost by investing a fixed amount regularly every month at varying Net Asset Values (NAVs). This approach works effectively in a fluctuating market because when the market is performing poorly, the NAV is lower, allowing you to purchase more units. Conversely, when the market is performing well, the NAV is higher, resulting in fewer units purchased. Over time, this consistent investment leads to an overall averaging of the cost.
              </p>
              <p className="about-paragraph">
                <strong>Let us see how:</strong>
              </p>
              <p className="about-paragraph">
                Suppose you invest Rs 1,000 initially when the NAV is Rs 10. In this case, you will receive 100 units (calculated as 1,000 divided by 10). Next, you invest another Rs 1,000 when the NAV is Rs 12, which gives you 83.33 units (calculated as 1,000 divided by 12). Now, assume you make a third investment of Rs 1,000 when the NAV is Rs 9, which results in 111.11 units (calculated as 1,000 divided by 9).
              </p>
              <p className="about-paragraph">
                The average purchase cost per unit comes out to be Rs 10.19, calculated by dividing the total investment of Rs 3,000 by the total units acquired, which is 294.4444.
              </p>

              <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--primary)", marginTop: "2rem", fontWeight: "600" }}>Convenience:</h4>
              <p className="about-paragraph">
                Starting an SIP is quite simple. You just need to plan your savings carefully and set aside a fixed amount each month for investing in funds. You can make your investment through post-dated cheques or via ECS instructions for a particular fund house scheme. It is always advisable to start investing at an early age, even with a small amount, and gradually increase the amount over time. 
              </p>
              <p className="about-paragraph">
                If you haven&apos;t started investing yet, it&apos;s time to begin without any delay. Waiting for the perfect moment to invest may lead to missed opportunities. A Systematic Investment Plan (SIP) is an effective way to work toward your various financial goals and ensures that you achieve the desired amount for your specific needs.
              </p>
              <p className="about-paragraph">
                To benefit fully from SIP, it is essential to choose the right investment schemes and remain consistent, without making any changes or deviations.Investing in well-diversified and high-performing schemes through SIP can help you meet your long-term financial goals, such as your child&apos;s education, marriage, and retirement.
              </p>
              <p className="about-paragraph">
                For example, investing Rs.2000 every month for the next 15 years at an annual return of 15% can result in a corpus of Rs.12,32,731 by the end of the 15th year, which can be used for your child&apos;s education.
              </p>
              <p className="about-paragraph">
                Similarly, investing Rs.3768 every month for the next 20 years at an annual return of 15% can accumulate to Rs.50 lakhs by the end of the 20th year, which can serve as a solution for your retirement.<br />
                An investment of Rs.3768 every month in the next 20 years @ 15% return per annum can fetch Rs.50 lakhs at the end of 20th year. This could be the solution for your retirement.
              </p>

              <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", marginBottom: "2rem" }}>
                <Link href="https://investesy.investwell.app/app/#/kycOnBoarding/mobileSignUp" target="_blank" className="floating-contact-btn floating-contact-call" style={{ padding: "0.75rem 2rem", borderRadius: "8px" }}>
                  Start Now
                </Link>
                <Link href="https://investesy.investwell.app/app/#/login" target="_blank" className="floating-contact-btn" style={{ background: "#FF8C00", padding: "0.75rem 2rem", borderRadius: "8px" }}>
                  Client Login
                </Link>
              </div>
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
