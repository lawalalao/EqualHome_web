"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BalanceScore, CategoryBars } from "@/components/balance";
import { EH_CAT, Ico } from "@/components/icons";

interface HeroDict {
  eyebrow: string;
  h1_1: string;
  h1_em: string;
  h1_2: string;
  body_1: string;
  body_em: string;
  body_2: string;
  cta_primary: string;
  cta_secondary: string;
  badge: string;
  beta: string;
  flags: string;
  balance_label: string;
  name_a: string;
  name_b: string;
  cat_meals: string;
  cat_cleaning: string;
  cat_kids: string;
}

const AVATAR_COLORS = ["#2D5F4E", "#D4785C", "#E8C4A0", "#7B6CB3", "#5E7B86"];

function fadeRiseProps(inView: boolean, delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  };
}

export function Hero({ dict }: { dict: HeroDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  const HERO_ROWS = [
    { ...EH_CAT[0], name: dict.cat_meals,    a: 38, b: 62 },
    { ...EH_CAT[1], name: dict.cat_cleaning, a: 55, b: 45 },
    { ...EH_CAT[2], name: dict.cat_kids,     a: 70, b: 30 },
  ];

  return (
    <section ref={ref} style={{ position: "relative", padding: "100px 80px 80px", maxWidth: 1440, margin: "0 auto" }}
      className="hero-section">
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}
        className="hero-grid">

        {/* Left copy */}
        <div>
          <motion.div
            className="eh-eyebrow"
            style={{ color: "var(--eh-primary)", marginBottom: 18 }}
            {...fadeRiseProps(inView, 0)}
          >
            {dict.eyebrow}
          </motion.div>

          <motion.h1
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(56px, 6.7vw, 96px)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              color: "var(--eh-ink)",
            }}
            {...fadeRiseProps(inView, 0.05)}
          >
            {dict.h1_1}<em style={{ fontStyle: "italic", fontWeight: 400 }}>{dict.h1_em}</em><br />
            {dict.h1_2}
          </motion.h1>

          <motion.p
            style={{ marginTop: 30, fontSize: 19, color: "var(--eh-ink-2)", lineHeight: 1.5, maxWidth: 520 }}
            {...fadeRiseProps(inView, 0.1)}
          >
            {dict.body_1} <em>{dict.body_em}</em> {dict.body_2}
          </motion.p>

          <motion.div
            style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
            {...fadeRiseProps(inView, 0.15)}
          >
            <a href="#cta" style={{
              padding: "18px 28px", borderRadius: 14,
              background: "var(--eh-primary)", color: "var(--eh-bg)",
              textDecoration: "none", fontWeight: 500, fontSize: 16,
              display: "inline-flex", alignItems: "center", gap: 12,
              boxShadow: "0 8px 22px rgba(45,95,78,0.22)",
              transition: "transform .2s, box-shadow .2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(45,95,78,0.28)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 22px rgba(45,95,78,0.22)";
              }}
            >
              {dict.cta_primary} <Ico name="arrow" size={18} stroke="currentColor" sw={2} />
            </a>
            <a href="#comment" style={{
              padding: "18px 28px", borderRadius: 14,
              background: "transparent", color: "var(--eh-ink)",
              border: "1px solid var(--eh-line-strong)",
              fontWeight: 500, fontSize: 16,
              textDecoration: "none", display: "inline-flex",
            }}>
              {dict.cta_secondary}
            </a>
            <span style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 13, color: "var(--eh-ink-2)" }}>
              {dict.badge}
            </span>
          </motion.div>

          <motion.div
            style={{ marginTop: 52, display: "flex", alignItems: "center", gap: 28 }}
            {...fadeRiseProps(inView, 0.2)}
          >
            <div style={{ display: "flex" }}>
              {AVATAR_COLORS.map((c, i) => (
                <div key={i} style={{
                  width: 30, height: 30, borderRadius: "50%", background: c,
                  border: "2px solid var(--eh-bg)", marginLeft: i ? -10 : 0,
                }} />
              ))}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{dict.beta}</div>
              <div style={{ fontSize: 12.5, color: "var(--eh-ink-2)" }}>{dict.flags}</div>
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          style={{ position: "relative", height: 720, display: "flex", alignItems: "center", justifyContent: "center" }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="hero-visual"
        >
          <div style={{
            position: "absolute", width: 520, height: 520, borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, var(--eh-secondary-soft), transparent 65%)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle at 70% 70%, rgba(212,120,92,0.25), transparent 65%)",
            top: "52%", left: "52%", transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }} />

          <div className="hero-card" style={{
            position: "relative",
            background: "var(--eh-bg)",
            borderRadius: 36, padding: "48px 40px",
            border: "1px solid var(--eh-line)",
            boxShadow: "0 30px 80px rgba(40,30,20,0.18)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 28,
            width: 460,
          }}>
            <div className="eh-eyebrow" style={{ color: "var(--eh-primary)" }}>{dict.balance_label}</div>
            <BalanceScore scoreA={52} size={300} animate nameA={dict.name_a} nameB={dict.name_b} />
            <div style={{ marginTop: 32, alignSelf: "stretch" }}>
              <CategoryBars compact rows={HERO_ROWS} />
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-section { padding: 60px 40px 60px !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-visual { height: 480px !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 48px 24px 48px !important; }
          .hero-visual { height: auto !important; padding: 24px 0 !important; }
          .hero-card { width: min(460px, calc(100vw - 48px)) !important; padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}
