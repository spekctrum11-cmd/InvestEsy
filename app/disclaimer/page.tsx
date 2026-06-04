"use client";

import React from "react";
import { motion } from "framer-motion";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

export default function Disclaimer() {
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
                Disclaimer
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
              These are our terms and conditions for usage of the website, InvestEsy (Real Fincorp Private Limited) and the related services offered by InvestEsy (Real Fincorp Private Limited) (‘Related Services’ hereafter means Stock Market Trading / Mutual Funds / ULIPs / Investment Analysis given through E-Mail, Messenger, Mobile Phone, Mobile SMS, Telephone or in any other form, manner or media).
            </p>
            
            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              InvestEsy (Real Fincorp Private Limited) owns all its contents & related services. You agree and understand that the information and material contained in this website and the related services offered by InvestEsy (Real Fincorp Private Limited).
            </p>

            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              Research’ implies and constitutes your consent to the terms and conditions mentioned below. You also agree that InvestEsy (Real Fincorp Private Limited) can modify or alter the terms and conditions of the use of this service without any liability.
            </p>

            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              The contents of this site & related services offered by InvestEsy (Real Fincorp Private Limited) are solely the personal views of the contributors. InvestEsy (Real Fincorp Private Limited) reserve the right to make modifications and alterations to the contents of this website. Users are advised to use the data for the purpose of information only and rely on their own judgment while making investment or trading decisions. The investments or trades discussed or recommended in this website & related services offered by InvestEsy (Real Fincorp Private Limited) may not be suitable for all investors.
            </p>

            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              InvestEsy (Real Fincorp Private Limited) do not warranty the timeliness, accuracy or quality of the electronic content and take no responsibility for any loss or profit arising out of decisions being made by anyone acting on the analysis published in this website.
            </p>

            <p style={{ marginBottom: "1.25rem", textAlign: "justify" }}>
              The contents of this website & the related services offered by InvestEsy (Real Fincorp Private Limited) cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from InvestEsy (Real Fincorp Private Limited). Any person who intend to use the services rendered by InvestEsy (Real Fincorp Private Limited) should do so only after due consideration of the above as well as all other factors.
            </p>

            <p style={{ marginBottom: "0", textAlign: "justify" }}>
              <strong>InvestEsy (Real Fincorp Private Limited) is not responsible for the contents of any of the linked sites.</strong> By providing access to other website nor recommending nor endorsing the content available in the linked websites. If you do not agree to any of the terms mentioned in this agreement, you should kindly exit the site.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
