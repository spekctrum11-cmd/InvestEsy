"use client";

import React from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const jobs = [
  {
    title: "Telecaller",
    responsibilities: [
      "Making calls to potential customers",
      "Explaining company services and products",
      "Maintaining daily call records",
      "Submitting daily progress reports"
    ],
    eligibility: [
      "12th grade or higher education",
      "Fluent communication skills in the local language",
      "Basic computer skills"
    ],
    applyLink: "https://wa.link/j592fc"
  },
  {
    title: "Operations Executive",
    responsibilities: [
      "Manage daily operational activities efficiently.",
      "Handle client queries and ensure smooth communication.",
      "Coordinate with internal teams to ensure timely execution of tasks.",
      "Maintain records, documentation, and reports.",
      "Assist in process improvement and workflow optimization.",
      "Provide administrative and backend support as needed.",
      "Experience in client handling and coordination."
    ],
    eligibility: [
      "Good knowledge of MS Office (Excel, Word, Outlook)."
    ],
    applyLink: "https://wa.link/pqlmwa"
  },
  {
    title: "Field Sales Executive",
    responsibilities: [
      "Building Relationships",
      "Achieving Sales Targets",
      "Customer Service",
      "Product Knowledge"
    ],
    eligibility: [
      "Educational Qualification – Graduation in any stream",
      "Minimum 1 year of experience (Insurance / financial/ retail Industry)",
      "Basic Computer Knowledge",
      "Marketing Skills",
      "Open to travelling Pan India",
      "Industry: Insurance and Mutual Funds",
      "Functional Area: Financial, Banking, Investments, Insurance",
      "Role Category: Life Insurance/Financial Services"
    ],
    applyLink: "https://wa.link/p21urm"
  }
];

export default function Career() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

      </div>

      {/* Current Opportunities */}
      <section className="career-section">
        <div className="career-header">
          <h2>Current Opportunities</h2>
          <p>Join our team and help us make investing simpler.</p>
        </div>

        <div className="career-grid">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              className="career-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="career-card-title">{job.title}</h3>

              <div className="career-card-content">
                <div className="career-list-section">
                  <h4>Job Description:</h4>
                  <ul>
                    {job.responsibilities.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="career-list-section">
                  <h4>Eligibility Criteria:</h4>
                  <ul>
                    {job.eligibility.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="career-card-footer">
                <Link href={job.applyLink} target="_blank" className="btn btn-primary career-apply-btn">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
