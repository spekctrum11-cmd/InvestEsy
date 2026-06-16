"use client";

import React, { useState } from "react";
import MarketTicker from "@/components/MarketTicker";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const leftFaqs: FaqItem[] = [
  {
    question: "I am new to mutual fund investments, how do I get started?",
    answer: "Real Fincorp Private Limited is an ideal investing platform for first-time investors. All you have to do is login to the app, finish your KYC & investment readiness requirements and within no time you will be ready to invest with us."
  },
  {
    question: "I already invest in mutual funds. How can Real Fincorp Private Limited help me?",
    answer: "We make the investing process much simpler even for avid investors such as yourself. You will find all investment information about your favourite funds in one page. You can also switch your existing portfolio to Real Fincorp Private Limited."
  },
  {
    question: "What are the charges for opening the account through Real Fincorp Private Limited?",
    answer: "There are no charges for opening the account at Real Fincorp Private Limited for Mutual Fund investments."
  }
];

const rightFaqs: FaqItem[] = [
  {
    question: "What is a Mutual Fund?",
    answer: "A mutual fund is a professionally managed investment option made up of a pool of money collected from many investors for the purpose of investing in securities such as stocks, bonds, money market instruments and other asset"
  },
  {
    question: "What is SIP or Lumpsum Investment?",
    answer: (
      <>
        There are two primary ways of investing in a mutual fund - Lumpsum (One Time Investment) and SIP (Systematic Investment Plan)
        <br />
        Lumpsum Investment: A lumpsum investment is a one-time investment made by an investor when he is looking to invest a certain amount of money at once.
        <br />
        SIP: A SIP (systematic investment plan) is a recurring investment made by an investor in the same scheme at regular intervals (monthly, weekly, etc.).
      </>
    )
  },
  {
    question: "What are Mutual Fund Ratings?",
    answer: "A mutual fund rating is usually a measure of a fund's historical risk-adjusted performance over different time frames compared with the funds in the same category. Mutual Funds are independently rated by various rating agencies such as CRISIL, Morningstar and Value Research."
  }
];

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="faq-plus-icon" aria-hidden="true">
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" xmlSpace="preserve">
          <rect x="8.828" y="253.646" width="494.345" height="49.434" fill="#005faf" opacity="1"></rect>
          <rect x="17.655" y="294.253" width="476.69" height="76.506" fill="#000000"></rect>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" xmlSpace="preserve">
          <rect x="231.284" y="8.828" width="49.434" height="494.344" fill="#005faf" opacity="1"></rect>
          <rect x="206.567" y="28.284" width="98.868" height="455.434" fill="#000000"></rect>
          <rect x="8.828" y="231.284" width="494.344" height="49.434" fill="#005faf" opacity="1"></rect>
          <rect x="28.284" y="206.567" width="455.434" height="98.868" fill="#000000"></rect>
        </svg>
      )}
    </span>
  );
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="elementskit-accordion accoedion-primary">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className={`elementskit-card ${isOpen ? "active" : ""}`} key={item.question}>
            <div className="elementskit-card-header">
              <button
                type="button"
                className="ekit-accordion--toggler elementskit-btn-link"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <span className="ekit-accordion-title">{item.question}</span>
                <span className="ekit_accordion_icon_group">
                  <PlusIcon isOpen={isOpen} />
                </span>
              </button>
            </div>

            {isOpen && (
              <div className="elementskit-card-body ekit-accordion--content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <main style={{ background: "var(--background)" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />

        <div className="about-banner" style={{
          backgroundColor: "var(--surface)",
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}>
          <div className="about-banner-overlay">
            <div className="about-banner-content">
              <span className="about-badge">Investor Zone</span>
              <h1 className="about-title">FAQs</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="faq-page-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="faq-columns"
        >
          <div className="faq-column">
            <FaqAccordion items={leftFaqs} />
          </div>
          <div className="faq-column">
            <FaqAccordion items={rightFaqs} />
          </div>
        </motion.div>
      </section>
    </main>
  );
}