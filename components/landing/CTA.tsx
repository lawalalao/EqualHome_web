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
        padding: "13px 22px", borderRadius: 14,
        background: "var(--eh-ink)", color: "var(--eh-bg)",
        textDecoration: "none",
        transition: "transform .2s, box-shadow .2s",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(26,26,26,0.22)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {os === "iOS" ? <AppleIcon /> : <PlayIcon />}
      <div style={{ textAlign: "left" }}>
        <div style={{
          fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
          fontSize: 9.5, opacity: 0.6, letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          {label}
        </div>
        <div style={{ fontSize: 17, fontWeight: 600, marginTop: 1, letterSpacing: "-0.01em" }}>
          {os === "iOS" ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}

/** Apple logo (Font Awesome 5 fab fa-apple) */
function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      width="22" height="26"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

/** Google Play logo (Font Awesome 5 fab fa-google-play) */
function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="22" height="24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.3-9.8 17.3-34.5-.1-44.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}
