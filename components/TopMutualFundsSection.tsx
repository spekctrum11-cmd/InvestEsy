"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";

export default function TopMutualFundsSection() {
  const [panelHeight, setPanelHeight] = useState(580);
  const [isDraggingState, setIsDraggingState] = useState(false);
  
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startHeight = useRef(580);
  const handleMouseMoveRef = useRef<(event: MouseEvent) => void>(() => {});
  const handleTouchMoveRef = useRef<(event: TouchEvent) => void>(() => {});
  const handlePointerUpRef = useRef<() => void>(() => {});

  const handleMouseMove = useCallback((event: MouseEvent) => {
    handleMouseMoveRef.current(event);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    handleTouchMoveRef.current(event);
  }, []);

  const handlePointerUp = useCallback(() => {
    handlePointerUpRef.current();
  }, []);

  const handleMouseDown = useCallback((event: ReactMouseEvent | ReactTouchEvent) => {
    isDragging.current = true;
    setIsDraggingState(true);
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
    startY.current = clientY;
    startHeight.current = panelHeight;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handlePointerUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handlePointerUp);
  }, [handleMouseMove, handlePointerUp, handleTouchMove, panelHeight]);

  useEffect(() => {
    handleMouseMoveRef.current = (event: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaY = event.clientY - startY.current;
      setPanelHeight(Math.max(200, startHeight.current + deltaY));
    };
  }, []);

  useEffect(() => {
    handleTouchMoveRef.current = (event: TouchEvent) => {
      if (!isDragging.current) return;
      const deltaY = event.touches[0].clientY - startY.current;
      setPanelHeight(Math.max(200, startHeight.current + deltaY));
    };
  }, []);

  useEffect(() => {
    handlePointerUpRef.current = () => {
      isDragging.current = false;
      setIsDraggingState(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handlePointerUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handlePointerUp);
    };
  }, [handleMouseMove, handlePointerUp, handleTouchMove]);

  useEffect(() => {
    if (!isDraggingState) return;

    const previousUserSelect = document.body.style.userSelect;
    const previousCursor = document.body.style.cursor;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "ns-resize";

    return () => {
      document.body.style.userSelect = previousUserSelect;
      document.body.style.cursor = previousCursor;
    };
  }, [isDraggingState]);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handlePointerUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handlePointerUp);
    };
  }, [handleMouseMove, handlePointerUp, handleTouchMove]);

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
