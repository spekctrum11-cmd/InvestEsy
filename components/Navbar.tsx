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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => { 
      document.body.style.overflow = ""; 
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar container flex justify-between items-center ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-menu-active" : ""}`}>
      <div className="logo">
        <Link href="/">
          <img src="/investesy-logo.png" alt="InvestEsy Logo" className="nav-logo-img" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
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
      </div>

      <div className="flex gap-4 items-center nav-actions">
        <Link href="#" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>Become a Partner</Link>
        <button className="btn btn-primary" style={{ padding: "0.5rem 1.5rem" }}>Client Login</button>
      </div>

      {/* Mobile Toggle */}
      <button className="mobile-toggle" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); if (isMobileMenuOpen) setIsServicesOpen(false); }}>
        <div className={`hamburger-icon ${isMobileMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* ===== PREMIUM FULLSCREEN MOBILE MENU ===== */}
      <div className={`mobile-fullscreen-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {/* Aurora Background */}
        <div className="mobile-aurora">
          <div className="m-aurora-blob m-aurora-1"></div>
          <div className="m-aurora-blob m-aurora-2"></div>
          <div className="m-aurora-blob m-aurora-3"></div>
        </div>

        <div className="mobile-menu-content">
          {/* Services Accordion */}
          <div className="mobile-nav-item">
            <button className={`mobile-nav-link ${isServicesOpen ? "expanded" : ""}`} onClick={() => setIsServicesOpen(!isServicesOpen)}>
              <div className="mobile-link-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span>Services</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`chevron-icon ${isServicesOpen ? "rotated" : ""}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`mobile-sub-menu ${isServicesOpen ? "open" : ""}`}>
              <Link href="#" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                Mutual Funds
              </Link>
              <Link href="#" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                SIP
              </Link>
              <Link href="#" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                Tax Saving
              </Link>
              <Link href="#" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"></rect><path d="M12 8v12"></path><path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path></svg>
                Fixed Deposits
              </Link>
              <Link href="#" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                Insurance
              </Link>
            </div>
          </div>

          {/* Main Links */}
          <Link href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-link-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <span>Portfolio X-Ray</span>
            </div>
          </Link>
          <Link href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-link-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span>Investor Zone</span>
            </div>
          </Link>
          <Link href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-link-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>Buy Now</span>
            </div>
          </Link>
          <Link href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-link-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <span>Contact Us</span>
            </div>
          </Link>

          {/* CTA Buttons */}
          <div className="mobile-cta-section">
            <Link href="#" className="btn btn-outline mobile-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>Become a Partner</Link>
            <button className="btn btn-primary mobile-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>Client Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
