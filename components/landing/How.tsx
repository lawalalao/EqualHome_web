"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BalanceScore, CategoryBars } from "@/components/balance";
import { EH_CAT, Ico } from "@/components/icons";

interface HowDict {
  eyebrow: string;
  h2_em: string;
  h2_1: string;
  h2_2: string;
  steps: Array<{ num: string; title: string; desc: string }>;
  step1_header: string;
  step1_subtitle: string;
  step1_name1: string;
  step1_name2: string;
  step1_cta: string;
  step2_header: string;
  step2_items: string[];
  step2_toggle: string;
  step2_cta: string;
  step3_label: string;
  cat_meals: string;
  cat_cleaning: string;
  cat_kids: string;
}

function MiniPhone({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 230, height: 360, borderRadius: 28, overflow: "hidden",
      background: "var(--eh-bg)", border: "1px solid var(--eh-line)",
      boxShadow: "0 20px 50px rgba(40,30,20,0.16)",
      position: "relative",
    }}>
      {children}
    </div>
  );
}

function MiniOnboarding({ dict }: { dict: HowDict }) {
  return (
    <div style={{ padding: "34px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="eh-eyebrow" style={{ color: "var(--eh-primary)", fontSize: 9 }}>{dict.step1_header}</div>
      <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: 20, letterSpacing: "-0.018em", lineHeight: 1.1 }}>
        <em>{dict.step1_subtitle}</em>
      </div>
      {[dict.step1_name1, dict.step1_name2].map((name, i) => (
        <div key={name} style={{
          padding: "10px 12px", background: "var(--eh-surface)",
          borderRadius: 10, border: "1px solid var(--eh-line-strong)",
          display: "flex", gap: 8, alignItems: "center",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "var(--eh-primary)" : "var(--eh-accent)" }} />
          <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: 14 }}>{name}</span>
        </div>
      ))}
      <div style={{ flex: 1 }} />
      <div style={{
        padding: "10px 0", background: "var(--eh-primary)", color: "#fff",
        borderRadius: 10, textAlign: "center", fontSize: 12, fontWeight: 500,
      }}>
        {dict.step1_cta}
      </div>
    </div>
  );
}

function MiniQuickLog({ dict }: { dict: HowDict }) {
  return (
    <div style={{ padding: "34px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: 18, letterSpacing: "-0.018em" }}>{dict.step2_header}</div>
      {dict.step2_items.map((item) => {
        const [g, ...rest] = item.split(" ");
        const t = rest.join(" ");
        return (
          <div key={item} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 10px", background: "var(--eh-surface)",
            border: "1px solid var(--eh-line)", borderRadius: 10,
          }}>
            <span style={{ fontSize: 14 }}>{g}</span>
            <span style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 11.5, fontWeight: 500, flex: 1 }}>{t}</span>
          </div>
        );
      })}
      <div style={{
        padding: "8px 10px",
        background: "rgba(212,120,92,0.10)", border: "1px solid rgba(212,120,92,0.4)",
        borderRadius: 10, display: "flex", alignItems: "center", gap: 8,
      }}>
        <Ico name="spark" size={14} stroke="var(--eh-accent)" />
        <span style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 10, fontWeight: 500 }}>{dict.step2_toggle}</span>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{
        padding: "10px 0", background: "var(--eh-primary)", color: "#fff",
        borderRadius: 10, textAlign: "center", fontSize: 12, fontWeight: 500,
      }}>
        {dict.step2_cta}
      </div>
    </div>
  );
}

function MiniBalance({ dict }: { dict: HowDict }) {
  const rows = [
    { ...EH_CAT[0], name: dict.cat_meals,    a: 38, b: 62 },
    { ...EH_CAT[1], name: dict.cat_cleaning, a: 55, b: 45 },
    { ...EH_CAT[2], name: dict.cat_kids,     a: 70, b: 30 },
  ];
  return (
    <div style={{ padding: "34px 18px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
      <div className="eh-eyebrow" style={{ color: "var(--eh-primary)", fontSize: 9 }}>{dict.step3_label}</div>
      <BalanceScore scoreA={52} size={150} showLegend={false} caption={false} />
      <div style={{ alignSelf: "stretch", marginTop: 18 }}>
        <CategoryBars compact rows={rows} />
      </div>
    </div>
  );
}

export function How({ dict }: { dict: HowDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const PHONES = [
    () => <MiniOnboarding dict={dict} />,
    () => <MiniQuickLog dict={dict} />,
    () => <MiniBalance dict={dict} />,
  ];

  return (
    <section ref={ref} id="comment" style={{ padding: "140px 80px", maxWidth: 1440, margin: "0 auto" }}
      className="how-section">
      <motion.div
        style={{ maxWidth: 760, marginBottom: 80 }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="eh-eyebrow" style={{ marginBottom: 14 }}>{dict.eyebrow}</div>
        <h2 style={{
          margin: 0,
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(40px, 4.5vw, 64px)",
          letterSpacing: "-0.03em", lineHeight: 1.02,
        }}>
          {dict.h2_1} <em style={{ fontStyle: "italic" }}>{dict.h2_em}</em>.<br />
          {dict.h2_2}
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}
        className="how-grid">
        {dict.steps.map(({ num, title, desc }, i) => {
          const Phone = PHONES[i];
          return (
            <motion.div key={num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div style={{
                height: 420, borderRadius: 28, padding: 28,
                background: "var(--eh-bg-deep)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <MiniPhone><Phone /></MiniPhone>
              </div>
              <div style={{ marginTop: 24, display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{
                  fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
                  fontSize: 12, letterSpacing: "0.14em", color: "var(--eh-accent)",
                }}>{num}</span>
                <h3 style={{
                  margin: 0,
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontWeight: 400, fontSize: 26, letterSpacing: "-0.018em",
                }}>{title}</h3>
              </div>
              <p style={{ marginTop: 8, fontSize: 15, color: "var(--eh-ink-2)", lineHeight: 1.5 }}>{desc}</p>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .how-section { padding: 80px 40px !important; }
          .how-grid { grid-template-columns: 1fr !important; max-width: 480px; }
        }
        @media (max-width: 768px) {
          .how-section { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
}
