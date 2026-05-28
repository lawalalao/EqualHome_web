import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface NavDict {
  product: string;
  mental: string;
  pricing: string;
  manifesto: string;
  login: string;
  download: string;
  switch_lang: string;
}
interface FooterLink { label: string; href: string; }
interface FooterCol { title: string; links: FooterLink[]; }
interface FooterDict {
  cols: FooterCol[];
  tagline: string;
  copy: string;
  made: string;
}

interface LegalLayoutProps {
  lang: string;
  navDict: NavDict;
  footerDict: FooterDict;
  updatedPrefix: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalLayout({ lang, navDict, footerDict, updatedPrefix, title, updated, children }: LegalLayoutProps) {
  return (
    <div style={{ background: "var(--eh-bg)", minHeight: "100vh", overflowX: "hidden" }}>
      <Nav lang={lang} dict={navDict} />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px 120px" }}>
        <p className="eh-eyebrow" style={{ marginBottom: 16, color: "var(--eh-ink-3)" }}>
          {updatedPrefix} {updated}
        </p>
        <h1 style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 300,
          fontSize: "clamp(36px, 4.5vw, 56px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: "0 0 56px",
          color: "var(--eh-ink)",
        }}>
          {title}
        </h1>
        <div className="legal-content">
          {children}
        </div>
      </main>
      <Footer lang={lang} dict={footerDict} />
      <style>{`
        .legal-content h2 {
          font-family: var(--font-fraunces), Georgia, serif !important;
          font-weight: 400 !important;
          font-size: 26px !important;
          letter-spacing: -0.018em !important;
          line-height: 1.15 !important;
          margin: 52px 0 14px !important;
          color: var(--eh-ink) !important;
        }
        .legal-content h3 {
          font-family: var(--font-dm-sans), system-ui, sans-serif !important;
          font-weight: 600 !important;
          font-size: 11px !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          margin: 32px 0 10px !important;
          color: var(--eh-ink-2) !important;
        }
      `}</style>
    </div>
  );
}
