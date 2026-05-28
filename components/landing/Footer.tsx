"use client";

import { EHLogo } from "@/components/icons";

const COLS = [
  { title: "PRODUIT",    links: ["Comment ça marche", "Charge mentale", "Tarifs", "iOS", "Android"] },
  { title: "EQUALHOME", links: ["Manifeste", "Recherche", "Presse", "Newsletter"] },
  { title: "LÉGAL",     links: ["Confidentialité", "CGU", "Cookies", "Contact"] },
];

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        padding: "60px 80px 40px",
        borderTop: "1px solid var(--eh-line)",
        background: "var(--eh-bg)",
        width: "100%",
      }}
      className="footer-section"
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 60, alignItems: "flex-start" }}
          className="footer-grid">
          <div>
            <EHLogo size={20} />
            <p style={{ marginTop: 16, fontSize: 13.5, color: "var(--eh-ink-2)", lineHeight: 1.5, maxWidth: 320 }}>
              EqualHome rend visible la charge mentale du foyer — pour la partager vraiment.
            </p>
          </div>
          {COLS.map(({ title, links }) => (
            <div key={title}>
              <div className="eh-eyebrow" style={{ marginBottom: 14 }}>{title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => (
                  <a key={l} href="#" style={{ color: "var(--eh-ink)", fontSize: 13.5, textDecoration: "none", opacity: 0.75 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 60, paddingTop: 24,
          borderTop: "1px solid var(--eh-line)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{
            fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
            fontSize: 11, letterSpacing: "0.12em", color: "var(--eh-ink-2)",
          }}>
            © 2026 EQUALHOME · DIGITALL ELEVATE
          </span>
          <span style={{
            fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
            fontSize: 11, letterSpacing: "0.12em", color: "var(--eh-ink-2)",
          }}>
            FAIT EN FRANCE · POUR LE MONDE
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-section { padding: 48px 40px 32px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .footer-section { padding: 40px 24px 28px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
