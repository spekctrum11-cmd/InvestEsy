"use client";

import React from "react";
import { motion } from "framer-motion";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner */}
        <div className="cu-banner" style={{ minHeight: "160px", marginTop: "110px" }}>
          <div className="cu-banner-decor">
            <div className="cu-blob cu-blob-1" style={{ opacity: 0.15 }} />
            <div className="cu-blob cu-blob-2" style={{ opacity: 0.15 }} />
            <div className="cu-grid-pattern" />
          </div>

          <div className="cu-banner-overlay">
            <div className="container cu-banner-content" style={{ padding: "0 1rem" }}>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="cu-title"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", margin: 0 }}
              >
                Privacy Policy
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="cu-main-section" style={{ padding: "1.5rem 0 5rem" }}>
        <div className="container" style={{ maxWidth: "900px", position: "relative", zIndex: 1, padding: "0 1.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              color: "var(--foreground)",
              fontSize: "0.95rem",
              lineHeight: "1.8",
            }}
          >
            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              This privacy policy sets out how InvestEsy (Real Fincorp Private Limited) uses and protects any information that you share when you use this website. InvestEsy (Real Fincorp Private Limited) is committed to ensuring that your privacy is protected at all times. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
            </p>

            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              InvestEsy (Real Fincorp Private Limited) may change this policy from time to time by updating this page. This policy is effective from January 1, 2022.
            </p>

            <p style={{ marginBottom: "2rem", textAlign: "justify" }}>
              InvestEsy (Real Fincorp Private Limited) understands that our relationship is strongly built on trust and faith. In Course of using information on this website or availing the services, InvestEsy (Real Fincorp Private Limited) may become privy to the personal information of its customer including information that is of confidential nature. InvestEsy (Real Fincorp Private Limited) is strictly committed to protecting the privacy of its Customer and has taken reasonable measures to protect the confidentiality of the customer information and its transmission through World Wide Web. However it shall not be liable in any manner for disclosure of the confidential information in accordance with this Privacy Commitment or in terms of the agreement if any with the Customer or by reasons beyond its control. We may however be required to disclose your personal information to Government, Judicial bodies, and our Regulators or to any person to whom the Firm is under an obligation to make disclosure under the requirements of any law binding on the Firm or any of its branches, if required. Hyperlink Policy for user Any hyperlink to other Internet sites is at customer’s own risk. The contents of which and the accuracy of opinions expressed are not verified, monitored or endorsed by Invest Esy (Real Fincorp Private Limited), in any way or manner. Invest Esy (Real Fincorp Private Limited) is not responsible for the setup of any hyperlink from a third party website to Invest Esy (Real Fincorp Private Limited).
            </p>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary)" }}>What we collect</h3>
            <p style={{ marginBottom: "0.5rem" }}>We may collect the following information:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc" }}>
              <li style={{ marginBottom: "0.5rem" }}>Name and contact details</li>
              <li style={{ marginBottom: "0.5rem" }}>Personal information, including date of birth, Aadhaar Number, and Permanent Account Number (PAN)</li>
              <li style={{ marginBottom: "0.5rem" }}>Demographic information such as gender and income</li>
              <li style={{ marginBottom: "0.5rem" }}>Other information that can help us improve our services</li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary)" }}>What we do with the information we gather</h3>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc", textAlign: "justify" }}>
              <li style={{ marginBottom: "0.5rem" }}>To conduct Know-Your-Customer registration as required by SEBI and/or other regulatory bodies</li>
              <li style={{ marginBottom: "0.5rem" }}>To perform compliance checks and keep/maintain internal records</li>
              <li style={{ marginBottom: "0.5rem" }}>To use the information to improve our products and services</li>
              <li style={{ marginBottom: "0.5rem" }}>To periodically send emails to your registered email address about your investments, or other information which we think you may find interesting.</li>
              <li style={{ marginBottom: "0.5rem" }}>You will be free to unsubscribe from our mailing list at any time if you do not wish to receive such emails from us. From time-to-time, we may also use your information to contact you via phone or email for market research purposes.</li>
              <li style={{ marginBottom: "0.5rem" }}>We will not sell, distribute or lease your personal information to third parties unless we are required to share such information under the terms and conditions of the products and services you avail, or we are required to do so by law.</li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary)" }}>Security</h3>
            <p style={{ marginBottom: "2rem", textAlign: "justify" }}>
              We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            </p>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary)" }}>Links to other websites</h3>
            <p style={{ marginBottom: "2rem", textAlign: "justify" }}>
              Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over such third-party websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites. You should exercise caution and look at the privacy statement applicable to the website in question.
            </p>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary)" }}>Controlling your personal information</h3>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem" }}>Security certificates</h4>
            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              InvestEsy (Real Fincorp Private Limited) is an online financial services company. We fully recognise and understand the security implications of being a service provider with whom people trust their money. There are many safeguards we adopt in this regard – some of these are technical, and some are structural.
            </p>

            <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem" }}>When it comes to data security, our goal is to ensure that:</h4>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc", textAlign: "justify" }}>
              <li style={{ marginBottom: "0.5rem" }}>Your data is stored safely and securely – passwords are one-way encrypted before being stored in the database for high security.</li>
              <li style={{ marginBottom: "0.5rem" }}>All data transmission over the internet is encrypted using industry-standard SSL/TLS protocols to ensure confidentiality.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
