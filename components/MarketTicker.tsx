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
          { "title": "SENSEX", "proName": "BSE:SENSEX" },
          { "title": "SILVER", "proName": "OANDA:XAGUSD" },
          { "title": "BRENT CRUDE OIL", "proName": "TVC:UKOIL" },
          { "title": "USD / INR", "proName": "FX_IDC:USDINR" },
          { "title": "GOLD", "proName": "TVC:GOLD" },
          { "title": "EUR / INR", "proName": "FX_IDC:EURINR" },
          { "title": "GBP / INR", "proName": "FX_IDC:GBPINR" },
          { "title": "S&P 500", "proName": "FOREXCOM:SPXUSD" },
          { "title": "NASDAQ 100", "proName": "FOREXCOM:NSXUSD" }
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
