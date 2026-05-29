"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

// SVG circle element with Framer Motion support
const MotionCircle = motion.circle;

export interface CategoryRow {
  id: string;
  name: string;
  glyph: string;
  a: number;
  b: number;
}

function balanceTone(score: number) {
  const drift = Math.abs(score - 50);
  if (drift <= 5)  return { mood: "aligned",  hex: "var(--eh-success)",  label: "Équilibre atteint" };
  if (drift <= 12) return { mood: "soft",     hex: "var(--eh-primary)",  label: "Léger déséquilibre" };
  if (drift <= 20) return { mood: "warning",  hex: "var(--eh-accent)",   label: "Déséquilibre notable" };
  return              { mood: "alert",    hex: "var(--eh-warning)",  label: "Alerte : discutez-en" };
}

interface BalanceScoreProps {
  scoreA?: number;
  nameA?: string;
  nameB?: string;
  size?: number;
  showLegend?: boolean;
  caption?: boolean;
  animate?: boolean;
}

export function BalanceScore({
  scoreA = 52,
  nameA = "Camille",
  nameB = "Sacha",
  size = 280,
  showLegend = true,
  caption = true,
  animate = false,
}: BalanceScoreProps) {
  const scoreB = 100 - scoreA;
  const tone = balanceTone(scoreA);

  const rMax = size * 0.32, rMin = size * 0.22;
  const rOf = (s: number) => {
    const k = Math.max(0, Math.min(1, (s - 30) / 40));
    return rMin + (rMax - rMin) * k;
  };

  const springA = useSpring(animate ? 50 : scoreA, { stiffness: 60, damping: 18 });
  const springB = useSpring(animate ? 50 : scoreB, { stiffness: 60, damping: 18 });
  const [displayA, setDisplayA] = useState(animate ? 50 : scoreA);
  const [displayB, setDisplayB] = useState(animate ? 50 : scoreB);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Delay breathing animation until spring score animation settles
  const [breatheReady, setBreatheReady] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setBreatheReady(true), animate ? 2400 : 400);
    return () => clearTimeout(t);
  }, [inView, animate]);

  useEffect(() => {
    if (animate && inView) {
      springA.set(scoreA);
      springB.set(scoreB);
    }
  }, [animate, inView, scoreA, scoreB, springA, springB]);

  useEffect(() => {
    const unsub = springA.on("change", v => setDisplayA(Math.round(v)));
    return unsub;
  }, [springA]);

  useEffect(() => {
    const unsub = springB.on("change", v => setDisplayB(Math.round(v)));
    return unsub;
  }, [springB]);

  const rA = rOf(animate ? displayA : scoreA);
  const rB = rOf(animate ? displayB : scoreB);
  const overlap = size * 0.12;
  const cx = size / 2;
  const cy = size / 2;
  const cxA = cx - (rA - overlap / 2);
  const cxB = cx + (rB - overlap / 2);

  return (
    <div ref={ref} style={{ width: size, position: "relative" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
        <defs>
          <radialGradient id={`ehA-${size}`} cx="40%" cy="40%">
            <stop offset="0%"   stopColor="var(--eh-primary)"      stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--eh-primary-deep)" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id={`ehB-${size}`} cx="60%" cy="40%">
            <stop offset="0%"   stopColor="var(--eh-accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B0593E"           stopOpacity="0.95" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={Math.max(rA, rB) + 14} fill="var(--eh-bg-deep)" opacity="0.55" />

        <MotionCircle
          cx={cxA} cy={cy} r={rA}
          fill={`url(#ehA-${size})`}
          style={{ mixBlendMode: "multiply", transition: "cx .55s cubic-bezier(.22,1,.36,1)" }}
          animate={breatheReady ? { r: [rA - 5, rA + 5] } : { r: rA }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <MotionCircle
          cx={cxB} cy={cy} r={rB}
          fill={`url(#ehB-${size})`}
          style={{ mixBlendMode: "multiply", transition: "cx .55s cubic-bezier(.22,1,.36,1)" }}
          animate={breatheReady ? { r: [rB + 4, rB - 6] } : { r: rB }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.8 }}
        />

        <circle cx={cxA} cy={cy} r={rA} fill="none" stroke="var(--eh-primary-deep)" strokeOpacity="0.35" strokeWidth="0.5" />
        <circle cx={cxB} cy={cy} r={rB} fill="none" stroke="#7a3b27" strokeOpacity="0.4"  strokeWidth="0.5" />
      </svg>

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        pointerEvents: "none",
      }}>
        <div style={{
          fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
          fontSize: size * 0.085, color: "#FAF7F2",
          letterSpacing: "0.02em", fontWeight: 500,
          textShadow: "0 1px 2px rgba(0,0,0,0.15)",
        }}>
          {animate ? displayA : scoreA}
          <span style={{ opacity: 0.55 }}> / </span>
          {animate ? displayB : scoreB}
        </div>
        {caption && (
          <div style={{
            marginTop: 4,
            fontFamily: "var(--font-dm-mono), ui-monospace, monospace",
            fontSize: size * 0.034, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#FAF7F2", opacity: 0.78,
          }}>
            BALANCE
          </div>
        )}
      </div>

      {showLegend && (
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: -34,
          display: "flex", justifyContent: "space-between",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 12.5,
        }}>
          <LegendItem name={nameA} dot="var(--eh-primary)" val={animate ? displayA : scoreA} />
          <LegendItem name={nameB} dot="var(--eh-accent)"  val={animate ? displayB : scoreB} />
        </div>
      )}
    </div>
  );
}

function LegendItem({ name, dot, val }: { name: string; dot: string; val: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot, display: "inline-block" }} />
      <span style={{ color: "var(--eh-ink)" }}>{name}</span>
      <span style={{ fontFamily: "var(--font-dm-mono), ui-monospace, monospace", color: "var(--eh-ink-2)" }}>{val}%</span>
    </div>
  );
}

interface CategoryBarsProps {
  rows: CategoryRow[];
  compact?: boolean;
}

export function CategoryBars({ rows, compact = false }: CategoryBarsProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: compact ? 10 : 14 }}>
      {rows.map(r => (
        <div key={r.id} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 100 }}>
            <span style={{ fontSize: 16 }}>{r.glyph}</span>
            <span style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: 13, color: "var(--eh-ink)" }}>{r.name}</span>
          </div>
          <div style={{ display: "flex", height: 8, borderRadius: 999, overflow: "hidden", background: "var(--eh-bg-deep)" }}>
            <div style={{ width: `${r.a}%`, background: "var(--eh-primary)" }} />
            <div style={{ width: `${r.b}%`, background: "var(--eh-accent)" }} />
          </div>
          <div style={{ fontFamily: "var(--font-dm-mono), ui-monospace, monospace", fontSize: 11, color: "var(--eh-ink-2)", minWidth: 50, textAlign: "right" }}>
            {r.a}/{r.b}
          </div>
        </div>
      ))}
    </div>
  );
}

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({ target, suffix = "", className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // Default to `target` so SSR/fallback always shows the real number (never "0")
  const [display, setDisplay] = useState(target);
  const [started, setStarted] = useState(false);
  const spring = useSpring(0, { stiffness: 40, damping: 15 });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      setDisplay(0);         // reset before counting up
      spring.set(target);
    }
  }, [inView, started, target, spring]);

  useEffect(() => {
    if (!started) return;
    const unsub = spring.on("change", v => setDisplay(Math.round(v)));
    return unsub;
  }, [spring, started]);

  return <span ref={ref} className={className}>{display}{suffix}</span>;
}

export { motion };
