"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="floating-contact-wrapper"
    >
      <AnimatePresence>
        {isOpen && (
          <div className="floating-contact-menu">
            {/* Call Button */}
            <motion.a
              href="tel:+917669016565"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="floating-contact-btn floating-contact-call"
            >
              <Phone size={18} /> Call Us
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/917669016565"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="floating-contact-btn floating-contact-wa"
            >
              <MessageCircle size={18} /> WhatsApp
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-contact-main-btn"
      >
        {isOpen ? (
          <img src="/cross_391116.png" alt="Close" style={{ width: "60px", height: "60px", objectFit: "contain" }} />
        ) : (
          <img src="/phone_874555.png" alt="Contact" style={{ width: "60px", height: "60px", objectFit: "contain" }} />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
