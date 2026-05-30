"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInvestorZoneOpen, setIsInvestorZoneOpen] = useState(false);
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);
  
  // States for Desktop nested toggles
  const [isBuyNowFDToggled, setIsBuyNowFDToggled] = useState(false);
  const [isBuyNowNPSToggled, setIsBuyNowNPSToggled] = useState(false);

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
        {/* Services Dropdown */}
        <div className="nav-item">
          <Link href="#">Services ▾</Link>
          <div className="dropdown">
            <Link href="https://investesy.in/mutual-funds/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Mutual Funds
            </Link>
            <Link href="https://investesy.in/systematic-investment-plan/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-blue"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              Systematic Investment Plan
            </Link>
            <Link href="https://beemaaa.com/" className="service-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-green"><path d="M22 12a10.06 10.06 0 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/></svg>
              Tax Saving
            </Link>
            <Link href="https://investesy.in/fixed-deposits/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-purple"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Fixed Deposits
            </Link>
            <Link href="https://investesy.in/bonds/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-pink"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              Bonds
            </Link>
            <Link href="https://investesy.in/nps/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-blue"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              NPS
            </Link>
            <Link href="https://investesy.in/life-insurance/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Term Life Insurance
            </Link>
            <Link href="https://investesy.in/health-insurance/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-pink"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Health Insurance
            </Link>
            <Link href="https://investesy.in/home-loan/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-purple"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Home Loan
            </Link>
            <Link href="https://investesy.in/pms-aif/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-green"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              PMS /AIF
            </Link>
          </div>
        </div>
        
        <Link href="https://investesy.in/portfolio-x-ray/">Portfolio X-Ray</Link>
        
        {/* Investor Zone Dropdown */}
        <div className="nav-item">
          <Link href="#">Investor Zone ▾</Link>
          <div className="dropdown">
            <Link href="https://investesy.in/educational-videos/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-purple"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              Educational Videos
            </Link>
            <Link href="https://investesy.in/sip-calculator/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="8" y1="10" x2="8" y2="10.01"/></svg>
              Financial Calculators
            </Link>
            <Link href="https://investesy.in/past-sip-performance/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-blue"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              MF Tools
            </Link>
            <Link href="https://investesy.in/mf-forms/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-green"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Downloads
            </Link>
            <Link href="https://investesy.in/principles-of-investing/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-pink"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Principles of Investing
            </Link>
            <Link href="https://investesy.in/open-free-demat-account/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-purple"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Open Free Demat Account
            </Link>
            <Link href="https://investesy.in/blogs/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              Blogs
            </Link>
            <Link href="https://investesy.in/faqs/" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-blue"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              FAQs
            </Link>
          </div>
        </div>

        {/* Buy Now Dropdown */}
        <div className="nav-item">
          <Link href="#">Buy Now ▾</Link>
          <div className="dropdown">
            <Link href="https://investesy.investwell.app/app/#/kycOnBoarding/mobileSignUp" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Mutual Funds
            </Link>
            
            <button className="dropdown-toggler" onClick={(e) => { e.preventDefault(); setIsBuyNowFDToggled(!isBuyNowFDToggled); }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-green"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>Fixed Deposits</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isBuyNowFDToggled ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`dropdown-nested-links ${isBuyNowFDToggled ? 'open' : ''}`}>
              <Link href="https://affiliate.shriramfinance.in/affiliate/cos_schemedetails.aspx?affiliatecode=DEBMUM132&subaffiliatecode=" className="service-link dropdown-nested-link" target="_blank">Shriram FD</Link>
            </div>
            
            <Link href="#" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-blue"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              Bonds
            </Link>
            
            <button className="dropdown-toggler" onClick={(e) => { e.preventDefault(); setIsBuyNowNPSToggled(!isBuyNowNPSToggled); }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-purple"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>NPS</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isBuyNowNPSToggled ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`dropdown-nested-links ${isBuyNowNPSToggled ? 'open' : ''}`}>
              <Link href="https://uatcra.kfintech.com/poponlinev2/popverification?AuthID=DB75FB78A93FCC3AE9D4F1C32228A600DFFBB5FCACE73C44D0224DF7FD95B24F0DFF1C72A0590DA64BF1D2A953A7DFBB" className="service-link dropdown-nested-link" target="_blank">Open NPS Account</Link>
              <Link href="https://uatcra.kfintech.com/poponlinev2/POPContributeOnline?AuthID=DB75FB78A93FCC3AE9D4F1C32228A600BEAD2023311AB8BF51D41AA46AA3A230" className="service-link dropdown-nested-link" target="_blank">Subsequent Contribution</Link>
            </div>

            <Link href="https://investesy.augmont.com/buy" className="service-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Digital Gold
            </Link>
            <Link href="#" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-pink"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              IPO
            </Link>
            <Link href="https://beemaaa.com/home/term-life" className="service-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-pink"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Term Life Insurance
            </Link>
            <Link href="https://beemaaa.com/home/Car_Insurance" className="service-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-blue"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              Four Wheeler Insurance
            </Link>
            <Link href="https://beemaaa.com/home/bike-Insurance" className="service-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-green"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Two Wheeler Insurance
            </Link>
            <Link href="https://beemaaa.com/home/health-Insurance" className="service-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-pink"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Health Insurance
            </Link>
            <Link href="https://udhary.com/" className="service-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-orange"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Get Loan
            </Link>
            <Link href="https://investesy.larkfinserv.com/login" className="service-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-icon icon-purple"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              Loan Against Mutual Fund
            </Link>
          </div>
        </div>

        <Link href="https://investesy.in/contact-us/">Contact Us</Link>
      </div>

      <div className="flex gap-4 items-center nav-actions">
        <Link href="https://investesy.in/become-a-partner/" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>Become a Partner</Link>
        <Link href="https://investesy.investwell.app/app/#/login" target="_blank" className="btn btn-primary" style={{ padding: "0.5rem 1.5rem" }}>Client Login</Link>
      </div>

      {/* Mobile Toggle */}
      <button className="mobile-toggle" onClick={() => { 
        setIsMobileMenuOpen(!isMobileMenuOpen); 
        if (isMobileMenuOpen) {
          setIsServicesOpen(false);
          setIsInvestorZoneOpen(false);
          setIsBuyNowOpen(false);
        }
      }}>
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
              <Link href="https://investesy.in/mutual-funds/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link href="https://investesy.in/systematic-investment-plan/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Systematic Investment Plan</Link>
              <Link href="https://beemaaa.com/" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>Tax Saving</Link>
              <Link href="https://investesy.in/fixed-deposits/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Fixed Deposits</Link>
              <Link href="https://investesy.in/bonds/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Bonds</Link>
              <Link href="https://investesy.in/nps/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>NPS</Link>
              <Link href="https://investesy.in/life-insurance/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Term Life Insurance</Link>
              <Link href="https://investesy.in/health-insurance/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Health Insurance</Link>
              <Link href="https://investesy.in/home-loan/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Home Loan</Link>
              <Link href="https://investesy.in/pms-aif/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>PMS /AIF</Link>
            </div>
          </div>

          <Link href="https://investesy.in/portfolio-x-ray/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-link-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <span>Portfolio X-Ray</span>
            </div>
          </Link>

          {/* Investor Zone Accordion */}
          <div className="mobile-nav-item">
            <button className={`mobile-nav-link ${isInvestorZoneOpen ? "expanded" : ""}`} onClick={() => setIsInvestorZoneOpen(!isInvestorZoneOpen)}>
              <div className="mobile-link-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Investor Zone</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`chevron-icon ${isInvestorZoneOpen ? "rotated" : ""}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`mobile-sub-menu ${isInvestorZoneOpen ? "open" : ""}`}>
              <Link href="https://investesy.in/educational-videos/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Educational Videos</Link>
              <Link href="https://investesy.in/sip-calculator/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Financial Calculators</Link>
              <Link href="https://investesy.in/past-sip-performance/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>MF Tools</Link>
              <Link href="https://investesy.in/mf-forms/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Downloads</Link>
              <Link href="https://investesy.in/principles-of-investing/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Principles of Investing</Link>
              <Link href="https://investesy.in/open-free-demat-account/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Open Free Demat Account</Link>
              <Link href="https://investesy.in/blogs/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
              <Link href="https://investesy.in/faqs/" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>
            </div>
          </div>

          {/* Buy Now Accordion */}
          <div className="mobile-nav-item">
            <button className={`mobile-nav-link ${isBuyNowOpen ? "expanded" : ""}`} onClick={() => setIsBuyNowOpen(!isBuyNowOpen)}>
              <div className="mobile-link-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span>Buy Now</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`chevron-icon ${isBuyNowOpen ? "rotated" : ""}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`mobile-sub-menu ${isBuyNowOpen ? "open" : ""}`}>
              <Link href="https://investesy.investwell.app/app/#/kycOnBoarding/mobileSignUp" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Mutual Funds</Link>
              
              <button className="mobile-sub-link" style={{ background: "transparent", border: "none", width: "100%", textAlign: "left", justifyContent: "space-between" }} onClick={(e) => { e.preventDefault(); setIsBuyNowFDToggled(!isBuyNowFDToggled); }}>
                <span>Fixed Deposits</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isBuyNowFDToggled ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div className={`dropdown-nested-links ${isBuyNowFDToggled ? 'open' : ''}`}>
                <Link href="https://affiliate.shriramfinance.in/affiliate/cos_schemedetails.aspx?affiliatecode=DEBMUM132&subaffiliatecode=" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.85rem" }}>Shriram FD</Link>
              </div>

              <Link href="#" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Bonds</Link>

              <button className="mobile-sub-link" style={{ background: "transparent", border: "none", width: "100%", textAlign: "left", justifyContent: "space-between" }} onClick={(e) => { e.preventDefault(); setIsBuyNowNPSToggled(!isBuyNowNPSToggled); }}>
                <span>NPS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isBuyNowNPSToggled ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div className={`dropdown-nested-links ${isBuyNowNPSToggled ? 'open' : ''}`}>
                <Link href="https://uatcra.kfintech.com/poponlinev2/popverification?AuthID=DB75FB78A93FCC3AE9D4F1C32228A600DFFBB5FCACE73C44D0224DF7FD95B24F0DFF1C72A0590DA64BF1D2A953A7DFBB" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.85rem" }}>Open NPS Account</Link>
                <Link href="https://uatcra.kfintech.com/poponlinev2/POPContributeOnline?AuthID=DB75FB78A93FCC3AE9D4F1C32228A600BEAD2023311AB8BF51D41AA46AA3A230" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.85rem" }}>Subsequent Contribution</Link>
              </div>

              <Link href="https://investesy.augmont.com/buy" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>Digital Gold</Link>
              <Link href="#" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>IPO</Link>
              <Link href="https://beemaaa.com/home/term-life" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>Term Life Insurance</Link>
              <Link href="https://beemaaa.com/home/Car_Insurance" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>Four Wheeler Insurance</Link>
              <Link href="https://beemaaa.com/home/bike-Insurance" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>Two Wheeler Insurance</Link>
              <Link href="https://beemaaa.com/home/health-Insurance" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>Health Insurance</Link>
              <Link href="https://udhary.com/" className="mobile-sub-link" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>Get Loan</Link>
              <Link href="https://investesy.larkfinserv.com/login" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>Loan Against Mutual Fund</Link>
            </div>
          </div>

          <Link href="https://investesy.in/contact-us/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-link-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <span>Contact Us</span>
            </div>
          </Link>

          {/* CTA Buttons */}
          <div className="mobile-cta-section" style={{ marginTop: "1.5rem" }}>
            <Link href="https://investesy.in/become-a-partner/" className="btn btn-outline mobile-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>Become a Partner</Link>
            <Link href="https://investesy.investwell.app/app/#/login" target="_blank" className="btn btn-primary mobile-cta-btn" onClick={() => setIsMobileMenuOpen(false)}>Client Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
