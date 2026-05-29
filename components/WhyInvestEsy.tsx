"use client";

import React from "react";

export default function WhyInvestEsy() {
  return (
    <section className="why-investesy-section">
      <div className="container">
        <div className="why-investesy-grid">
          
          <div className="why-investesy-image-col animate-fade-in">
            <div className="why-image-wrapper">
              <img 
                src="/about_us.jpg" 
                alt="About InvestEsy" 
                className="why-image"
              />
              <div className="why-image-glow"></div>
            </div>
          </div>

          <div className="why-investesy-content-col animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="why-title text-gradient">Why InvestEsy</h3>
            <div className="animated-underline" style={{ margin: "0 0 2rem 0" }}></div>
            
            <div className="why-text-content">
              <p>
                We as a InvestEsy organization, empower your financial journey and pave the path to a secure and prosperous future. As a premier investment firm, we understand that your financial goals are as unique as you are. That's why we offer a comprehensive range of investment solutions tailored to your individual aspirations, risk tolerance, and timeline.
              </p>
              <p>
                We understand that managing risk is crucial to achieving long-term financial success. Our risk management strategies aim to minimize volatility and safeguard your investments against market fluctuations, ensuring a more stable journey toward your goals.
              </p>
              <p>
                At InvestEsy, transparency is at the core of our operations. As a trusted investment firm, we continuously explore new opportunities to deliver the best value for our clients.
              </p>
              <p>
                We bring you new and smart investment options to help your money grow. We also offer easy-to-understand guides, events, and workshops so you can learn more about managing your money and make confident investment choices.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
