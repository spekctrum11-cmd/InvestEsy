"use client";

import Image from "next/image";
import Link from "next/link";

export default function AppDownloadSection() {
  return (
    <section className="app-download-section">
      <div className="container app-download-container animate-fade-in">
        <div className="app-download-content">
          <h2 className="app-download-title">Single App to manage all your Investments</h2>
          <h3 className="app-download-subtitle">Download the App Now!</h3>
          <div className="app-store-buttons">
            <Link href="https://play.google.com/store/apps/details?id=com.realfincorp.spectrum.app" target="_blank" className="store-btn">
              <img src="/playstore.webp" alt="Get it on Google Play" className="store-img" />
            </Link>
            <Link href="https://apps.apple.com/in/app/investesy/id6744967804" target="_blank" className="store-btn">
              <img src="/appStore.webp" alt="Download on the App Store" className="store-img" />
            </Link>
          </div>
        </div>
        <div className="app-download-image-wrapper">
          <img src="/deviceWithApplication.png" alt="InvestEsy Mobile App" className="app-download-device" />
        </div>
      </div>
    </section>
  );
}
