"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

export default function PortfolioXRay() {
  const [formData, setFormData] = useState({
    password: "",
    phone: "",
    file: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner */}
        <div className="cu-banner">
          <div className="cu-banner-decor">
            <div className="cu-blob cu-blob-1" />
            <div className="cu-blob cu-blob-2" />
            <div className="cu-grid-pattern" />
          </div>

          <div className="cu-banner-overlay">
            <div className="container cu-banner-content">
              <motion.span
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="cu-badge"
              >
                ✦ Analysis
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="cu-title"
              >
                Portfolio <span className="cu-title-accent">X-Ray</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="cu-subtitle"
              >
                Get a detailed analysis of your mutual fund investments
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <section className="cu-main-section">
        <div className="cu-main-decor">
          <div className="cu-dot-grid" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1100px", padding: "0 1rem" }}>
          <div className="cu-main-grid" style={{ alignItems: "start" }}>
            
            {/* Left: Instructions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(20px)", borderRadius: "16px", padding: "clamp(1.25rem, 4vw, 2rem)", border: "1px solid rgba(15, 23, 42, 0.12)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", gap: "1rem" }}>
                  <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--foreground)", margin: 0 }}>
                    Steps to request your CAS
                  </h2>
                  <img src="/cams.jpg" alt="CAMS" style={{ height: "45px", width: "auto", objectFit: "contain", borderRadius: "6px" }} />
                </div>
                
                <ol style={{ paddingLeft: "1.2rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.8" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <b>Step 1:</b> <a href="https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement" target="_blank" rel="noopener noreferrer" style={{ color: "#F17420", fontWeight: "600", textDecoration: "none" }}>Click here</a> to request CAS.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}><b>Step 2:</b> Choose the statement type <strong>&quot;Detailed&quot;</strong></li>
                  <li style={{ marginBottom: "0.5rem" }}><b>Step 3:</b> Select <strong>&quot;Specific period&quot;</strong></li>
                  <li style={{ marginBottom: "0.5rem" }}><b>Step 4:</b> Select From Date <strong>&quot;01/04/1990&quot;</strong> and Till Date as the <strong>current date</strong></li>
                  <li style={{ marginBottom: "0.5rem" }}><b>Step 5:</b> In folio listing, choose <strong>&quot;With zero balance folios&quot;</strong></li>
                  <li style={{ marginBottom: "0.5rem" }}><b>Step 6:</b> Put your email as mentioned in the investments.</li>
                  <li style={{ marginBottom: "0.5rem" }}><b>Step 7:</b> Choose any password; this will be used to access the password-protected statement.</li>
                  <li style={{ marginBottom: "1rem" }}><b>Step 8:</b> Submit the form.</li>
                </ol>

                <div style={{ padding: "1rem", background: "linear-gradient(135deg, #dbeafe, #eff6ff)", borderRadius: "8px", borderLeft: "4px solid #2563eb", marginTop: "1rem" }}>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#1e3a8a", fontWeight: "500" }}>
                    You will get an email with your Consolidated Account Statement attached. Upload the file here along with the password.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ position: "relative" }}
            >
              <div className="cu-form-decor-blob">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M 48.30 25.45 C 48.32 30.84 44.57 35.47 41.15 38.61 C 37.73 41.75 36.65 45.84 31.40 47.05 C 26.15 48.26 20.49 44.05 17.30 42.02 C 14.11 39.99 10.70 39.53 8.56 36.22 C 6.41 32.91 4.63 31.60 3.40 26.56 C 2.16 21.52 3.48 15.97 6.06 12.39 C 8.63 8.81 8.95 5.14 15.29 4.35 C 21.64 3.57 28.25 5.10 32.94 6.34 C 37.63 7.59 42.19 6.95 45.59 11.00 C 49.00 15.05 48.28 20.06 48.30 25.45 Z" fill="#880088"></path>
                </svg>
              </div>

              <div className="cu-form-wrapper">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="cu-form">
                    <div className="cu-form-header">
                      <div className="cu-form-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="12" y1="18" x2="12" y2="12" />
                          <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="cu-form-title">Upload Statement</h2>
                        <p className="cu-form-desc">
                          Securely submit your CAS for portfolio analysis.
                        </p>
                      </div>
                    </div>

                    <div className="cu-form-divider" />

                    <div className="cu-form-group cu-full">
                      <label className="cu-label" htmlFor="pxray-file">Upload Statement (PDF/Doc/Image)</label>
                      <input 
                        id="pxray-file" 
                        type="file" 
                        name="file" 
                        required 
                        accept=".webp,.json,.doc,.docx,.pdf,.jpg,.jpeg,.jpe,.png" 
                        onChange={handleFileChange} 
                        className="cu-input" 
                        style={{ padding: "0.5rem" }}
                      />
                    </div>

                    <div className="cu-form-row">
                      <div className="cu-form-group">
                        <label className="cu-label" htmlFor="pxray-password">Password of Statement</label>
                        <input 
                          id="pxray-password" 
                          type="text" 
                          name="password" 
                          required 
                          placeholder="Password" 
                          value={formData.password} 
                          onChange={handleInputChange} 
                          className="cu-input" 
                        />
                      </div>
                      <div className="cu-form-group">
                        <label className="cu-label" htmlFor="pxray-phone">Your Mobile Number</label>
                        <input 
                          id="pxray-phone" 
                          type="tel" 
                          name="phone" 
                          required 
                          placeholder="Phone Number" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          className="cu-input" 
                        />
                      </div>
                    </div>

                    <button type="submit" className="cu-submit-btn" style={{ marginTop: "1rem" }}>
                      <span>Send for Analysis</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="cu-success"
                  >
                    <div className="cu-success-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="cu-success-title">Statement Received!</h3>
                    <p className="cu-success-desc">
                      Thank you for sharing your CAS. Our experts will analyze your portfolio and get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ password: "", phone: "", file: null });
                      }}
                      className="btn btn-outline cu-reset-btn"
                    >
                      Submit another statement
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
