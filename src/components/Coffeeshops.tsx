export default function Coffeeshops() {
  const shops = [
    { name: "Partner Club 1", location: "Lanzarote" },
    { name: "Partner Club 2", location: "Tenerife" },
    { name: "Partner Club 3", location: "Gran Canaria" },
    { name: "Partner Club 4", location: "Barcelona" },
    { name: "Partner Club 5", location: "Madrid" },
    { name: "Weitere Partner", location: "Spanien & Kanarische Inseln" },
  ];

  return (
    <section id="coffeeshops" style={{ padding: "100px 24px", background: "#0a0a0a" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#6dc93c", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Unsere Partner</p>
          <h2 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", margin: 0 }}>VERIFIED PARTNER CLUBS</h2>
          <p style={{ color: "#888", marginTop: 16, maxWidth: 540, margin: "16px auto 0" }}>
            Wir arbeiten nur mit geprüften und verifizierten Cannabis Social Clubs zusammen.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
          {shops.map(({ name, location }) => (
            <div key={name} style={{
              background: "#111", border: "1px solid #1f1f1f", borderRadius: 8, padding: "28px 24px", textAlign: "center",
              transition: "border-color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#6dc93c"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#1f1f1f"}
            >
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(109,201,60,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "1.4rem" }}>🌿</div>
              <h4 style={{ fontFamily: "var(--font-oswald)", fontSize: "1rem", color: "#fff", marginBottom: 6, marginTop: 0 }}>{name}</h4>
              <p style={{ color: "#666", fontSize: "0.8rem", marginBottom: 12, marginTop: 0 }}>{location}</p>
              <span style={{ background: "rgba(109,201,60,0.15)", color: "#6dc93c", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100 }}>✓ Verified</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center", padding: 32, background: "#111", border: "1px solid #1f1f1f", borderRadius: 8 }}>
          <p style={{ color: "#888", marginBottom: 8, marginTop: 0 }}>🤝 Du bist ein Cannabis Social Club und möchtest Partner werden?</p>
          <p style={{ color: "#6dc93c", fontWeight: 600, margin: 0 }}>Kontaktiere uns – wir freuen uns auf die Zusammenarbeit.</p>
        </div>
      </div>
    </section>
  );
}
