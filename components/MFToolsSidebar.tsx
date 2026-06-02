"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const toolsLinks = [
  { label: "Past SIP Performance", href: "/past-sip-performance" },
  { label: "Latest NAV", href: "/latest-nav" },
  { label: "Current NFO", href: "/current-nfo" },
  { label: "Fund Factsheets", href: "/fund-factsheets" },
  { label: "Scheme Performance", href: "/scheme-performance" },
  { label: "Scheme Comparison", href: "/scheme-comparison" }
];

export default function MFToolsSidebar() {
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
          {toolsLinks.map((link, idx) => (
            <option key={idx} value={link.href}>
              {link.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Sidebar Navigation */}
      <div className="mf-sidebar-card">
        <h3 className="mf-sidebar-title">MF Tools</h3>
        <nav className="mf-sidebar-menu">
          {toolsLinks.map((link, idx) => {
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
