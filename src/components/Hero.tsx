"use client";

export default function Hero({ onRegister }: { onRegister: () => void }) {
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0a 0%, #0d1a06 50%, #0a0a0a 100%)",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 70% 50%, rgba(109,201,60,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(109,201,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,201,60,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px", pointerEvents: "none",
      }}/>

      <div className="container" style={{ padding: "120px 24px 80px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(109,201,60,0.1)", border: "1px solid rgba(109,201,60,0.3)",
              borderRadius: 100, padding: "6px 16px", marginBottom: 32,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6dc93c", display: "inline-block", animation: "pulse 2s infinite" }}/>
              <span style={{ color: "#6dc93c", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Coming Soon</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 700, lineHeight: 0.9, marginBottom: 24, letterSpacing: "0.02em" }}>
              <span style={{ display: "block", color: "#fff" }}>CSC</span>
              <span style={{ display: "block", color: "#6dc93c" }}>SHUTTLE</span>
            </h1>

            <p style={{ fontFamily: "var(--font-oswald)", fontSize: "1.1rem", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase", marginBottom: 24 }}>
              Find Your Green Way
            </p>

            <p style={{ color: "#ccc", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
              CSC Shuttle macht den Zugang zu den Clubs in Spanien <span style={{ color: "#6dc93c", fontWeight: 600 }}>einfacher.</span> Keine stundenlange Suche, keine komplizierten Anfragen, kein Stress.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={onRegister} style={{ fontSize: "1rem", padding: "16px 36px" }}>
                🚌 Jetzt Anmelden
              </button>
              <a href="#tours" className="btn-outline">Touren ansehen</a>
            </div>

            <div style={{ display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap" }}>
              {["✓ Verified Clubs Only", "🌍 Spanien & Kanarische Inseln", "💚 5€ Rabatt pro Club"].map(t => (
                <span key={t} style={{ color: "#777", fontSize: "0.85rem" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "100%", maxWidth: 460, aspectRatio: "4/3",
              background: "linear-gradient(135deg, #111 0%, #1a2a10 100%)",
              borderRadius: 12, border: "1px solid rgba(109,201,60,0.3)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(109,201,60,0.1)", filter: "blur(60px)", top: "20%", left: "25%" }}/>
              <svg viewBox="0 0 280 160" style={{ width: "85%", position: "relative", zIndex: 1 }}>
                <rect x="20" y="55" width="220" height="80" rx="8" fill="#1a1a1a" stroke="#6dc93c" strokeWidth="1.5"/>
                <path d="M160 55 L200 30 L240 30 L240 55Z" fill="#222" stroke="#6dc93c" strokeWidth="1.5"/>
                <path d="M165 55 L198 33 L232 33 L232 55Z" fill="rgba(109,201,60,0.12)" stroke="#6dc93c" strokeWidth="1"/>
                <circle cx="70" cy="138" r="20" fill="#111" stroke="#6dc93c" strokeWidth="2"/>
                <circle cx="70" cy="138" r="9" fill="#1a1a1a" stroke="#555" strokeWidth="1"/>
                <circle cx="200" cy="138" r="20" fill="#111" stroke="#6dc93c" strokeWidth="2"/>
                <circle cx="200" cy="138" r="9" fill="#1a1a1a" stroke="#555" strokeWidth="1"/>
                <text x="90" y="100" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#6dc93c" textAnchor="middle">CSC SHUTTLE</text>
                <rect x="236" y="42" width="12" height="8" rx="2" fill="#ffea70" opacity="0.8"/>
                <line x1="145" y1="60" x2="145" y2="130" stroke="#333" strokeWidth="1.5"/>
                <rect x="25" y="62" width="55" height="32" rx="4" fill="rgba(109,201,60,0.06)" stroke="#333" strokeWidth="1"/>
                <rect x="90" y="62" width="50" height="32" rx="4" fill="rgba(109,201,60,0.06)" stroke="#333" strokeWidth="1"/>
              </svg>
              <div style={{ color: "#6dc93c", fontFamily: "var(--font-oswald)", fontSize: "0.9rem", letterSpacing: "0.15em", marginTop: 16, position: "relative", zIndex: 1 }}>
                FIND YOUR GREEN WAY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
