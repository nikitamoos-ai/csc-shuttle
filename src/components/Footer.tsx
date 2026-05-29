export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #1f1f1f", padding: "60px 24px 32px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <path d="M14 2C8.477 2 4 6.477 4 12c0 7 10 16 10 16s10-9 10-16c0-5.523-4.477-10-10-10z" fill="#6dc93c"/>
                <circle cx="14" cy="12" r="4" fill="#050505"/>
              </svg>
              <span style={{ fontFamily: "var(--font-oswald)", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.08em", color: "#fff" }}>
                CSC <span style={{ color: "#6dc93c" }}>SHUTTLE</span>
              </span>
            </div>
            <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.9rem", maxWidth: 280, marginTop: 0 }}>
              Find Your Green Way. Der einfachste Weg zu den besten Cannabis Social Clubs in Spanien und auf den Kanarischen Inseln.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-oswald)", color: "#fff", letterSpacing: "0.1em", marginTop: 0, marginBottom: 20 }}>NAVIGATION</h4>
            {[["#features", "Features"], ["#tours", "Touren"], ["#coffeeshops", "Partner Clubs"], ["#preise", "Preise"]].map(([href, label]) => (
              <a key={href} href={href} style={{ display: "block", color: "#666", textDecoration: "none", marginBottom: 12, fontSize: "0.9rem" }}>{label}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-oswald)", color: "#fff", letterSpacing: "0.1em", marginTop: 0, marginBottom: 20 }}>RECHTLICHES</h4>
            {["Impressum", "Datenschutz", "AGB"].map(label => (
              <a key={label} href="#" style={{ display: "block", color: "#666", textDecoration: "none", marginBottom: 12, fontSize: "0.9rem" }}>{label}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "#444", fontSize: "0.8rem", margin: 0 }}>© 2026 CSC Shuttle. Alle Rechte vorbehalten.</p>
          <p style={{ color: "#444", fontSize: "0.8rem", margin: 0 }}>Supporting CSCs across Spain & The Canary Islands</p>
        </div>
      </div>
    </footer>
  );
}
