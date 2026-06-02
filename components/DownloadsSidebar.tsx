"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const downloadLinks = [
  { label: "MF Forms", href: "/mf-forms" },
  { label: "KYC/ FATCA Forms", href: "/kyc-fatca-forms" }
];

export default function DownloadsSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Mobile Dropdown Navigation */}
      <div className="mf-mobile-dropdown-wrapper">
        <select
          className="mf-mobile-select"
          value={pathname}
          onChange={(e) => router.push(e.target.value)}
        >
          {downloadLinks.map((link, idx) => (
            <option key={idx} value={link.href}>
              {link.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Sidebar Navigation */}
      <div className="mf-sidebar-card">
        <h3 className="mf-sidebar-title">Downloads</h3>
        <nav className="mf-sidebar-menu">
          {downloadLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={idx}
                href={link.href}
                className={`mf-sidebar-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
