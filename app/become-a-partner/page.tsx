"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

const slides = [
  {
    title: "Be your own Boss",
    subtitle: "Partner with Real Fincorp Private Limited",
    bg: "/Hero-Slider-Of-Become-A-Partner/bff-768x240.jpg",
  },
  {
    title: "The Scope of our Wealth Coaches",
    subtitle: "Insurance Agents > 15 Lakhs  •  Mutual Fund Agents < 1 Lakh  •  PAN Card holders in India > 29 Crore",
    bg: "/Hero-Slider-Of-Become-A-Partner/cc-768x240.jpg",
  },
  {
    title: "Huge potential of Indian Market",
    subtitle: "Mutual Fund AUM to GDP is just 12% in India against world's average of 62%",
    bg: "/Hero-Slider-Of-Become-A-Partner/b1-2-768x240.jpg",
  },
  {
    title: "Become a part of the growing Industry",
    subtitle: "AUM of the Indian MF Industry has grown almost 4 fold in the span of 10 years",
    bg: "/Hero-Slider-Of-Become-A-Partner/professional-768x240.jpg",
  }
];

const features = [
  {
    title: "Robust Technology Platform",
    desc: "Portfolio Viewer, Comprehensive report & business management dashboard",
    bg: "#f0f7ff",
    borderColor: "rgba(37, 99, 235, 0.15)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: "Android & IOS App for our clients",
    desc: "Real Fincorp easy to use Mobile App are available on both Android & IOS platforms",
    bg: "#f5f6ff",
    borderColor: "rgba(99, 102, 241, 0.15)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    )
  },
  {
    title: "Product & Skill Training",
    desc: "We provides product, skill & motivational classes to all Wealth Coaches",
    bg: "#f0fdf4",
    borderColor: "rgba(16, 185, 129, 0.15)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: "Customer Care Support",
    desc: "On-demand customer care support can be provided by the back-end team of Real Fincorp",
    bg: "#fdf2f8",
    borderColor: "rgba(236, 72, 153, 0.15)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  }
];

const testimonials = [
  {
    id: 1,
    name: "Amit Rastogi",
    designation: "Manager",
    initials: "AR",
    bg: "linear-gradient(135deg, #0f172a, #1e293b)",
    text: "We thank you for the work you have done for us over the past years. The expertise & attention with which you have handled our financial affairs could not be faulted. Your advice on financial saving has saved us significant amount of money. May you prosper along with your clients."
  },
  {
    id: 2,
    name: "Sanjay Singh",
    designation: "Manager",
    initials: "SS",
    bg: "linear-gradient(135deg, #0f172a, #1e293b)",
    text: "We thank you for the work you have done for us over the past years. The expertise & attention with which you have handled our financial affairs could not be faulted. Your advice on financial saving has saved us significant amount of money. May you prosper along with your clients."
  },
  {
    id: 3,
    name: "Rohit Gupta",
    designation: "Advisor",
    initials: "RG",
    bg: "linear-gradient(135deg, #0f172a, #1e293b)",
    text: "We thank you for the work you have done for us over the past years. The expertise & attention with which you have handled our financial affairs could not be faulted. Your advice on financial saving has saved us significant amount of money. May you prosper along with your clients."
  }
];

export default function BecomeAPartner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    arn: "",
    referredBy: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setIsSubmitted(true);
  };

  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Modern Slider Header */}
        <div style={{ position: "relative", height: "300px", overflow: "hidden", marginTop: "130px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${slides[currentSlide].bg})`,
                backgroundColor: "transparent",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--foreground)"
              }}
            >
              <div className="container" style={{ maxWidth: "800px", width: "100%", textAlign: "left" }}>
                <div style={{ maxWidth: "550px", width: "100%" }}>
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      display: "inline-block",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      background: "rgba(15, 23, 42, 0.06)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                      border: "1px solid rgba(15, 23, 42, 0.1)",
                      color: "var(--primary)"
                    }}
                  >
                    Partner Opportunity
                  </motion.span>
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontSize: "clamp(1.3rem, 2.6vw, 1.8rem)",
                      fontWeight: 800,
                      marginBottom: "0.5rem",
                      lineHeight: 1.15,
                      letterSpacing: "-0.03em",
                      color: "var(--foreground)"
                    }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      fontSize: "clamp(0.75rem, 1.5vw, 0.88rem)",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      whiteSpace: "pre-line"
                    }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 10
          }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: currentSlide === index ? "var(--primary)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Section: Info + Contact Form */}
      <section className="container" style={{
        padding: "1.5rem clamp(1rem, 4vw, 2.5rem)",
        position: "relative",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          alignItems: "start"
        }}>
          {/* Left Column: Info */}
          <div>
            <div style={{
              width: "28px",
              height: "2px",
              background: "linear-gradient(90deg, var(--primary), var(--primary-light))",
              borderRadius: "2px",
              marginBottom: "0.4rem"
            }} />
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
              Get Started
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.825rem", lineHeight: 1.4, marginBottom: "1.25rem" }}>
              Let’s get in touch to start your journey to become a FINANCIAL ADVISOR. Kindly fill the form with required details or simply call / email us.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div className="glass" style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.6rem 0.8rem", borderRadius: "10px" }}>
                <div style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "6px",
                  background: "rgba(37, 99, 235, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2563eb",
                  flexShrink: 0
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.02em" }}>Phone Support</div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--foreground)", marginTop: "0.02rem" }}>+91 7669016565</div>
                </div>
              </div>

              <div className="glass" style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.6rem 0.8rem", borderRadius: "10px" }}>
                <div style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "6px",
                  background: "rgba(16, 185, 129, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                  flexShrink: 0
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.02em" }}>Email Support</div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--foreground)", marginTop: "0.02rem" }}>care@investesy.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", boxShadow: "var(--shadow-xl)" }}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                >
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.15rem" }}>Partner Registration</h3>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)" }}>Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border)",
                          outline: "none",
                          fontSize: "0.78rem",
                          width: "100%",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)" }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border)",
                          outline: "none",
                          fontSize: "0.78rem",
                          width: "100%",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)" }}>Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border)",
                          outline: "none",
                          fontSize: "0.78rem",
                          width: "100%",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)" }}>City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        style={{
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border)",
                          outline: "none",
                          fontSize: "0.78rem",
                          width: "100%",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)" }}>ARN, if any</label>
                      <input
                        type="text"
                        name="arn"
                        placeholder="ARN (if any)"
                        value={formData.arn}
                        onChange={handleInputChange}
                        style={{
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border)",
                          outline: "none",
                          fontSize: "0.78rem",
                          width: "100%",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <label style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)" }}>Referred by</label>
                      <input
                        type="text"
                        name="referredBy"
                        placeholder="Referred by"
                        value={formData.referredBy}
                        onChange={handleInputChange}
                        style={{
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border)",
                          outline: "none",
                          fontSize: "0.78rem",
                          width: "100%",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      marginTop: "0.25rem",
                      fontSize: "0.82rem",
                      height: "auto"
                    }}
                  >
                    Submit
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem 0",
                    textAlign: "center"
                  }}
                >
                  <div style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    marginBottom: "1.5rem",
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.75rem" }}>Thank You!</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "300px" }}>
                    Your partner request has been submitted successfully. Our team will contact you shortly to complete your registration.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", city: "", arn: "", referredBy: "" });
                    }}
                    className="btn btn-outline"
                    style={{ marginTop: "1.5rem", padding: "0.5rem 1.5rem" }}
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 className="why-title text-gradient" style={{ marginBottom: "0.4rem", fontSize: "1.5rem", fontWeight: 800 }}>
              Partner with Real Fincorp Private Limited and get the Edge
            </h2>
            <div className="animated-underline" style={{ marginInline: "auto" }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.25rem"
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.25rem",
                  borderRadius: "12px",
                  height: "100%",
                  backgroundColor: feature.bg,
                  borderColor: feature.borderColor
                }}
              >
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "var(--background)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-sm)",
                  marginBottom: "1rem",
                  flexShrink: 0
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.4rem", lineHeight: 1.3 }}>
                  {feature.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.4, flexGrow: 1 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials-wrapper" style={{ padding: "3rem 1.5rem" }}>
        <div className="testimonials-inner">
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
            <h2 className="why-title text-gradient" style={{ marginBottom: "0.25rem", fontSize: "1.5rem" }}>
              Testimonials
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              style={{ width: "220px", height: "22px", display: "block", margin: "0.3rem auto 0.4rem" }}            >
              <path fill="var(--primary)" d="M929 38c-12-5-24-8-36-8l-10 8c-22-9-42-18-72-18l-28 25H217l-28-25c-31 0-51 10-72 18l-9-8c-13 0-25 3-37 8L40 50l31 13c12 5 24 7 37 7l9-8c22 9 42 18 72 18l28-25h566l28 25c31 0 51-10 72-18l10 8c12 0 24-2 36-7l31-13-31-12Z"></path>
            </svg>
            <p className="testimonials-header-desc" style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
              Our Clients Say's
            </p>
          </div>

          {/* Testimonial Active Display */}
          <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: 0 }}
                transition={{ duration: 0.4 }}
                className="t-card"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                  padding: "1.75rem",
                  borderRadius: "16px",
                  color: "#ffffff",
                  position: "relative",
                  boxShadow: "var(--shadow-xl)",
                  margin: "0.5rem"
                }}
              >
                <span className="t-quote-mark" style={{ top: "0.5rem", left: "1.25rem", opacity: 0.12, fontSize: "5rem" }}>"</span>

                <p style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                  marginBottom: "1.25rem",
                  position: "relative",
                  zIndex: 2,
                  fontWeight: 300
                }}>
                  {testimonials[currentTestimonial].text}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    flexShrink: 0
                  }}>
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700 }}>{testimonials[currentTestimonial].name}</h4>
                    <span style={{ fontSize: "0.7rem", opacity: 0.7, fontWeight: 500 }}>{testimonials[currentTestimonial].designation}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination / Controls */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "1.25rem"
            }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: "24px",
                    height: "5px",
                    borderRadius: "2px",
                    backgroundColor: currentTestimonial === index ? "var(--primary)" : "var(--border)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
