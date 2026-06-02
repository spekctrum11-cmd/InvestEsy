"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MarketTicker from "@/components/MarketTicker";

const images = [
  "Gallery-1.jpg", "Gallery-2.jpg", "Gallery-3.jpg", "Gallery-4.jpg",
  "Gallery-5.jpg", "Gallery-6.jpg", "Gallery-7.jpg", "Gallery-8.jpg",
  "Gallery-9.jpg", "Gallery-10.jpg", "Gallery-11.jpg", "Gallery-12.jpg",
  "Gallery-13.jpg", "Gallery-17.jpg", "Gallery-18.jpg", "Gallery-19.jpg",
  "Gallery-20.jpg", "IMG_20240911_173620.jpg", "IMG_20240911_180008.jpg",
  "WhatsApp-Image-2024-11-05-at-3.23.07-PM.jpeg"
];

// Placeholder locations for the "Where" option
const locations = [
  "Delhi Head Office", "Annual Summit", "Team Outing", "Awards Ceremony", "Client Meet"
];

const itemTypes = [
  "large", "standard", "standard", "wide", "standard",
  "standard", "wide", "standard", "large", "standard",
  "wide", "standard", "standard", "large", "standard",
  "wide", "standard", "standard", "wide", "standard"
];

export default function GalleryPage() {
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
          title: "Real Fincorp Gallery",
          text: "Check out this beautiful moment from Real Fincorp!",
          url: window.location.href
        });
      } else {
        alert("Sharing is not supported on this device. You can copy the URL instead!");
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

        {/* Gallery Header */}
        <div style={{ paddingTop: "140px", paddingBottom: "30px", textAlign: "center", position: "relative", zIndex: 1, paddingInline: "clamp(1.5rem, 12vw, 15rem)" }}>
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
            Our Memories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gradient"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, marginBottom: "1rem" }}
          >
            Moments & Milestones
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}
          >
            A glimpse into our events, celebrations, and the vibrant life at Real Fincorp Private Limited.
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="container" style={{ paddingBottom: "3rem", paddingInline: "clamp(1.5rem, 12vw, 15rem)" }}>
        <div className="gallery-bento">
          {images.map((src, index) => {
            const itemType = itemTypes[index % itemTypes.length];
            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 8) * 0.05, duration: 0.5 }}
                className={`gallery-item-bento ${itemType}`}
                onClick={() => setSelectedImage(src)}
              >
                <div className="gallery-image-wrapper-bento">
                  <img
                    src={`/Gallery/${src}`}
                    alt={`Real Fincorp Gallery ${index + 1}`}
                    loading="lazy"
                    className="gallery-img-bento"
                  />

                  <div className="gallery-overlay-bento">
                    <div className="gallery-icon-bento">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                    </div>
                  </div>

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
              {/* Share / Where Button */}
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
                src={`/Gallery/${selectedImage}`}
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
