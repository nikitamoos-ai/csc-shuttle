"use client";

export default function Tours({ onRegister }: { onRegister: () => void }) {
  const tours = [
    {
      side: "Rechte Seite", name: "Tagestour Ost", emoji: "🌅",
      description: "Entdeckt die besten CSCs auf der östlichen Seite der Insel. Komfortable Gruppenfahrt mit persönlicher Begleitung und garantiertem Eintritt.",
      highlights: ["Verified Clubs", "Persönliche Begleitung", "5€ Rabatt", "Kleine Gruppen"],
      comingSoon: false,
    },
    {
      side: "Linke Seite", name: "Tagestour West", emoji: "🌄",
      description: "Die westliche Route bringt euch zu exklusiven Cannabis Social Clubs. Entspannt, sicher und mit vollem Service.",
      highlights: ["Verified Clubs", "Persönliche Begleitung", "5€ Rabatt", "Kleine Gruppen"],
      comingSoon: true,
    },
  ];

  return (
    <section id="tours" style={{ padding: "100px 24px", background: "#080808" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#6dc93c", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Unsere Touren</p>
          <h2 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", margin: 0 }}>WÄHLE DEINE ROUTE</h2>
          <p style={{ color: "#888", marginTop: 16 }}>Zwei Touren, ein Ziel: der einfachste Weg zu den besten Clubs.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {tours.map((tour) => (
            <div key={tour.name} style={{
              background: "#111", border: `1px solid ${tour.comingSoon ? "#333" : "#6dc93c"}`,
              borderRadius: 12, overflow: "hidden", position: "relative",
            }}>
              {tour.comingSoon && (
                <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(109,201,60,0.15)", border: "1px solid #6dc93c", borderRadius: 100, padding: "4px 14px", color: "#6dc93c", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Coming Soon
                </div>
              )}
              <div style={{ background: tour.comingSoon ? "#161616" : "linear-gradient(135deg, #1a2a10, #0f1f08)", padding: "40px 32px 32px", borderBottom: "1px solid #222" }}>
                <span style={{ fontSize: "2.5rem" }}>{tour.emoji}</span>
                <p style={{ color: "#6dc93c", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 16, marginBottom: 8 }}>{tour.side}</p>
                <h3 style={{ fontFamily: "var(--font-oswald)", fontSize: "2rem", fontWeight: 700, color: "#fff", margin: 0 }}>{tour.name}</h3>
                <p style={{ color: "#888", fontSize: "0.85rem", marginTop: 8, marginBottom: 0 }}>⏱ Ganztägig</p>
              </div>
              <div style={{ padding: 32 }}>
                <p style={{ color: "#bbb", lineHeight: 1.7, marginBottom: 24 }}>{tour.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {tour.highlights.map(h => (
                    <div key={h} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#6dc93c" }}>✓</span>
                      <span style={{ color: "#ccc", fontSize: "0.95rem" }}>{h}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#1a1a1a", borderRadius: 8, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                  <span style={{ color: "#888", fontSize: "0.85rem" }}>Preis ab</span>
                  <span style={{ color: "#6dc93c", fontFamily: "var(--font-oswald)", fontSize: "1.3rem", fontWeight: 700 }}>Folgt bald</span>
                </div>
                <button className={tour.comingSoon ? "btn-outline" : "btn-primary"} onClick={onRegister} style={{ width: "100%", textAlign: "center" }}>
                  {tour.comingSoon ? "Benachrichtigung erhalten" : "Platz reservieren"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "#555", marginTop: 32, fontSize: "0.85rem" }}>
          * Preise folgen in Kürze. Jetzt kostenlos registrieren und als Erster informiert werden.
        </p>
      </div>
    </section>
  );
}
