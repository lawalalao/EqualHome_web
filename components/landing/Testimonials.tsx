"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EHAvatar } from "@/components/icons";

const TESTIMONIALS = [
  {
    q: "On ne se disputait plus sur les courses, mais sur qui pense à les faire. EqualHome a mis ce mot sur la table.",
    name: "Léa & Marc", sub: "Couple · Paris", tone: "primary" as const,
  },
  {
    q: "J'avais peur que ça transforme la maison en feuille Excel. Au contraire : on parle moins de tâches, plus d'équilibre.",
    name: "Inès & Théo", sub: "Couple · Lyon", tone: "accent" as const,
  },
  {
    q: "Mon mari ne se rendait pas compte. Les insights IA du dimanche soir, c'est devenu notre rituel honnête.",
    name: "Sophie & David", sub: "Couple · Marseille", tone: "secondary" as const,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "140px 80px", maxWidth: 1440, margin: "0 auto" }}
      className="testi-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="eh-eyebrow" style={{ marginBottom: 14 }}>CE QU'ILS EN DISENT</div>
        <h2 style={{
          margin: 0,
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(36px, 4vw, 56px)",
          letterSpacing: "-0.03em", lineHeight: 1.02,
          maxWidth: 800,
        }}>
          Pas un outil de plus.<br />
          Une <em style={{ fontStyle: "italic" }}>conversation</em> qui s&apos;ouvre.
        </h2>
      </motion.div>

      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}
        className="testi-grid">
        {TESTIMONIALS.map(({ q, name, sub, tone }, i) => (
          <motion.div
            key={name}
            style={{
              padding: 28, borderRadius: 22,
              background: "var(--eh-surface)",
              border: "1px solid var(--eh-line)",
              display: "flex", flexDirection: "column", gap: 28,
              minHeight: 280,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
          >
            <div style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: 22, lineHeight: 1.3,
              letterSpacing: "-0.012em",
              color: "var(--eh-ink)", flex: 1,
            }}>
              « {q} »
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              paddingTop: 18, borderTop: "1px solid var(--eh-line)",
            }}>
              <EHAvatar name={name[0]} tone={tone} size={36} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{name}</div>
                <div style={{
                  fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
                  fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--eh-ink-2)",
                }}>{sub}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testi-section { padding: 80px 40px !important; }
          .testi-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .testi-section { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
}
