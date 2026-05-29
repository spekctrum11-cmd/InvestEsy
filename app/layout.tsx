import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cointrix | AI-Powered Investing Made Simple",
  description: "Web3 Investment Landing Page with AI Assistant for smarter trading.",
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
      </body>
    </html>

  );
}
