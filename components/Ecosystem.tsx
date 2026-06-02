"use client";

import React from "react";
import Image from "next/image";

export default function Ecosystem() {
  return (
    <section className="eco-section">
      <div className="eco-container">
        {/* Header */}
        <div className="eco-header">
          <h2>
            The{" "}
            <span className="eco-spektrum-text">
              <span style={{ color: "#4B2682" }}>S</span>
              <span style={{ color: "#2E3192" }}>P</span>
              <span style={{ color: "#009245" }}>E</span>
              <span style={{ color: "#8CC63F" }}>K</span>
              <span style={{ color: "#f1ee18ff" }}>C</span>
              <span style={{ color: "#F15A24" }}>T</span>
              <span style={{ color: "#ED1C24" }}>R</span>
              <span style={{ color: "#29ABE2" }}>U</span>
              <span style={{ color: "#1B1464" }}>M</span>
            </span>{" "}
            Ecosystem
          </h2>
          <p>One Vision. Multiple Ventures. Infinite Possibilities.</p>
        </div>

        {/* Diagram */}
        <div className="eco-diagram">
          {/* Left Column */}
          <div className="eco-col eco-left">
            {/* Item 1 */}
            <div className="eco-item">
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="community">👥</span></div>
                <span>Community<br />Platform</span>
              </div>
              <div className="eco-card border-orange">
                <img src="/Brands/beemaaa.png" alt="Beeमा" className="eco-logo-img" />
                <span className="eco-url">www.beemaaa.com</span>
                <div className="eco-line line-tl"></div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="eco-item">
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="finance">₹</span></div>
                <span>Financial<br />Services</span>
              </div>
              <div className="eco-card border-green">
                <img src="/Brands/sahipe_logo.jpg" alt="सही पे" className="eco-logo-img" />
                <span className="eco-url">www.sahipe.com</span>
                <div className="eco-line line-ml"></div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="eco-item">
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="invest">📈</span></div>
                <span>Investment<br />Platform</span>
              </div>
              <div className="eco-card border-blue">
                <img src="/Brands/investesy_logo.jpg" alt="InvestEsy" className="eco-logo-img" />
                <span className="eco-url">www.investesy.in</span>
                <div className="eco-line line-bl"></div>
              </div>
            </div>
          </div>

          {/* Center Hub */}
          <div className="eco-center">
            <div className="eco-hub-ring">
              <div className="eco-hub-inner">
                <img src="/Brands/spekctrum_icon.jpg" alt="SPEKTRUM" className="eco-hub-icon" />
                <div className="eco-hub-text">
                  <span className="eco-spektrum-text">
                    <span style={{ color: "#4B2682" }}>S</span>
                    <span style={{ color: "#2E3192" }}>P</span>
                    <span style={{ color: "#009245" }}>E</span>
                    <span style={{ color: "#8CC63F" }}>K</span>
                    <span style={{ color: "#f1ee18ff" }}>C</span>
                    <span style={{ color: "#F15A24" }}>T</span>
                    <span style={{ color: "#ED1C24" }}>R</span>
                    <span style={{ color: "#29ABE2" }}>U</span>
                    <span style={{ color: "#1B1464" }}>M</span>
                  </span>
                  <span className="eco-hub-com">.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="eco-col eco-right">
            {/* Item 4 */}
            <div className="eco-item">
              <div className="eco-card border-orange">
                <img src="/Brands/travelezi.png" alt="TravelEzi" className="eco-logo-img" />
                <span className="eco-url">www.travelezi.com</span>
                <div className="eco-line line-tr"></div>
              </div>
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="travel">✈️</span></div>
                <span>Travel<br />Solutions</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="eco-item">
              <div className="eco-card border-blue">
                <img src="/Brands/udhary_logo.png" alt="उधारी" className="eco-logo-img" />
                <span className="eco-url">www.udhary.com</span>
                <div className="eco-line line-br"></div>
              </div>
              <div className="eco-meta">
                <div className="eco-icon"><span role="img" aria-label="loan">💸</span></div>
                <span>Loan<br />Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
