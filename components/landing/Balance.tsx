"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BalanceScore } from "@/components/balance";

interface BalanceLabels { aligned: string; soft: string; warning: string; alert: string; }
interface BalanceDict {
  eyebrow: string;
  h2_1: string;
  h2_em: string;
  h2_2: string;
  body: string;
  labels: BalanceLabels;
}

const SMALLS = [48, 65, 78];

export function BalanceSection({ dict }: { dict: BalanceDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const LEVELS = [
    { n: "50/50", l: dict.labels.aligned, hex: "#4A8B6E" },
    { n: "60/40", l: dict.labels.soft,    hex: "#E8C4A0" },
    { n: "70/30", l: dict.labels.warning, hex: "#D4785C" },
    { n: "80/20", l: dict.labels.alert,   hex: "#C75B39" },
  ];

  return (
    <section
      ref={ref}
      id="balance"
      style={{
        padding: "140px 80px",
        background: "var(--eh-primary-deep)",
        color: "#FAF7F2",
        width: "100%",
      }}
      className="balance-section"
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}
          className="balance-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eh-eyebrow" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>{dict.eyebrow}</div>
            <h2 style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(38px, 4.5vw, 64px)",
              letterSpacing: "-0.03em", lineHeight: 1,
              color: "#FAF7F2",
            }}>
              {dict.h2_1}<br /><em style={{ fontStyle: "italic" }}>{dict.h2_em}</em> {dict.h2_2}
            </h2>
            <p style={{ marginTop: 28, fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.55, maxWidth: 480 }}>
              {dict.body}
            </p>

            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 480 }}>
              {LEVELS.map(({ n, l, hex }) => (
                <div key={n} style={{
                  padding: "14px 16px", borderRadius: 12,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: hex, display: "inline-block" }} />
                    <span style={{ fontFamily: "var(--font-dm-mono), ui-monospace, monospace", fontSize: 13 }}>{n}</span>
                  </div>
                  <div style={{ marginTop: 6, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 12.5, color: "rgba(255,255,255,0.65)" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="balance-visual"
            style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: 60, alignItems: "center" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <BalanceScore scoreA={52} size={380} animate />
            <div style={{ display: "flex", gap: 28, marginTop: 16 }}>
              {SMALLS.map(s => (
                <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <BalanceScore scoreA={s} size={90} showLegend={false} caption={false} />
                  <div style={{
                    fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
                    fontSize: 10.5, color: "rgba(255,255,255,0.6)",
                  }}>
                    {s}/{100 - s}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .balance-section { padding: 80px 40px !important; }
          .balance-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 768px) {
          .balance-section { padding: 60px 24px !important; }
        }
        @media (max-width: 440px) {
          .balance-visual { zoom: 0.82; }
        }
      `}</style>
    </section>
  );
}
