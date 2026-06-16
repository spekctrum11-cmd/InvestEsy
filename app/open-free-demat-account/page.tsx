"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function OpenFreeDematAccount() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        <div className="about-banner" style={{
          backgroundColor: "var(--surface)",
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}>
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">Services</span>
              <h1 className="about-title">
                Open Free Demat Account
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: "2rem 1rem", background: "#f8f9fa" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", boxShadow: "0 0 15px rgba(0,0,0,0.05)", background: "#fff" }}
        >
          <div style={{ flex: "1 1 350px", backgroundColor: "#93bfd1ff", display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1.5rem", justifyContent: "center" }}>
            <Image
              src="/demate_accountmobile-1.jpg"
              alt="Open Demat Account"
              width={504}
              height={428}
              style={{ width: "100%", maxWidth: "350px", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
            />
          </div>

          <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 1.5rem", background: "#005FAF", justifyContent: "center" }}>
            <h3 style={{ color: "#fff", fontSize: "2rem", fontWeight: "400", margin: 0 }}>
              Enjoy <b>Free</b> Equity Delivery Trade for <b>Lifetime Open Free* Demat Account Now!</b>
            </h3>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <Link href="#" target="_blank" style={{
                background: "#ffffff",
                color: "#005FAF",
                padding: "0.5rem 1.2rem",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                Open Account Now
              </Link>
              <Link href="https://trinkerr.invest19.com/" target="_blank" style={{
                background: "#E87B1E",
                color: "#fff",
                padding: "0.5rem 1.2rem",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                Click here for IPO
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: "700px", margin: "2.5rem auto 1rem auto" }}
        >
          <div style={{
            background: "#E87B1E",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}>
            <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "500", color: "#fff" }}>
              If you have any query, please do contact us
            </p>
            <Link href="https://investesy.in/contact-us/" style={{
              background: "#2A8B42",
              color: "#fff",
              padding: "0.5rem 1.2rem",
              borderRadius: "4px",
              display: "inline-flex",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.85rem"
            }}>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}