"use client";

import { motion } from "framer-motion";

export default function InvestCTASection() {
  return (
    <section className="container" style={{ marginTop: "8rem", marginBottom: "4rem" }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "1.25rem",
          maxWidth: "700px",
          position: "relative"
        }}
      >
        {/* Modern subtle accent line */}
        <div style={{ 
          width: "48px", 
          height: "4px", 
          background: "linear-gradient(90deg, #2563eb, #3b82f6)", 
          borderRadius: "4px", 
          marginBottom: "0.5rem" 
        }} />
        
        <h2 style={{ 
          color: "#0f172a", 
          fontSize: "1.75rem", 
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          fontWeight: 700,
          margin: 0
        }}>
          Would you like to start investing with us?
        </h2>
        
        <p style={{ 
          color: "#64748b", 
          fontSize: "1.15rem", 
          lineHeight: 1.7,
          fontWeight: 400,
          margin: 0
        }}>
          With so many different options, investing with us is simpler and more straightforward than ever before.
        </p>
      </motion.div>
    </section>
  );
}
