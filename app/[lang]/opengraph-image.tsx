import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  const tagline = isEn ? "Make the invisible visible." : "Rends l'invisible visible.";
  const sub = isEn
    ? "The app that brings balance to your home."
    : "L'app qui rééquilibre votre foyer.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF7F2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Decorative background circles */}
        <div style={{
          position: "absolute",
          width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,95,78,0.12) 0%, transparent 70%)",
          top: -100, left: -100,
          display: "flex",
        }} />
        <div style={{
          position: "absolute",
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,120,92,0.10) 0%, transparent 70%)",
          bottom: -80, right: -80,
          display: "flex",
        }} />

        {/* Logo area */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          marginBottom: 56,
        }}>
          {/* Venn logo mark */}
          <div style={{ position: "relative", width: 56, height: 56, display: "flex" }}>
            <div style={{
              position: "absolute",
              width: 40, height: 40,
              borderRadius: "50%",
              background: "#2D5F4E",
              opacity: 0.9,
              left: 0, top: 8,
            }} />
            <div style={{
              position: "absolute",
              width: 40, height: 40,
              borderRadius: "50%",
              background: "#D4785C",
              opacity: 0.85,
              left: 18, top: 8,
            }} />
          </div>
          <div style={{
            fontSize: 40,
            fontFamily: "serif",
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
            display: "flex",
          }}>
            equal<span style={{ fontStyle: "italic" }}>home</span>
          </div>
        </div>

        {/* Main tagline */}
        <div style={{
          fontSize: 72,
          fontFamily: "serif",
          fontWeight: 400,
          color: "#1A1A1A",
          textAlign: "center",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          maxWidth: 920,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {tagline}
        </div>

        {/* Sub */}
        <div style={{
          marginTop: 28,
          fontSize: 28,
          color: "#6B7280",
          textAlign: "center",
          fontFamily: "sans-serif",
          maxWidth: 700,
          display: "flex",
        }}>
          {sub}
        </div>

        {/* Balance indicator */}
        <div style={{
          marginTop: 56,
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "rgba(45,95,78,0.08)",
          borderRadius: 999,
          padding: "12px 28px",
        }}>
          <div style={{
            width: 12, height: 12,
            borderRadius: "50%",
            background: "#2D5F4E",
            display: "flex",
          }} />
          <div style={{
            fontSize: 18,
            fontFamily: "monospace",
            color: "#2D5F4E",
            letterSpacing: "0.1em",
            display: "flex",
          }}>
            BALANCE SCORE · 52 / 48
          </div>
          <div style={{
            width: 12, height: 12,
            borderRadius: "50%",
            background: "#D4785C",
            display: "flex",
          }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
