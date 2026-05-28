"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EHMark } from "@/components/icons";
import { WaitlistForm } from "./WaitlistForm";

interface CTADict {
  eyebrow: string;
  h2_em: string;
  h2_1: string;
  body: string;
  waitlist_label: string;
  form_placeholder: string;
  form_cta: string;
  form_success: string;
  form_error: string;
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
        </motion.div>

        <motion.div
          style={{ marginTop: 48 }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <WaitlistForm dict={{
            placeholder: dict.form_placeholder,
            cta: dict.form_cta,
            success: dict.form_success,
            error: dict.form_error,
          }} />
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
