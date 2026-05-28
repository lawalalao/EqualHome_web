"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PHASES = [
  { n: "01", title: "Anticiper", body: "Penser au cadeau d'anniversaire trois semaines à l'avance. Surveiller la taille des chaussures.", invisible: true },
  { n: "02", title: "Décider", body: "Choisir l'assurance, la pédiatre, l'école. Comparer, trancher, assumer.", invisible: true },
  { n: "03", title: "Surveiller", body: "Vérifier que le frigo est plein, que la facture est payée, que les vaccins sont à jour.", invisible: true },
  { n: "04", title: "Exécuter", body: "Cuisiner, conduire, remplir. La seule phase que les autres apps voient.", invisible: false },
];

export function Mental() {
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
        <div className="eh-eyebrow" style={{ marginBottom: 14 }}>LA CHARGE MENTALE, CONCRÈTE</div>
        <h2 style={{
          margin: 0,
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(40px, 4.5vw, 64px)",
          letterSpacing: "-0.03em", lineHeight: 1.02,
        }}>
          Quatre phases.<br />
          Une seule est <em style={{ fontStyle: "italic" }}>visible</em>.
        </h2>
        <p style={{ marginTop: 28, fontSize: 17, color: "var(--eh-ink-2)", lineHeight: 1.55, maxWidth: 640 }}>
          Les apps de tâches ne mesurent que l&apos;exécution. EqualHome reconnaît aussi les trois phases invisibles qui pèsent le plus.
        </p>
      </motion.div>

      <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
        className="mental-grid">
        {PHASES.map(({ n, title, body, invisible }, i) => (
          <motion.div
            key={n}
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
              {n} · {invisible ? "INVISIBLE" : "VISIBLE"}
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
                {body}
              </div>
            </div>
          </motion.div>
        ))}
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
