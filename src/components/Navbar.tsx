"use client";
import { useState, useEffect } from "react";

export default function Navbar({ onRegister }: { onRegister: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [["#features", "Features"], ["#tours", "Touren"], ["#coffeeshops", "Partner"], ["#preise", "Preise"]];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "16px 24px",
      background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
      borderBottom: scrolled ? "1px solid #1f1f1f" : "none",
      transition: "all 0.3s",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
          <path d="M14 2C8.477 2 4 6.477 4 12c0 7 10 16 10 16s10-9 10-16c0-5.523-4.477-10-10-10z" fill="#6dc93c"/>
          <circle cx="14" cy="12" r="4" fill="#0a0a0a"/>
        </svg>
        <span style={{ fontFamily: "var(--font-oswald)", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "0.08em", color: "#fff" }}>
          CSC <span style={{ color: "#6dc93c" }}>SHUTTLE</span>
        </span>
      </a>

      {/* Desktop */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map(([href, label]) => (
          <a key={href} href={href} style={{ color: "#ccc", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</a>
        ))}
        <button className="btn-primary" onClick={onRegister} style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
          Jetzt Anmelden
        </button>
      </div>

      {menuOpen && (
        <div style={{ position: "fixed", top: 60, left: 0, right: 0, background: "#0a0a0a", borderBottom: "1px solid #333", padding: "24px", display: "flex", flexDirection: "column", gap: 24, zIndex: 99 }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: "1.1rem", textTransform: "uppercase" }}>{label}</a>
          ))}
          <button className="btn-primary" onClick={() => { setMenuOpen(false); onRegister(); }}>Jetzt Anmelden</button>
        </div>
      )}
    </nav>
  );
}
