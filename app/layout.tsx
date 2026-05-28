import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EqualHome — Rends l'invisible visible.",
  description:
    "La première app qui rend visible la charge mentale du foyer — pour la partager vraiment.",
  openGraph: {
    title: "EqualHome — Rends l'invisible visible.",
    description:
      "La première app qui rend visible la charge mentale du foyer — pour la partager vraiment.",
    type: "website",
    locale: "fr_FR",
  },
  other: {
    "application-name": "EqualHome",
    "application-category": "LifestyleApplication",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
