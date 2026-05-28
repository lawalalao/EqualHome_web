"use client";

import { useState } from "react";

interface WaitlistFormDict {
  placeholder: string;
  cta: string;
  success: string;
  error: string;
}

export function WaitlistForm({ dict }: { dict: WaitlistFormDict }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{
        padding: "28px 36px",
        background: "var(--eh-bg)",
        borderRadius: 20,
        border: "1px solid var(--eh-line)",
        boxShadow: "0 20px 60px rgba(40,30,20,0.10)",
        maxWidth: "min(480px, calc(100vw - 48px))",
        width: "100%",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: 22, letterSpacing: "-0.018em",
          color: "var(--eh-ink)", lineHeight: 1.35,
        }}>
          {dict.success}
        </div>
        <div style={{
          marginTop: 12,
          width: 48, height: 4, borderRadius: 2,
          background: "var(--eh-primary)",
          margin: "16px auto 0",
        }} />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: "min(480px, calc(100vw - 48px))",
        width: "100%",
        margin: "0 auto",
        background: "var(--eh-bg)",
        borderRadius: 20,
        border: "1px solid var(--eh-line)",
        boxShadow: "0 20px 60px rgba(40,30,20,0.10)",
        padding: "28px 32px",
      }}
      className="waitlist-form"
    >
      <div style={{
        display: "flex",
        gap: 10,
        alignItems: "stretch",
      }}
        className="waitlist-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={dict.placeholder}
          style={{
            flex: 1,
            padding: "14px 18px",
            borderRadius: 12,
            border: "1.5px solid var(--eh-line-strong)",
            background: "var(--eh-surface)",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: 15,
            color: "var(--eh-ink)",
            outline: "none",
            transition: "border-color .2s",
            minWidth: 0,
          }}
          onFocus={e => (e.target.style.borderColor = "var(--eh-primary)")}
          onBlur={e => (e.target.style.borderColor = "var(--eh-line-strong)")}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "14px 22px",
            borderRadius: 12,
            background: status === "loading" ? "var(--eh-ink-2)" : "var(--eh-primary)",
            color: "#FAF7F2",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            border: "none",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
            transition: "background .2s, transform .15s",
            flexShrink: 0,
          }}
          onMouseEnter={e => { if (status !== "loading") (e.currentTarget.style.transform = "translateY(-1px)"); }}
          onMouseLeave={e => { (e.currentTarget.style.transform = ""); }}
        >
          {status === "loading" ? "…" : dict.cta}
        </button>
      </div>

      {status === "error" && (
        <p style={{
          margin: 0,
          fontSize: 13, color: "var(--eh-accent)",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        }}>
          {dict.error}
        </p>
      )}

      <p style={{
        margin: 0,
        fontSize: 12, color: "var(--eh-ink-2)",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        textAlign: "center",
      }}>
        🔒 Pas de spam. Désabonnement en 1 clic.
      </p>

      <style>{`
        @media (max-width: 480px) {
          .waitlist-form { padding: 20px 20px !important; }
          .waitlist-row { flex-direction: column !important; }
        }
      `}</style>
    </form>
  );
}
