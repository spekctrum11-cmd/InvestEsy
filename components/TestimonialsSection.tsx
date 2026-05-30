"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: "Amit Rastogi",
    designation: "Manager",
    initials: "AR",
    bg: "linear-gradient(135deg, #2563eb, #14b8a6)",
    text: "InvestEsy completely transformed how I manage my wealth. The platform is incredibly intuitive, and their digital gold and mutual fund offerings are totally seamless. Highly recommended for any serious investor!",
  },
  {
    id: 2,
    name: "Sanjay Singh",
    designation: "Manager",
    initials: "SS",
    bg: "linear-gradient(135deg, #9333ea, #ec4899)",
    text: "As a professional, I have very little time to track markets. InvestEsy's curated mutual funds and flawless, transparent interface make long-term investing completely effortless and stress-free.",
  },
  {
    id: 3,
    name: "Rohit Gupta",
    designation: "",
    initials: "RG",
    bg: "linear-gradient(135deg, #f97316, #ef4444)",
    text: "The transparency and ease of use are simply unmatched. From corporate FDs to equities, having everything consolidated in one beautiful place is a game-changer. Best investment platform I've used.",
  }
];

export default function TestimonialsSection() {
  const [cards, setCards] = useState(testimonialsData);

  const sendToBack = () => {
    setCards((prev) => {
      const newArray = [...prev];
      const first = newArray.shift();
      if (first) newArray.push(first);
      return newArray;
    });
  };

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-inner">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
          <h2 className="why-title text-gradient" style={{ marginBottom: "0.5rem" }}>
            Loved by Investors
          </h2>
          <div className="animated-underline"></div>
          <p className="testimonials-header-desc" style={{ marginTop: "1rem" }}>
            Don't just take our word for it. Here is what our clients have to say.
          </p>
        </div>

        {/* Desktop Grid: Simple 3 cards in line */}
        <div className="testimonials-desktop-grid">
          {testimonialsData.map((card) => (
            <div key={card.id} className="t-card" style={{ background: card.bg }}>
              <span className="t-quote-mark">"</span>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <p className="t-text">
                  {card.text}
                </p>
              </div>
              <div className="t-author-section">
                <div className="t-avatar">
                  {card.initials}
                </div>
                <div className="t-author-info">
                  <strong className="elementskit-author-name t-author-name">{card.name}</strong>
                  <span className="elementskit-author-des t-author-des">{card.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Interactive 3D Card Deck */}
        <div className="testimonials-mobile-deck">
          {cards.map((card, index) => {
            const isFront = index === 0;
            // Only render top 3 cards
            if (index > 3) return null; 

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ 
                  opacity: 1 - index * 0.15,
                  scale: 1 - index * 0.05,
                  y: index * 22,
                  zIndex: cards.length - index,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (offset.x > 100 || offset.x < -100 || Math.abs(swipe) > 500) {
                    sendToBack();
                  }
                }}
                whileDrag={{ scale: 1.05, rotate: 2, cursor: "grabbing" }}
                onClick={() => {
                  if (isFront) sendToBack();
                }}
                className="t-mobile-card"
                style={{
                  background: card.bg,
                  cursor: isFront ? 'grab' : 'default'
                }}
              >
                <span className="t-quote-mark">"</span>
                
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <p className="t-text" style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
                    {card.text}
                  </p>
                </div>

                <div className="t-author-section" style={{ marginTop: 'auto' }}>
                  <div className="t-avatar" style={{ width: '2.5rem', height: '2.5rem', fontSize: '0.8125rem' }}>
                    {card.initials}
                  </div>
                  <div className="t-author-info">
                    <strong className="elementskit-author-name t-author-name" style={{ fontSize: '0.875rem' }}>{card.name}</strong>
                    <span className="elementskit-author-des t-author-des" style={{ fontSize: '0.6875rem' }}>{card.designation}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Swipe Hint */}
        <div className="t-swipe-hint">
          <div className="t-swipe-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="t-swipe-icon">
              <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-1.5-5.8-3.3L3 17l2.5-1.5 2.5 1.5V11a2 2 0 0 1 2-2"/>
            </svg>
          </div>
          <span>Swipe or tap top card to explore</span>
        </div>

      </div>
    </section>
  );
}
