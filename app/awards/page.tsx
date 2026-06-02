"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MarketTicker from "@/components/MarketTicker";

const featuredAward = {
  imageFile: "Awards-7.jpg",
  title: "Udaan: The Rising Entrepreneurs CEO Award",
  subtitle: "Honorable Mr. Pankaj Gupta",
  alt: "Mr. Pankaj Gupta",
  caption: "Our CEO, Mr. Pankaj Gupta, has been recognized with the prestigious 'Udaan: The Rising Entrepreneurs' Award, a testament to his outstanding leadership and entrepreneurial spirit."
};

const otherAwards = [
  {
    imageFile: "Awards-8.jpg",
    title: "Udaan - The Rising Entrepreneurs Award",
    subtitle: "The Times Group",
    alt: "NBT Awards",
    caption: "Spectrum Insurance's remarkable achievement of winning the Udaan \"The Rising Entrepreneurs\" award, presented by The Times Group, is a testament to their exceptional talent and dedication."
  },
  {
    imageFile: "Award-1.jpg",
    title: "Best Insurance Broker of the Year",
    subtitle: "BFSI Leadership Awards 2022",
    alt: "BFSI Awards",
    caption: "Winning the award for the Best Insurance Broker of the Year at the exclusive BFSI Leadership Awards 2022."
  },
  {
    imageFile: "Awards-2.jpg",
    title: "Best Insurance Broker of the Year",
    subtitle: "BFSI Leadership Awards 2022",
    alt: "BFSI Awards",
    caption: "Achieving the prestigious title of Best Insurance Broker of the Year at the renowned BFSI Leadership Awards 2022 is a remarkable accomplishment."
  },
  {
    imageFile: "Awards-4.jpg",
    title: "Rising Entrepreneurs Recognition",
    subtitle: "Honoring Pankaj Gupta & Richa Varshney",
    alt: "Pankaj Gupta & Richa Varshney",
    caption: "This esteemed recognition celebrates Pankaj Gupta and Richa Varshney's exceptional entrepreneurial journey and their outstanding contributions to the business world."
  },
  {
    imageFile: "Awards-5.jpg",
    title: "The Rising Entrepreneurs Award",
    subtitle: "The Times Group",
    alt: "Pankaj Gupta",
    caption: "Spectrum Insurance's outstanding accomplishment of winning the Udaan \"Rising Entrepreneurs\" award, bestowed upon them by The Times Group, is a clear testament to their remarkable talent and unwavering dedication."
  },
  {
    imageFile: "Awards-6.jpg",
    title: "CII Member Recognition",
    subtitle: "Confederation of Indian Industry",
    alt: "CII Meeting",
    caption: "Spectrum Insurance takes immense pride in being a part of the prestigious CII (Confederation of Indian Industry) group. As a member of this esteemed organization, Spectrum Insurance benefits from the extensive network, resources, and expertise that CII offers."
  }
];

export default function AwardsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };
  
  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: "InvestEsy Awards",
          text: "Check out this prestigious achievement from InvestEsy!",
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.log("Share failed:", err);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <MarketTicker />
      <div className="hero-bg-wrapper">
        <Navbar />
        
        {/* Awards Header */}
        <div style={{ paddingTop: "140px", paddingBottom: "60px", textAlign: "center", position: "relative", zIndex: 1, paddingInline: "1.5rem" }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: "inline-block",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              background: "rgba(37, 99, 235, 0.1)",
              color: "var(--primary)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(37, 99, 235, 0.2)"
            }}
          >
            Awards & Accolades
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gradient"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, marginBottom: "1rem" }}
          >
            Celebrating Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}
          >
            A chronicle of our industry recognitions, entrepreneurial milestones, and our unwavering commitment to client success.
          </motion.p>
        </div>
      </div>

      {/* Awards Section Container */}
      <section className="container" style={{ paddingBottom: "6rem", paddingInline: "1.5rem" }}>
        
        {/* Featured Award Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="award-featured-card"
        >
          <div 
            className="award-featured-img-wrapper"
            onClick={() => setSelectedImage(featuredAward.imageFile)}
          >
            <img 
              src={`/awards/${featuredAward.imageFile}`} 
              alt={featuredAward.alt} 
              loading="lazy"
              className="award-featured-img"
            />
            <div className="award-featured-overlay">
              <div className="award-zoom-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>
            </div>
          </div>

          <div className="award-featured-info">
            <span className="award-featured-badge">
              Featured Recognition
            </span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--primary)" }}>
              {featuredAward.subtitle}
            </span>
            <h2 className="award-featured-title">
              {featuredAward.title}
            </h2>
            <p className="award-featured-caption">
              {featuredAward.caption}
            </p>
          </div>
        </motion.div>

        {/* Other Awards Grid */}
        <div className="awards-grid">
          {otherAwards.map((award, index) => {
            return (
              <motion.div
                key={award.imageFile}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                className="award-card"
              >
                <div 
                  className="award-img-wrapper"
                  onClick={() => setSelectedImage(award.imageFile)}
                >
                  <img 
                    src={`/awards/${award.imageFile}`} 
                    alt={award.alt} 
                    loading="lazy"
                    className="award-img"
                  />
                  <div className="award-overlay">
                    <div className="award-zoom-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>

                <div className="award-info">
                  <span className="award-badge">
                    {award.subtitle}
                  </span>
                  <h3 className="award-title">
                    {award.title}
                  </h3>
                  <p className="award-caption">
                    {award.caption}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(15, 23, 42, 0.95)",
              backdropFilter: "blur(12px)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              cursor: "zoom-out",
              overflow: "hidden"
            }}
          >
            {/* Toolbar */}
            <div style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              display: "flex",
              gap: "10px",
              zIndex: 100000
            }}>
              {/* Share Button */}
              <button onClick={handleShare} className="lightbox-btn" title="Share">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              </button>

              {/* Zoom Out Button */}
              <button onClick={handleZoomOut} className="lightbox-btn" title="Zoom Out">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </button>

              {/* Zoom In Button */}
              <button onClick={handleZoomIn} className="lightbox-btn" title="Zoom In">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </button>

              {/* Close Button */}
              <button onClick={closeLightbox} className="lightbox-btn" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Draggable Image Container */}
            <motion.div
              drag={zoomLevel > 1}
              dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: zoomLevel > 1 ? "grab" : "default"
              }}
            >
              <motion.img
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoomLevel, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={`/awards/${selectedImage}`}
                alt="Fullscreen view"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
