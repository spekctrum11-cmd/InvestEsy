"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="investesy-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Column 1: Branding & Registration */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/new-astro.png" alt="InvestEsy Logo" className="footer-logo-img" />
            </div>
            <div className="footer-text mt-4">
              <p>AMFI Registration ARN-270606</p>
              <p>BSE Star MF Membership 58341</p>
            </div>
            <div className="startup-badge mt-6">
              <img src="/startup.png" alt="Startup India Logo" style={{ height: "35px", width: "auto" }} />
            </div>
            <p className="footer-text mt-2">Startup India: DIPP94269</p>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="https://investesy.investwell.app/app/#/login" target="_blank">Client Login</Link></li>
              <li><Link href="/past-sip-performance">MF Tools</Link></li>
              <li><Link href="/#financial-calculators">Financial Calculators</Link></li>
              <li><Link href="/kyc-fatca-forms">Downloads</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/blogs">Blog</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/awards">Awards</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/key-management">Key Management</Link></li>
            </ul>
          </div>

          {/* Column 4: Where We Are */}
          <div className="footer-col">
            <h4 className="footer-heading">Where We Are</h4>
            <div className="footer-contact">
              <p className="address">
                Unit 502, 5th Floor, Plot Number 5, Time House Tower, Wajirpur Community Centre, WIA, Delhi-110052.
              </p>
              <p className="phone" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="icon" style={{ display: 'flex' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                +91 7669016565
              </p>
              <p className="email">
                <span className="icon">✉️</span> care@investesy.in
              </p>
            </div>

            <div className="footer-socials mt-6">
              <Link href="https://www.facebook.com/investesy" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="https://www.instagram.com/investesy.in/" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            ©2023 Copyright InvestEsy (Real Fincorp Private Limited) All Rights Reserved.
          </div>
          <div className="legal-links">
            <Link href="/disclaimer">Disclaimer</Link>
            <span className="divider">|</span>
            <Link href="/disclosure">Disclosure</Link>
            <span className="divider">|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
