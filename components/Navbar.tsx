"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
    <nav className={`navbar container flex justify-between items-center ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <Link href="/">
          <img src="/investesy-logo.png" alt="InvestEsy Logo" className="nav-logo-img" />
        </Link>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        {/* Elite Mobile Menu Aurora Background */}
        <div className="mobile-menu-aurora">
          <div className="aurora-blob aurora-1"></div>
          <div className="aurora-blob aurora-2"></div>
        </div>

        <div className="nav-item">
          <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="main-nav-link" style={{ background: "none", border: "none", cursor: "pointer", width: "100%", justifyContent: "flex-start", padding: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="nav-main-icon icon-blue"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            Services {isServicesOpen ? "▴" : "▾"}
          </button>
          
          <div className={`dropdown ${isServicesOpen ? "mobile-dropdown-open" : ""}`}>
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
        <Link href="#" className="main-nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="nav-main-icon icon-purple"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          Portfolio X-Ray
        </Link>
        <Link href="#" className="main-nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="nav-main-icon icon-orange"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Investor Zone
        </Link>
        <Link href="#" className="main-nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="nav-main-icon icon-pink"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Buy Now
        </Link>
        <Link href="#" className="main-nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="nav-main-icon icon-green"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Contact Us
        </Link>

        {/* Mobile Actions - only visible when mobile menu is open */}
        <div className="nav-actions-mobile">
          <Link href="#" className="btn btn-outline" style={{ padding: "0.8rem 1rem", fontSize: "0.95rem" }}>Become a Partner</Link>
          <button className="btn btn-primary" style={{ padding: "0.8rem 1.5rem", fontSize: "0.95rem" }}>Client Login</button>
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
