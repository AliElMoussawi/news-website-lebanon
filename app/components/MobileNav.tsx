"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Overlay */}
      <div className={`mobile-overlay ${open ? "show" : ""}`}>
        <nav className="mobile-menu">
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <Link href="/" onClick={() => setOpen(false)}>الرئيسية</Link>
          <Link href="/politics" onClick={() => setOpen(false)}>سياسة</Link>
          <Link href="/economy" onClick={() => setOpen(false)}>اقتصاد</Link>
          <Link href="/sports" onClick={() => setOpen(false)}>رياضة</Link>
          <Link href="/tech" onClick={() => setOpen(false)}>تقنية</Link>
          <Link href="/world" onClick={() => setOpen(false)}>عالم</Link>
        </nav>
      </div>
    </>
  );
}
