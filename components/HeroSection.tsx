"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let isHovered = false;
    let isDragging = false;
    let startX: number;
    let scrollLeftStart: number;

    // Inertia variables
    let velocity = 0;
    let lastMouseX = 0;
    let lastTime = 0;

    const scroll = () => {
      if (scrollRef.current) {
        // Infinite loop handling (forward and backward)
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
        } else if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft += scrollRef.current.scrollWidth / 2;
        }

        if (!isDragging) {
          // If we have momentum, apply it and decelerate
          if (Math.abs(velocity) > 0.1) {
            scrollRef.current.scrollLeft += velocity;
            velocity *= 0.95; // Friction coefficient
          }
          // If no momentum and not hovering, do the default auto-scroll
          else if (!isHovered) {
            scrollRef.current.scrollLeft += 0.5; // Base auto-scroll speed
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleInteractStart = () => { isHovered = true; };
    const handleInteractEnd = () => {
      isHovered = false;
      isDragging = false;
      if (scrollRef.current) scrollRef.current.classList.remove('is-dragging');
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      isDragging = true;
      isHovered = true;
      startX = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftStart = scrollRef.current.scrollLeft;

      // Reset inertia
      velocity = 0;
      lastMouseX = e.pageX;
      lastTime = performance.now();

      scrollRef.current.style.cursor = 'grabbing';
      scrollRef.current.classList.add('is-dragging');
    };

    const handleMouseLeave = () => {
      isHovered = false;
      isDragging = false;
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
        scrollRef.current.classList.remove('is-dragging');
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
        scrollRef.current.classList.remove('is-dragging');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();

      const now = performance.now();
      const dt = now - lastTime;
      const dx = e.pageX - lastMouseX;

      // Calculate throwing velocity (pixels per frame)
      if (dt > 0) {
        velocity = (-dx * 1.5) / (dt / 16.66);
      }

      lastMouseX = e.pageX;
      lastTime = now;

      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeftStart - walk;
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.style.cursor = 'grab';
      currentRef.addEventListener('mouseenter', handleInteractStart);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
      currentRef.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      currentRef.addEventListener('mousemove', handleMouseMove);

      currentRef.addEventListener('touchstart', handleInteractStart);
      currentRef.addEventListener('touchend', handleInteractEnd);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (currentRef) {
        currentRef.removeEventListener('mouseenter', handleInteractStart);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
        currentRef.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        currentRef.removeEventListener('mousemove', handleMouseMove);

        currentRef.removeEventListener('touchstart', handleInteractStart);
        currentRef.removeEventListener('touchend', handleInteractEnd);
      }
    };
  }, []);

  const services = [
    { img: "/service/mutual-fund.png", title: "Mutual Funds" },
    { img: "/service/SIP.png", title: "SIPs" },
    { img: "/service/tax.png", title: "Tax Saving" },
    { img: "/service/deposit.png", title: "Fixed Deposits" },
    { img: "/service/loan.png", title: "Bonds" },
    { img: "/service/NPS.png", title: "NPS" },
    { img: "/service/insurance.png", title: "Insurance" },
    { img: "/service/PMS-AIF.png", title: "PMS / AIF" },
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="animate-fade-in">
          <div className="badge">✨ #Simple Hassle Free Investment</div>
          <h1>
            Smart Mutual Fund<br />Investing Made Simple
          </h1>
          <p>
            Maximize returns and limit risk. InvestEsy gives you complete visibility,
            adaptive strategies, and predictive control.
          </p>
          <div className="flex justify-center gap-4" style={{ marginBottom: '3rem' }}>
            <a href="https://investesy.investwell.app/app/#/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "0.75rem 2rem", fontSize: "1.1rem" }}>Invest Now</a>
          </div>

          {/* Integrated Services Marquee */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <motion.div
              ref={scrollRef}
              className="single-feature-card marquee-wrapper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'transparent', border: 'none' }}
            >
              <div className="marquee-track">
                {services.map((service, idx) => (
                  <div key={idx} className="service-item">
                    <div className="feature-icon-wrapper" style={{ overflow: 'hidden', padding: '6px' }}>
                      <img src={service.img} alt={service.title} style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
                    </div>
                    <span className="feature-title">{service.title}</span>
                  </div>
                ))}
              </div>
              <div className="marquee-track" aria-hidden="true">
                {services.map((service, idx) => (
                  <div key={`dup-${idx}`} className="service-item">
                    <div className="feature-icon-wrapper" style={{ overflow: 'hidden', padding: '6px' }}>
                      <img src={service.img} alt={service.title} style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
                    </div>
                    <span className="feature-title">{service.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
