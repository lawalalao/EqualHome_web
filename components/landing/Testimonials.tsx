"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { EHAvatar } from "@/components/icons";

interface TestimonialItem { q: string; name: string; sub: string; }
interface TestimonialsDict {
  eyebrow: string;
  h2_1: string;
  h2_em: string;
  h2_2: string;
  items: TestimonialItem[];
}

const TONES = ["primary", "accent", "secondary"] as const;
const SLIDE_DURATION = 5000;

export function Testimonials({ dict }: { dict: TestimonialsDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setActive(i => (i + 1) % dict.items.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [paused, dict.items.length]);

  const goTo = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const variants = {
    enter: (d: number) => ({ x: d * 60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d * -60, opacity: 0, scale: 0.97 }),
  };

  const current = dict.items[active];

  return (
    <section
      ref={ref}
      style={{ padding: "140px 80px", maxWidth: 1440, margin: "0 auto" }}
      className="testi-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="eh-eyebrow" style={{ marginBottom: 14 }}>{dict.eyebrow}</div>
        <h2 style={{
          margin: 0,
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(36px, 4vw, 56px)",
          letterSpacing: "-0.03em", lineHeight: 1.02,
          maxWidth: 800,
        }}>
          {dict.h2_1}<br />
          {dict.h2_em} <em style={{ fontStyle: "italic" }}>{dict.h2_2}</em>
        </h2>
      </motion.div>

      <motion.div
        style={{ marginTop: 56 }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {/* Carousel */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "48px 52px",
                borderRadius: 24,
                background: "var(--eh-surface)",
                border: "1px solid var(--eh-line)",
                boxShadow: "var(--eh-shadow-card)",
                display: "flex", flexDirection: "column", gap: 36,
                minHeight: 240,
              }}
              className="testi-card"
            >
              <div style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(20px, 2.2vw, 28px)",
                lineHeight: 1.35,
                letterSpacing: "-0.015em",
                color: "var(--eh-ink)",
                flex: 1,
              }}>
                « {current.q} »
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: 14,
                paddingTop: 20, borderTop: "1px solid var(--eh-line)",
              }}>
                <EHAvatar name={current.name[0]} tone={TONES[active % TONES.length]} size={40} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{current.name}</div>
                  <div style={{
                    fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
                    fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--eh-ink-2)",
                    marginTop: 2,
                  }}>{current.sub}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators + progress */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 28 }}>
          {dict.items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`${i + 1}`}
              style={{
                position: "relative",
                height: 8, borderRadius: 99,
                border: "none", cursor: "pointer", padding: 0,
                background: i === active ? "var(--eh-primary)" : "var(--eh-line)",
                overflow: "hidden",
                transition: "width 0.35s cubic-bezier(.22,1,.36,1), background 0.3s",
                width: i === active ? 28 : 8,
              }}
            >
              {i === active && !paused && (
                <motion.span
                  style={{
                    position: "absolute", inset: 0, left: 0, top: 0, bottom: 0,
                    background: "rgba(255,255,255,0.35)",
                    borderRadius: 99,
                    transformOrigin: "left",
                    scaleX: 0,
                  }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  key={active}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          .testi-section { padding: 80px 40px !important; }
        }
        @media (max-width: 768px) {
          .testi-section { padding: 60px 24px !important; }
          .testi-card { padding: 32px 28px !important; }
        }
      `}</style>
    </section>
  );
}
