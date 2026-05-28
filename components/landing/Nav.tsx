"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { EHLogo } from "@/components/icons";

interface NavDict {
  product: string;
  mental: string;
  pricing: string;
  manifesto: string;
  login: string;
  download: string;
  switch_lang: string;
}

interface NavProps {
  lang: string;
  dict: NavDict;
}

export function Nav({ lang, dict }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: dict.product,   href: `/${lang}/#comment` },
    { label: dict.mental,    href: `/${lang}/#mental` },
    { label: dict.pricing,   href: `/${lang}/#pricing` },
    { label: dict.manifesto, href: `/${lang}/#footer` },
  ];

  const otherLang = lang === "fr" ? "en" : "fr";
  const langSwitchHref = pathname.replace(new RegExp(`^/${lang}`), `/${otherLang}`) || `/${otherLang}`;

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

  function switchLang() {
    document.cookie = `NEXT_LOCALE=${otherLang}; path=/; max-age=31536000; SameSite=Lax`;
  }

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
        <a href={`/${lang}`} style={{ textDecoration: "none" }}>
          <EHLogo size={22} />
        </a>

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
          <a
            href={langSwitchHref}
            onClick={switchLang}
            style={{
              fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
              fontSize: 11, letterSpacing: "0.14em",
              color: "var(--eh-ink-2)", textDecoration: "none",
              padding: "6px 10px", borderRadius: 6,
              border: "1px solid var(--eh-line-strong)",
              transition: "color .15s, border-color .15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--eh-ink)"; e.currentTarget.style.borderColor = "var(--eh-ink-2)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--eh-ink-2)"; e.currentTarget.style.borderColor = "var(--eh-line-strong)"; }}
          >
            {dict.switch_lang}
          </a>
          <a href="#" style={{ color: "var(--eh-ink-2)", textDecoration: "none", fontSize: 14 }}
            className="nav-login">
            {dict.login}
          </a>
          <a href={`/${lang}/#cta`} className="nav-cta" style={{
            padding: "10px 18px", borderRadius: 999,
            background: "var(--eh-ink)", color: "var(--eh-bg)",
            fontSize: 13.5, fontWeight: 500, textDecoration: "none",
            display: "inline-flex",
          }}>
            {dict.download}
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--eh-ink-2)", textDecoration: "none", fontSize: 14 }}
            >
              {dict.login}
            </a>
            <a
              href={langSwitchHref}
              onClick={switchLang}
              style={{
                fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
                fontSize: 11, letterSpacing: "0.14em",
                color: "var(--eh-ink-2)", textDecoration: "none",
                padding: "6px 10px", borderRadius: 6,
                border: "1px solid var(--eh-line-strong)",
              }}
            >
              {dict.switch_lang}
            </a>
          </div>
          <a
            href={`/${lang}/#cta`}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex", marginTop: 20,
              padding: "14px 24px", borderRadius: 999,
              background: "var(--eh-ink)", color: "var(--eh-bg)",
              fontSize: 15, fontWeight: 500, textDecoration: "none",
            }}
          >
            {dict.download}
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
