"use client";
import { useState } from "react";

export default function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", handy: "", ausweis: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "1.8rem", lineHeight: 1 }}>×</button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
            <h3 style={{ fontFamily: "var(--font-oswald)", fontSize: "1.8rem", color: "#6dc93c", marginTop: 0, marginBottom: 12 }}>Anmeldung erfolgreich!</h3>
            <p style={{ color: "#888", lineHeight: 1.7, marginTop: 0 }}>Wir melden uns sobald die ersten Touren verfügbar sind. Du wirst als Erster benachrichtigt!</p>
            <button className="btn-primary" onClick={onClose} style={{ marginTop: 24 }}>Schließen</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontSize: "1.8rem", color: "#fff", marginBottom: 8, marginTop: 0 }}>JETZT ANMELDEN</h2>
              <p style={{ color: "#888", fontSize: "0.9rem", margin: 0 }}>Registriere dich und sichere deinen Platz auf der nächsten Tour.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div className="form-group">
                  <label>Vorname</label>
                  <input type="text" placeholder="Max" value={form.vorname} onChange={e => setForm({ ...form, vorname: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Nachname *</label>
                  <input type="text" placeholder="Mustermann" required value={form.nachname} onChange={e => setForm({ ...form, nachname: e.target.value })} />
                </div>
              </div>

              <div className="form-group">
                <label>E-Mail-Adresse *</label>
                <input type="email" placeholder="max@example.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>

              <div className="form-group">
                <label>Handynummer <span style={{ color: "#555", textTransform: "none" }}>(optional)</span></label>
                <input type="tel" placeholder="+49 123 456789" value={form.handy} onChange={e => setForm({ ...form, handy: e.target.value })} />
              </div>

              <div className="form-group">
                <label>Ausweisnummer <span style={{ color: "#555", textTransform: "none" }}>(optional – beschleunigt den Prozess)</span></label>
                <input type="text" placeholder="z.B. T220001293" value={form.ausweis} onChange={e => setForm({ ...form, ausweis: e.target.value })} />
              </div>

              <p style={{ color: "#555", fontSize: "0.8rem", marginBottom: 24, lineHeight: 1.5 }}>
                * Pflichtfelder. Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>

              <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: "1rem", padding: 16, opacity: loading ? 0.7 : 1 }} disabled={loading}>
                {loading ? "Wird gesendet..." : "Anmeldung absenden 🚌"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
