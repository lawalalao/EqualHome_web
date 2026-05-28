"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MentalPhase { tag: string; title: string; desc: string; }
interface MentalDict {
  eyebrow: string;
  h2_1: string;
  h2_em: string;
  h2_2: string;
  subtitle: string;
  phases: MentalPhase[];
}

export function Mental({ dict }: { dict: MentalDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="mental" style={{ padding: "140px 80px", maxWidth: 1440, margin: "0 auto" }}
      className="mental-section">
      <motion.div
        style={{ maxWidth: 880 }}
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
          {dict.h2_1}<br />
          {dict.h2_em} <em style={{ fontStyle: "italic" }}>{dict.h2_2}</em>
        </h2>
        <p style={{ marginTop: 28, fontSize: 17, color: "var(--eh-ink-2)", lineHeight: 1.55, maxWidth: 640 }}>
          {dict.subtitle}
        </p>
      </motion.div>

      <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
        className="mental-grid">
        {dict.phases.map(({ tag, title, desc }, i) => {
          const invisible = i < 3;
          return (
            <motion.div
              key={tag}
              style={{
                padding: 28, borderRadius: 22,
                background: invisible ? "var(--eh-bg-deep)" : "var(--eh-primary)",
                color: invisible ? "var(--eh-ink)" : "#FAF7F2",
                height: 320,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div style={{
                fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
                fontSize: 12, letterSpacing: "0.16em",
                opacity: invisible ? 0.6 : 0.7,
              }}>
                {tag}
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 14,
                }}>
                  {title}
                </div>
                <div style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: 14, lineHeight: 1.5,
                  opacity: invisible ? 0.7 : 0.85,
                }}>
                  {desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .mental-section { padding: 80px 40px !important; }
          .mental-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .mental-section { padding: 60px 24px !important; }
          .mental-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
