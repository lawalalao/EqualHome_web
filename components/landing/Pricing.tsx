"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Ico } from "@/components/icons";

const FREE_FEATURES   = ["Jusqu'à 10 tâches", "Balance Score basique", "Invitation partenaire", "Catégories prédéfinies"];
const PREMIUM_FEATURES = ["Tâches illimitées", "Insights IA hebdo", "Historique illimité", "Rapports partageables", "Mode Discussion guidée"];

export function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="pricing"
      style={{ padding: "140px 80px", background: "var(--eh-bg-deep)", width: "100%" }}
      className="pricing-section"
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}
          className="pricing-grid">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="eh-eyebrow" style={{ marginBottom: 14 }}>TARIFS</div>
            <h2 style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(38px, 4vw, 64px)",
              letterSpacing: "-0.03em", lineHeight: 1.02,
            }}>
              Gratuit pour <em style={{ fontStyle: "italic" }}>commencer</em>.<br />
              Premium pour aller plus loin.
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, color: "var(--eh-ink-2)", lineHeight: 1.55, maxWidth: 500 }}>
              Un essai de 7 jours sans engagement. Vous gardez accès à votre historique même si vous repassez gratuit.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
            className="price-cards">
            {[
              { title: "Gratuit", price: "0 €", period: "", features: FREE_FEATURES, cta: "Télécharger", highlight: false },
              { title: "Premium", price: "49,99 €", period: "/ an · 4,16 €/mois", features: PREMIUM_FEATURES, cta: "Essai 7 jours", highlight: true },
            ].map(({ title, price, period, features, cta, highlight }, i) => (
              <motion.div
                key={title}
                style={{
                  padding: 28, borderRadius: 22,
                  background: highlight ? "var(--eh-primary-deep)" : "var(--eh-surface)",
                  color: highlight ? "#FAF7F2" : "var(--eh-ink)",
                  border: highlight ? "none" : "1px solid var(--eh-line)",
                  display: "flex", flexDirection: "column", gap: 18,
                  minHeight: 420,
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: 24, letterSpacing: "-0.018em" }}>{title}</span>
                  {highlight && (
                    <span style={{
                      fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
                      fontSize: 10, padding: "4px 10px", borderRadius: 999,
                      background: "rgba(232,196,160,0.2)", color: "var(--eh-secondary)", letterSpacing: "0.12em",
                    }}>-30 %</span>
                  )}
                </div>

                <div>
                  <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: 56, letterSpacing: "-0.03em", lineHeight: 1 }}>{price}</div>
                  {period && <div style={{ marginTop: 6, fontSize: 13, opacity: 0.7 }}>{period}</div>}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5 }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: "50%",
                        background: highlight ? "rgba(232,196,160,0.18)" : "var(--eh-bg-deep)",
                        display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto",
                      }}>
                        <Ico name="check" size={12} stroke={highlight ? "var(--eh-secondary)" : "var(--eh-primary)"} sw={2} />
                      </span>
                      {f}
                    </div>
                  ))}
                </div>

                <button style={{
                  padding: "14px 18px", borderRadius: 12, border: "none", cursor: "pointer",
                  background: highlight ? "var(--eh-bg)" : "var(--eh-ink)",
                  color: highlight ? "var(--eh-primary-deep)" : "var(--eh-bg)",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 500, fontSize: 14,
                  transition: "opacity .2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-section { padding: 80px 40px !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .price-cards { max-width: 560px; }
        }
        @media (max-width: 768px) {
          .pricing-section { padding: 60px 24px !important; }
          .price-cards { grid-template-columns: 1fr !important; max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
