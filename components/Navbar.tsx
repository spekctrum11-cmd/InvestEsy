"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar container flex justify-between items-center ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo" style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--foreground)" }}>
        <span style={{ color: "var(--primary)", marginRight: "4px" }}>⬡</span> InvestEsy
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="nav-item">
          <Link href="#">Services ▾</Link>
          <div className="dropdown">
            <Link href="#">Mutual Funds</Link>
            <Link href="#">SIP</Link>
            <Link href="#">Tax Saving</Link>
            <Link href="#">Fixed Deposits</Link>
            <Link href="#">Insurance</Link>
          </div>
        </div>
        <Link href="#">Portfolio X-Ray</Link>
        <Link href="#">Investor Zone</Link>
        <Link href="#">Buy Now</Link>
        <Link href="#">Contact Us</Link>
        
        {/* Mobile Actions - only visible when mobile menu is open */}
        <div className="nav-actions-mobile">
          <Link href="#" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>Become a Partner</Link>
          <button className="btn btn-primary" style={{ padding: "0.5rem 1.5rem" }}>Client Login</button>
        </div>
      </div>

      <div className="flex gap-4 items-center nav-actions">
        <Link href="#" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>Become a Partner</Link>
        <button className="btn btn-primary" style={{ padding: "0.5rem 1.5rem" }}>Client Login</button>
      </div>
      
      <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
