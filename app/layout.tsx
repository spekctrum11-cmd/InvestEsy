import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{children}</body>
    </html>

  );
}
