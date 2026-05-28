import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
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

const BASE_URL = "https://equalhome.app";

export const viewport: Viewport = {
  themeColor: "#2D5F4E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "EqualHome · Rends l'invisible visible.",
    template: "%s · EqualHome",
  },
  description:
    "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
  applicationName: "EqualHome",
  authors: [{ name: "DIGITALL ELEVATE", url: BASE_URL }],
  keywords: ["charge mentale", "foyer", "couple", "tâches", "équilibre", "app"],
  category: "Lifestyle",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "EqualHome",
    title: "EqualHome · Rends l'invisible visible.",
    description:
      "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
  },

  twitter: {
    card: "summary_large_image",
    title: "EqualHome · Rends l'invisible visible.",
    description:
      "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
    site: "@equalhome",
    creator: "@equalhome",
  },

  appleWebApp: {
    capable: true,
    title: "EqualHome",
    statusBarStyle: "default",
  },

  /* App Store Smart Banner — décommenter quand l'app-id est connu
  itunes: {
    appId: "XXXXXX",
    appArgument: BASE_URL,
  },
  */

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: BASE_URL,
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
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
