export default function Features() {
  const features = [
    { icon: "👥", title: "Gemeinsame Fahrten", text: "Wir organisieren Fahrten in kleinen Gruppen – entspannt und unkompliziert." },
    { icon: "📍", title: "Direkt zu den Clubs", text: "Wir begleiten euch direkt zu den Clubs und unterstützen euch beim Eintritt – kein Stress, keine Suche." },
    { icon: "💸", title: "5€ Rabatt pro Club", text: "In jedem teilnehmenden Club bekommt ihr automatisch 5€ Rabatt – exklusiv für CSC Shuttle Gäste." },
    { icon: "🗝️", title: "Einfacher Zugang", text: "Keine komplizierten Anfragen, keine unbekannten Adressen. CSC Shuttle macht alles für euch." },
  ];

  return (
    <section id="features" style={{ padding: "100px 24px", background: "#0a0a0a" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#6dc93c", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Warum CSC Shuttle?</p>
          <h2 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", margin: 0 }}>
            EINFACHER. SICHERER. ENTSPANNTER.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {features.map(({ icon, title, text }) => (
            <div key={title} style={{
              background: "#111", border: "1px solid #1f1f1f", borderRadius: 8, padding: 32,
              transition: "border-color 0.3s, transform 0.3s",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#6dc93c"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1f1f1f"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontFamily: "var(--font-oswald)", fontSize: "1.2rem", fontWeight: 600, color: "#fff", marginBottom: 12, letterSpacing: "0.05em" }}>{title}</h3>
              <p style={{ color: "#888", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 64, background: "#6dc93c", borderRadius: 8, padding: "32px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <p style={{ fontFamily: "var(--font-oswald)", fontSize: "1.4rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>EINFACHER, SICHERER UND ENTSPANNTER –</p>
            <p style={{ fontFamily: "var(--font-oswald)", fontSize: "1.4rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>BALD MIT CSC SHUTTLE.</p>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["✓ Verified Clubs Only", "🌍 Spain & Canary Islands", "🔑 Find Your Green Key"].map(t => (
              <span key={t} style={{ color: "#0a0a0a", fontWeight: 600, fontSize: "0.9rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
