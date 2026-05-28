"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedNumber } from "@/components/balance";

const STATS = [
  { raw: 71, display: "71 %", suffix: " %", label: "des tâches mentales du foyer portées par une seule personne, généralement la femme.", cite: "University of Bath & Melbourne, 2024" },
  { raw: 85, display: "85 %", suffix: " %", label: "des tâches de ménage et 83% de planification portées par les mères.", cite: "Journal of Marriage & Family" },
  { raw: null, display: "60/40", suffix: "", label: "le déséquilibre persiste dans les couples LGBTQ+ (vs 80/20 hétéro).", cite: "Helgøy & Weeks, 2024" },
  { raw: 4, display: "4", suffix: "", label: "phases ignorées par les apps de tâches : anticiper, décider, surveiller, exécuter.", cite: "USC Mental Load Research" },
];

export function Proof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="proof"
      style={{
        padding: "40px 80px 100px",
        borderTop: "1px solid var(--eh-line)",
        borderBottom: "1px solid var(--eh-line)",
        background: "var(--eh-bg-deep)",
        maxWidth: 1440,
        margin: "0 auto",
        width: "100%",
      }}
      className="proof-section"
    >
      <motion.div
        className="eh-eyebrow"
        style={{ marginTop: 56, marginBottom: 28 }}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        LA DONNÉE EST CLAIRE
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}
        className="proof-grid">
        {STATS.map((s, i) => (
          <motion.div
            key={s.cite}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(42px, 4.5vw, 64px)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--eh-primary)",
            }}>
              {s.raw !== null ? (
                <>
                  <AnimatedNumber target={s.raw} />{s.suffix}
                </>
              ) : s.display}
            </div>
            <div style={{ marginTop: 18, fontSize: 15, lineHeight: 1.45, color: "var(--eh-ink)" }}>{s.label}</div>
            <div style={{
              marginTop: 12,
              fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
              fontSize: 11, letterSpacing: "0.1em", color: "var(--eh-ink-2)", textTransform: "uppercase",
            }}>
              {s.cite}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .proof-section { padding: 40px 40px 80px !important; }
          .proof-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .proof-section { padding: 40px 24px 60px !important; }
          .proof-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .proof-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
