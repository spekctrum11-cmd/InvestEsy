"use client";

import React, { useEffect, useRef } from 'react';

export default function MarketTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent double injection in StrictMode
    if (containerRef.current && containerRef.current.querySelector('script')) {
      return;
    }
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "description": "NIFTY 50",
            "proName": "NSE:NIFTY"
          },
          {
            "description": "SENSEX",
            "proName": "BSE:SENSEX"
          },
          {
            "description": "BANK NIFTY",
            "proName": "NSE:BANKNIFTY"
          },
          {
            "description": "GOLD",
            "proName": "TVC:GOLD"
          },
          {
            "description": "USD / INR",
            "proName": "FX_IDC:USDINR"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "regular",
        "colorTheme": "dark",
        "locale": "in"
      }
    `;
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="market-ticker-container">
      <div className="tradingview-widget-container" ref={containerRef} style={{ width: '100%', height: '100%' }}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}
