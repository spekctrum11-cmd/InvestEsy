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
              <img src="/investesy-logo.png" alt="InvestEsy Logo" className="footer-logo-img" />
            </div>
            <div className="footer-text mt-4">
              <p>AMFI Registration ARN-270606</p>
              <p>BSE Star MF Membership 58341</p>
            </div>
            <div className="startup-badge mt-6">
              <span className="startup-hash">#</span>startup<span className="startup-india">india</span>
            </div>
            <p className="footer-text mt-2">Startup India: DIPP94269</p>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="#">Client Login</Link></li>
              <li><Link href="#">MF Tools</Link></li>
              <li><Link href="#">Financial Calculators</Link></li>
              <li><Link href="#">Downloads</Link></li>
              <li><Link href="#">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Gallery</Link></li>
              <li><Link href="#">Awards</Link></li>
              <li><Link href="#">Career</Link></li>
              <li><Link href="#">Key Management</Link></li>
            </ul>
          </div>

          {/* Column 4: Where We Are */}
          <div className="footer-col">
            <h4 className="footer-heading">Where We Are</h4>
            <div className="footer-contact">
              <p className="address">
                Unit 502, 5th Floor, Plot Number 5, Time House Tower, Wajirpur Community Centre, WIA, Delhi-110052.
              </p>
              <p className="phone">
                <span className="icon">📞</span> +91 7669016565
              </p>
              <p className="email">
                <span className="icon">✉️</span> care@investesy.in
              </p>
            </div>

            <div className="footer-socials mt-6">
              <Link href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
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
            <Link href="#">Disclaimer</Link>
            <span className="divider">|</span>
            <Link href="#">Disclosure</Link>
            <span className="divider">|</span>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
