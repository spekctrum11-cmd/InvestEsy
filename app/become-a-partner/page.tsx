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
    <main className="bp-main-wrapper">
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Modern Slider Header */}
        <div className="partner-slider-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="partner-slider-slide"
              style={{
                backgroundImage: `url(${slides[currentSlide].bg})`,
              }}
            >
              <div className="partner-slider-content-wrapper container">
                <div className="bp-hero-text-block">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bp-hero-badge"
                  >
                    Partner Opportunity
                  </motion.span>
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bp-hero-title"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bp-hero-subtitle"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div className="bp-slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="bp-slider-dot"
                style={{
                  backgroundColor: currentSlide === index ? "var(--primary)" : "var(--border)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Section: Info + Contact Form */}
      <section className="container bp-main-section">
        <div className="bp-grid-layout">
          {/* Left Column: Info */}
          <div>
            <div className="bp-section-line" />
            <h2 className="bp-section-title">
              Get Started
            </h2>
            <p className="bp-section-desc">
              Let’s get in touch to start your journey to become a FINANCIAL ADVISOR. Kindly fill the form with required details or simply call / email us.
            </p>

            <div className="bp-contact-list">
              <div className="glass bp-contact-card">
                <div className="bp-contact-icon phone">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <div className="bp-contact-label">Phone Support</div>
                  <div className="bp-contact-value">+91 7669016565</div>
                </div>
              </div>

              <div className="glass bp-contact-card">
                <div className="bp-contact-icon email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <div className="bp-contact-label">Email Support</div>
                  <div className="bp-contact-value">care@investesy.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass bp-form-card">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bp-form-layout"
                >
                  <h3 className="bp-form-title">Partner Registration</h3>

                  <div className="bp-form-row">
                    <div className="bp-form-group">
                      <label className="bp-form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bp-input"
                      />
                    </div>

                    <div className="bp-form-group">
                      <label className="bp-form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bp-input"
                      />
                    </div>
                  </div>

                  <div className="bp-form-row">
                    <div className="bp-form-group">
                      <label className="bp-form-label">Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bp-input"
                      />
                    </div>

                    <div className="bp-form-group">
                      <label className="bp-form-label">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="bp-input"
                      />
                    </div>
                  </div>

                  <div className="bp-form-row">
                    <div className="bp-form-group">
                      <label className="bp-form-label">ARN, if any</label>
                      <input
                        type="text"
                        name="arn"
                        placeholder="ARN (if any)"
                        value={formData.arn}
                        onChange={handleInputChange}
                        className="bp-input"
                      />
                    </div>

                    <div className="bp-form-group">
                      <label className="bp-form-label">Referred by</label>
                      <input
                        type="text"
                        name="referredBy"
                        placeholder="Referred by"
                        value={formData.referredBy}
                        onChange={handleInputChange}
                        className="bp-input"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary bp-submit-btn"
                  >
                    Submit
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bp-success-card"
                >
                  <div className="bp-success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="bp-success-title">Thank You!</h3>
                  <p className="bp-success-desc">
                    Your partner request has been submitted successfully. Our team will contact you shortly to complete your registration.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", city: "", arn: "", referredBy: "" });
                    }}
                    className="btn btn-outline bp-success-btn"
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
      <section className="bp-features-section">
        <div className="container bp-features-container">
          <div className="bp-features-header">
            <h2 className="why-title text-gradient bp-features-title">
              Partner with Real Fincorp Private Limited and get the Edge
            </h2>
            <div className="animated-underline" style={{ marginInline: "auto" }} />
          </div>

          <div className="bp-features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card bp-feature-card"
                style={{
                  backgroundColor: feature.bg,
                  borderColor: feature.borderColor
                }}
              >
                <div className="bp-feature-icon">
                  {feature.icon}
                </div>
                <h3 className="bp-feature-title">
                  {feature.title}
                </h3>
                <p className="bp-feature-desc">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials-wrapper bp-testi-wrapper">
        <div className="testimonials-inner">
          <div className="bp-testi-header">
            <h2 className="why-title text-gradient bp-testi-title">
              Testimonials
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              className="bp-testi-svg"
            >
              <path fill="var(--primary)" d="M929 38c-12-5-24-8-36-8l-10 8c-22-9-42-18-72-18l-28 25H217l-28-25c-31 0-51 10-72 18l-9-8c-13 0-25 3-37 8L40 50l31 13c12 5 24 7 37 7l9-8c22 9 42 18 72 18l28-25h566l28 25c31 0 51-10 72-18l10 8c12 0 24-2 36-7l31-13-31-12Z"></path>
            </svg>
            <p className="testimonials-header-desc bp-testi-desc">
              Our Clients Say's
            </p>
          </div>

          {/* Testimonial Active Display */}
          <div className="bp-testi-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: 0 }}
                transition={{ duration: 0.4 }}
                className="t-card bp-testi-card"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -50) {
                    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                  } else if (offset.x > 50) {
                    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
                  }
                }}
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                style={{ cursor: "pointer", touchAction: "pan-y" }}
              >
                <span className="t-quote-mark bp-testi-quote">"</span>

                <p className="bp-testi-text">
                  {testimonials[currentTestimonial].text}
                </p>

                <div className="bp-testi-author">
                  <div className="bp-testi-avatar">
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div>
                    <h4 className="bp-testi-name">{testimonials[currentTestimonial].name}</h4>
                    <span className="bp-testi-role">{testimonials[currentTestimonial].designation}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination / Controls */}
            <div className="bp-testi-pagination">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className="bp-testi-dot"
                  style={{
                    backgroundColor: currentTestimonial === index ? "var(--primary)" : "var(--border)",
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
