"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = "accepted" | "refused" | null;

interface CookieBannerDict {
  text: string;
  learn_more: string;
  refuse: string;
  accept: string;
  aria: string;
}

interface CookieBannerProps {
  lang: string;
  dict: CookieBannerDict;
}

export function CookieBanner({ lang, dict }: CookieBannerProps) {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("eh_cookie_consent") as Consent;
    if (!stored) {
      setTimeout(() => setVisible(true), 800);
    } else {
      setConsent(stored);
    }
  }, []);

  function choose(value: "accepted" | "refused") {
    localStorage.setItem("eh_cookie_consent", value);
    setConsent(value);
    setVisible(false);
  }

  if (!visible || consent) return null;

  const cookieHref = `/${lang}/cookies`;

  return (
    <div
      role="dialog"
      aria-label={dict.aria}
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        width: "min(560px, calc(100vw - 32px))",
        background: "var(--eh-ink)",
        color: "var(--eh-bg)",
        borderRadius: 18,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: "0 8px 40px rgba(26,26,26,0.28)",
        flexWrap: "wrap",
      }}
    >
      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, flex: 1, minWidth: 200, opacity: 0.85 }}>
        {dict.text}{" "}
        <Link href={cookieHref} style={{ color: "var(--eh-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
          {dict.learn_more}
        </Link>
      </p>
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button
          onClick={() => choose("refused")}
          style={{
            padding: "9px 16px",
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            color: "var(--eh-bg)",
            fontSize: 13, fontWeight: 500, cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {dict.refuse}
        </button>
        <button
          onClick={() => choose("accepted")}
          style={{
            padding: "9px 18px",
            borderRadius: 9999,
            border: "none",
            background: "var(--eh-bg)",
            color: "var(--eh-ink)",
            fontSize: 13, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {dict.accept}
        </button>
      </div>
    </div>
  );
}
