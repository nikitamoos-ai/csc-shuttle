"use client";

export default function Preise({ onRegister }: { onRegister: () => void }) {
  return (
    <section id="preise" style={{ padding: "100px 24px", background: "#080808" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#6dc93c", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Preise</p>
          <h2 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", margin: 0 }}>TRANSPARENTE PREISE</h2>
        </div>

        <div style={{ maxWidth: 600, margin: "0 auto", background: "linear-gradient(135deg, #111, #1a2a10)", border: "2px dashed rgba(109,201,60,0.3)", borderRadius: 12, padding: "60px 40px", textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: 24 }}>💰</div>
          <h3 style={{ fontFamily: "var(--font-oswald)", fontSize: "1.8rem", color: "#fff", marginBottom: 16, marginTop: 0 }}>Preise folgen in Kürze</h3>
          <p style={{ color: "#888", lineHeight: 1.7, marginBottom: 32, marginTop: 0 }}>
            Registriere dich jetzt kostenlos und werde als Erster benachrichtigt – inklusive Early-Bird-Angebot.
          </p>

          <div style={{ marginBottom: 32 }}>
            <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>Bald verfügbar: Sichere Zahlung via</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {["💳 Kreditkarte", "🅺 Klarna", "🍎 Apple Pay", "🏦 Überweisung"].map(label => (
                <div key={label} style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: 6, padding: "10px 20px", color: "#ccc", fontSize: "0.9rem", fontWeight: 600 }}>{label}</div>
              ))}
            </div>
          </div>

          <button className="btn-primary" onClick={onRegister}>Jetzt registrieren & informiert werden</button>
        </div>
      </div>
    </section>
  );
}
