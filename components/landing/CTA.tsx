"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EHMark } from "@/components/icons";

interface CTADict {
  eyebrow: string;
  h2_em: string;
  h2_1: string;
  body: string;
  app_store: string;
  google_play: string;
}

export function CTA({ dict }: { dict: CTADict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="cta"
      style={{ padding: "140px 80px", textAlign: "center", position: "relative", overflow: "hidden", width: "100%" }}
      className="cta-section"
    >
      {/* Giant rotating brand mark */}
      <motion.div
        style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: 0.25, pointerEvents: "none",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <EHMark size={620} color="var(--eh-primary)" accent="var(--eh-accent)" />
      </motion.div>

      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eh-eyebrow" style={{ marginBottom: 14 }}>{dict.eyebrow}</div>
          <h2 style={{
            margin: 0,
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(48px, 6vw, 84px)",
            letterSpacing: "-0.035em", lineHeight: 1,
            maxWidth: 980, marginInline: "auto",
          }}>
            {dict.h2_1} <em style={{ fontStyle: "italic", fontWeight: 400 }}>{dict.h2_em}</em>.
          </h2>
          <p style={{ marginTop: 28, fontSize: 18, color: "var(--eh-ink-2)", maxWidth: 560, marginInline: "auto", lineHeight: 1.5 }}>
            {dict.body}
          </p>

          <div style={{ marginTop: 36, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <StoreBtn os="iOS" label={dict.app_store} />
            <StoreBtn os="Android" label={dict.google_play} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

function StoreBtn({ os, label }: { os: "iOS" | "Android"; label: string }) {
  return (
    <a
      href="#"
      style={{
        display: "inline-flex", alignItems: "center", gap: 14,
        padding: "14px 22px", borderRadius: 14,
        background: "var(--eh-ink)", color: "var(--eh-bg)",
        textDecoration: "none",
        transition: "transform .2s, box-shadow .2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(26,26,26,0.2)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      <span style={{ fontSize: 24 }}>{os === "iOS" ? "" : "▸"}</span>
      <div style={{ textAlign: "left" }}>
        <div style={{
          fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
          fontSize: 10, opacity: 0.6, letterSpacing: "0.14em",
        }}>
          {label}
        </div>
        <div style={{ fontSize: 16, fontWeight: 500, marginTop: 2 }}>
          {os === "iOS" ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}
