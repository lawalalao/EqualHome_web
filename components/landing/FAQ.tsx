"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Ico } from "@/components/icons";

const ITEMS = [
  {
    q: "Que se passe-t-il si mon partenaire refuse de s'inscrire ?",
    a: "Vous pouvez utiliser EqualHome en solo : vous suivez votre propre charge, vous voyez vos déséquilibres, et vous pouvez partager un rapport visuel. L'app reste utile, et l'invitation reste possible à tout moment.",
  },
  {
    q: "L'IA va-t-elle juger qui en fait plus ?",
    a: "Non. Le ton est descriptif, jamais accusateur. Les insights expliquent et suggèrent — ils ne notent personne. EqualHome rend visible, jamais coupable.",
  },
  {
    q: "Mes données sont-elles privées ?",
    a: "Vos données sont chiffrées et ne sont jamais vendues. Vous pouvez exporter ou supprimer votre foyer à tout moment depuis les Réglages.",
  },
  {
    q: "Comment EqualHome distingue charge mentale et exécution ?",
    a: "Chaque tâche peut être loggée avec un toggle « j'ai aussi géré la charge mentale ». Cela ajoute 1 à 3 points bonus selon le poids défini par votre couple. Le poids est entièrement personnalisable.",
  },
  {
    q: "Disponible en quelles langues ?",
    a: "Français et anglais au lancement. Allemand, espagnol, italien, néerlandais et portugais arrivent dans les 6 mois.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      id="faq"
      style={{ padding: "140px 80px", background: "var(--eh-bg-deep)", width: "100%" }}
      className="faq-section"
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}
          className="faq-grid">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="eh-eyebrow" style={{ marginBottom: 14 }}>FAQ</div>
            <h2 style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-0.03em", lineHeight: 1,
            }}>
              Vos <em style={{ fontStyle: "italic" }}>questions</em>, nos réponses.
            </h2>
            <p style={{ marginTop: 24, fontSize: 15, color: "var(--eh-ink-2)", lineHeight: 1.5, maxWidth: 380 }}>
              Une autre question ? Écrivez-nous à{" "}
              <a href="mailto:bonjour@equalhome.app" style={{ color: "var(--eh-ink)", fontWeight: 600, textDecoration: "none" }}>
                bonjour@equalhome.app
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {ITEMS.map(({ q, a }, i) => (
              <div key={q} style={{ borderTop: "1px solid var(--eh-line-strong)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    width: "100%", padding: "24px 0",
                    cursor: "pointer", background: "none", border: "none",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: 22, letterSpacing: "-0.015em",
                    color: "var(--eh-ink)", flex: 1, paddingRight: 24,
                  }}>{q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ flex: "0 0 auto" }}
                  >
                    <Ico name="plus" size={20} stroke="var(--eh-ink)" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{
                        paddingBottom: 24,
                        fontSize: 15.5, color: "var(--eh-ink-2)",
                        lineHeight: 1.55, maxWidth: 620,
                      }}>{a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .faq-section { padding: 80px 40px !important; }
          .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .faq-section { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
}
