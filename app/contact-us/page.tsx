"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        {/* Banner Header */}
        <div className="cu-banner">
          {/* Decorative background elements */}
          <div className="cu-banner-decor">
            <div className="cu-blob cu-blob-1" />
            <div className="cu-blob cu-blob-2" />
            <div className="cu-blob cu-blob-3" />
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
                ✦ Contact Us
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="cu-title"
              >
                Get in Touch with{" "}
                <span className="cu-title-accent">InvestEsy</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="cu-subtitle"
              >
                We&apos;re here to help you with your investment journey
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="cu-cards-section">
        {/* Decorative elements */}
        <div className="cu-section-decor">
          <div className="cu-ring cu-ring-1" />
          <div className="cu-ring cu-ring-2" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="cu-cards-grid">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cu-info-card cu-card-address"
            >
              <div className="cu-card-glow" />
              <div className="cu-info-icon cu-icon-address">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="cu-info-title">Address</h3>
              <p className="cu-info-desc">
                303, Time House, Wazirpur Community Centre, WIA, Delhi-110052
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="cu-info-card cu-card-phone"
            >
              <div className="cu-card-glow" />
              <div className="cu-info-icon cu-icon-phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="cu-info-title">Phone</h3>
              <p className="cu-info-desc">
                <a href="tel:+917669016565" className="cu-link">+91-7669016565</a>
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cu-info-card cu-card-email"
            >
              <div className="cu-card-glow" />
              <div className="cu-info-icon cu-icon-email">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="cu-info-title">Email Id</h3>
              <p className="cu-info-desc">
                <a href="mailto:care@investesy.in" className="cu-link">care@investesy.in</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map + Contact Form */}
      <section className="cu-main-section">
        {/* Decorative background */}
        <div className="cu-main-decor">
          <div className="cu-dot-grid" />
          <div className="cu-accent-line cu-accent-line-1" />
          <div className="cu-accent-line cu-accent-line-2" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "960px" }}>
          <div className="cu-main-grid">
            {/* Left: Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cu-map-wrapper"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6201558303906!2d77.16387067616701!3d28.70100707562744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f651e014db%3A0xe2580c07c278999b!2sTime%20House!5e0!3m2!1sen!2sin!4v1719483971461!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="InvestEsy Office Location"
              />
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ position: "relative" }}
            >
              {/* Form Decorative SVG Blob (Behind Form) */}
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
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="cu-form-title">Send us a Message</h2>
                      <p className="cu-form-desc">
                        Our team will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="cu-form-divider" />

                  <div className="cu-form-row">
                    <div className="cu-form-group">
                      <label className="cu-label" htmlFor="cu-name">Name</label>
                      <input id="cu-name" type="text" name="name" required placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="cu-input" />
                    </div>
                    <div className="cu-form-group">
                      <label className="cu-label" htmlFor="cu-email">Email</label>
                      <input id="cu-email" type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="cu-input" />
                    </div>
                  </div>

                  <div className="cu-form-row">
                    <div className="cu-form-group">
                      <label className="cu-label" htmlFor="cu-phone">Phone</label>
                      <input id="cu-phone" type="tel" name="phone" required placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="cu-input" />
                    </div>
                    <div className="cu-form-group">
                      <label className="cu-label" htmlFor="cu-subject">Subject</label>
                      <input id="cu-subject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} className="cu-input" />
                    </div>
                  </div>

                  <div className="cu-form-group cu-full">
                    <label className="cu-label" htmlFor="cu-message">Message</label>
                    <textarea id="cu-message" name="message" rows={4} required placeholder="Write your message here..." value={formData.message} onChange={handleInputChange} className="cu-input cu-textarea" />
                  </div>

                  <button type="submit" className="cu-submit-btn">
                    <span>Send Message</span>
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
                  <h3 className="cu-success-title">Message Sent!</h3>
                  <p className="cu-success-desc">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="btn btn-outline cu-reset-btn"
                  >
                    Send another message
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