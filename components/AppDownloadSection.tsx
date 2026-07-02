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
              <Image src="/playstore.png" alt="Get it on Google Play" width={165} height={46} className="store-img" />
            </Link>
            <Link href="https://apps.apple.com/in/app/investesy/id6744967804" target="_blank" className="store-btn">
              <Image src="/appStore.png" alt="Download on the App Store" width={165} height={46} className="store-img" />
            </Link>
          </div>
        </div>
        <div className="app-download-image-wrapper">
          <div className="phone-container">
            <Image src="/deviceWithApplication.png" alt="InvestEsy Mobile App" width={350} height={400} className="app-download-device" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
