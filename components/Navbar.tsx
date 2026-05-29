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
            <Link href="#" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-blue"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              Mutual Funds
            </Link>
            <Link href="#" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-green"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
              SIP
            </Link>
            <Link href="#" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-pink"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              Tax Saving
            </Link>
            <Link href="#" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><rect x="3" y="8" width="18" height="12" rx="2"></rect><path d="M12 8v12"></path><path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path></svg>
              Fixed Deposits
            </Link>
            <Link href="#" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-purple"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              Insurance
            </Link>
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
