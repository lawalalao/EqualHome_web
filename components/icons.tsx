import React from "react";

export const EH_CAT = [
  { id: "meals",    glyph: "🍽",  name: "Repas",            hue: "#D4785C" },
  { id: "home",     glyph: "🧹",  name: "Ménage",           hue: "#4A8B6E" },
  { id: "kids",     glyph: "👶",  name: "Enfants",          hue: "#C99466" },
  { id: "admin",    glyph: "💰",  name: "Admin & finance",  hue: "#7B6CB3" },
  { id: "house",    glyph: "🏠",  name: "Maison",           hue: "#2D5F4E" },
  { id: "pets",     glyph: "🐾",  name: "Animaux",          hue: "#B58A52" },
  { id: "social",   glyph: "👥",  name: "Social & famille", hue: "#C75B39" },
  { id: "logistic", glyph: "🚗",  name: "Logistique",       hue: "#5E7B86" },
];

interface IcoProps {
  name: string;
  size?: number;
  stroke?: string;
  sw?: number;
}

export function Ico({ name, size = 22, stroke = "currentColor", sw = 1.7 }: IcoProps) {
  const p = { fill: "none" as const, stroke, strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, React.ReactNode> = {
    home:    <><path d="M3 11l9-7 9 7" {...p}/><path d="M5 10v10h14V10" {...p}/></>,
    clock:   <><circle cx="12" cy="12" r="9" {...p}/><path d="M12 7v5l3 2" {...p}/></>,
    spark:   <><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.5 5.5l4 4M14.5 14.5l4 4M5.5 18.5l4-4M14.5 9.5l4-4" {...p}/></>,
    user:    <><circle cx="12" cy="8" r="4" {...p}/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" {...p}/></>,
    plus:    <><path d="M12 5v14M5 12h14" {...p}/></>,
    bell:    <><path d="M6 17h12l-1.5-2V11a4.5 4.5 0 10-9 0v4z" {...p}/><path d="M10 20a2 2 0 004 0" {...p}/></>,
    search:  <><circle cx="11" cy="11" r="6" {...p}/><path d="M16 16l4 4" {...p}/></>,
    check:   <><path d="M4 12l5 5L20 6" {...p}/></>,
    chev:    <><path d="M9 6l6 6-6 6" {...p}/></>,
    arrow:   <><path d="M5 12h14M13 6l6 6-6 6" {...p}/></>,
    close:   <><path d="M6 6l12 12M18 6L6 18" {...p}/></>,
    star:    <><path d="M12 4l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.4 6.8 20.1l1-5.8L3.5 10.2l5.9-.9z" {...p}/></>,
    leaf:    <><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" {...p}/><path d="M5 19c4-4 9-9 14-14" {...p}/></>,
    chart:   <><path d="M4 19V5M4 19h16" {...p}/><path d="M8 15v-3M12 15V9M16 15v-6" {...p}/></>,
    flame:   <><path d="M12 3c2 3 5 5 5 9a5 5 0 11-10 0c0-2 1-3 2-4 1 2 3 2 3-5z" {...p}/></>,
    heart:   <><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.7A4 4 0 0119 10c0 5.5-7 10-7 10z" {...p}/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", flex: "0 0 auto" }}>
      {paths[name]}
    </svg>
  );
}

interface EHLogoProps {
  size?: number;
  color?: string;
  accent?: string;
}

export function EHMark({ size = 28, color = "var(--eh-ink)", accent = "var(--eh-accent)" }: EHLogoProps) {
  const r = size * 0.36;
  const cx1 = size * 0.36, cx2 = size * 0.64, cy = size * 0.5;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
      <circle cx={cx1} cy={cy} r={r} fill="none" stroke={color}  strokeWidth={size * 0.06} />
      <circle cx={cx2} cy={cy} r={r} fill="none" stroke={accent} strokeWidth={size * 0.06} />
    </svg>
  );
}

export function EHLogo({ size = 24, color = "var(--eh-ink)", accent = "var(--eh-accent)" }: EHLogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.45 }}>
      <EHMark size={size * 1.05} color={color} accent={accent} />
      <span style={{
        fontFamily: "var(--font-fraunces), Georgia, serif",
        fontWeight: 500,
        fontSize: size,
        letterSpacing: "-0.02em",
        color,
      }}>
        equal<em style={{ fontStyle: "italic", fontWeight: 400 }}>home</em>
      </span>
    </div>
  );
}

interface EHAvatarProps {
  name?: string;
  tone?: "primary" | "accent" | "secondary" | "soft";
  size?: number;
}

export function EHAvatar({ name = "C", tone = "primary", size = 32 }: EHAvatarProps) {
  const map: Record<string, { bg: string; fg: string }> = {
    primary:   { bg: "var(--eh-primary)",  fg: "var(--eh-bg)" },
    accent:    { bg: "var(--eh-accent)",   fg: "#fff" },
    secondary: { bg: "var(--eh-secondary)", fg: "var(--eh-primary-deep)" },
    soft:      { bg: "var(--eh-bg-deep)",  fg: "var(--eh-ink)" },
  };
  const { bg, fg } = map[tone] ?? map.primary;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: bg, color: fg,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 500, fontSize: size * 0.42,
      flex: "0 0 auto",
    }}>
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
}
