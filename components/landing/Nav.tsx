"use client";

import { useEffect, useState } from "react";
import { EHLogo } from "@/components/icons";

const links = [
  { label: "Le produit",    href: "#comment" },
  { label: "Charge mentale", href: "#mental" },
  { label: "Tarifs",        href: "#pricing" },
  { label: "Manifeste",     href: "#footer" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      borderBottom: "1px solid var(--eh-line)",
      transition: "background .25s, backdrop-filter .25s",
      background: scrolled || menuOpen ? "rgba(250,247,242,0.97)" : "var(--eh-bg)",
      backdropFilter: scrolled ? "blur(12px)" : "none",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 80px",
        maxWidth: 1440, margin: "0 auto",
      }} className="nav-inner">
        <EHLogo size={22} />

        <nav style={{ display: "flex", alignItems: "center", gap: 36, fontSize: 14, color: "var(--eh-ink)" }}
          className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.8")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="#" style={{ color: "var(--eh-ink-2)", textDecoration: "none", fontSize: 14 }}
            className="nav-login">
            Se connecter
          </a>
          <a href="#cta" className="nav-cta" style={{
            padding: "10px 18px", borderRadius: 999,
            background: "var(--eh-ink)", color: "var(--eh-bg)",
            fontSize: 13.5, fontWeight: 500, textDecoration: "none",
            display: "inline-flex",
          }}>
            Télécharger l&apos;app
          </a>

          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", padding: 6, borderRadius: 8,
              color: "var(--eh-ink)", lineHeight: 0,
            }}
            className="nav-hamburger"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="17" y1="5" x2="5" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="4" y1="8"  x2="18" y2="8"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="4" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          borderTop: "1px solid var(--eh-line)",
          background: "rgba(250,247,242,0.97)",
          padding: "8px 24px 24px",
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "var(--eh-ink)", textDecoration: "none",
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: 22, letterSpacing: "-0.015em",
                padding: "14px 0",
                borderBottom: "1px solid var(--eh-line)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block", marginTop: 16,
              color: "var(--eh-ink-2)", textDecoration: "none", fontSize: 14,
            }}
          >
            Se connecter
          </a>
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex", marginTop: 20,
              padding: "14px 24px", borderRadius: 999,
              background: "var(--eh-ink)", color: "var(--eh-bg)",
              fontSize: 15, fontWeight: 500, textDecoration: "none",
            }}
          >
            Télécharger l&apos;app
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-inner { padding: 18px 40px !important; }
          .nav-links { display: none !important; }
          .nav-login { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 768px) {
          .nav-inner { padding: 16px 24px !important; }
        }
        @media (max-width: 560px) {
          .nav-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}
