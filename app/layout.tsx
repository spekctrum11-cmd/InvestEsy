import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvestEsy | Investing Made Simple",
  description: "Web3 Investment Landing Page with AI Assistant for smarter trading.",
  icons: {
    icon: "/favicon.png",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {children}
        <Footer />
        <a 
          href="https://wa.me/917669016565" 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with us on WhatsApp"
        >
          <img src="/floating-Whatsapp.png" alt="WhatsApp" />
        </a>
      </body>
    </html>

  );
}
