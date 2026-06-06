"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function TopMutualFundsSection() {
  const [panelHeight, setPanelHeight] = useState(580);
  const [isDraggingState, setIsDraggingState] = useState(false);
  
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startHeight = useRef(580);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    setIsDraggingState(true);
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    startY.current = clientY;
    startHeight.current = panelHeight;
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleMouseUp);
    
    document.body.style.userSelect = "none";
    document.body.style.cursor = "ns-resize";
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const deltaY = e.clientY - startY.current;
    setPanelHeight(Math.max(200, startHeight.current + deltaY));
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current) return;
    const deltaY = e.touches[0].clientY - startY.current;
    setPanelHeight(Math.max(200, startHeight.current + deltaY));
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    setIsDraggingState(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleMouseUp);
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  }, [handleMouseMove, handleTouchMove]);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="top-mf-section">
      {/* Aurora Background Effect */}
      <div className="aurora-wrapper">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "4rem", position: "relative", zIndex: 10 }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", letterSpacing: "-0.02em" }} className="text-gradient">Top Mutual Funds</h2>
        <div className="animated-underline"></div>
        <p className="text-muted" style={{ marginTop: "1rem", fontSize: "1.1rem" }}>Explore elite performance across our curated selection of high-yield funds.</p>
      </div>

      <div className="elite-glass-panel animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="panel-header">
          <div className="window-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control expand"></span>
          </div>
        </div>

        <div 
          className="panel-body mf-panel-body"
          style={{ height: `${panelHeight}px` }}
        >
          <div className="mf-iframe-wrapper">
            <iframe
              src="https://www.investwell.in/updation/parameter/par_mfperform_schsort.jsp?&ht=ffffff&hbg=015FAF&bt=000000&r1=dddddd&r2=f2f2f2&fs=14"
              className="mf-iframe"
              title="Top Mutual Funds Performance"
              frameBorder="0"
              scrolling="auto"
              style={{ 
                display: "block", 
                border: "none", 
                backgroundColor: "transparent",
                pointerEvents: isDraggingState ? "none" : "auto"
              }}
            ></iframe>
          </div>
          
          <div 
            className="panel-resizer"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <span className="resize-hint">Drag to resize</span>
            <div className="resizer-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
