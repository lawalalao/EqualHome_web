import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/CookieBanner";
import { getDictionary, hasLocale } from "./dictionaries";

const BASE_URL = "https://equalhome.app";

export async function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: isEn
        ? "EqualHome · Make the invisible visible."
        : "EqualHome · Rends l'invisible visible.",
      template: "%s · EqualHome",
    },
    description: isEn
      ? "The first app that makes your household mental load visible, so you can truly share it."
      : "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
    applicationName: "EqualHome",
    authors: [{ name: "DIGITALL ELEVATE", url: BASE_URL }],
    keywords: isEn
      ? ["mental load", "household", "couple", "tasks", "balance", "app"]
      : ["charge mentale", "foyer", "couple", "tâches", "équilibre", "app"],
    category: "Lifestyle",
    openGraph: {
      type: "website",
      locale: isEn ? "en_GB" : "fr_FR",
      url: isEn ? `${BASE_URL}/en` : BASE_URL,
      siteName: "EqualHome",
      title: isEn
        ? "EqualHome · Make the invisible visible."
        : "EqualHome · Rends l'invisible visible.",
      description: isEn
        ? "The first app that makes your household mental load visible, so you can truly share it."
        : "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
    },
    twitter: {
      card: "summary_large_image",
      title: isEn
        ? "EqualHome · Make the invisible visible."
        : "EqualHome · Rends l'invisible visible.",
      description: isEn
        ? "The first app that makes your household mental load visible, so you can truly share it."
        : "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
      site: "@equalhome",
      creator: "@equalhome",
    },
    appleWebApp: {
      capable: true,
      title: "EqualHome",
      statusBarStyle: "default",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: isEn ? `${BASE_URL}/en` : BASE_URL,
      languages: {
        "fr": BASE_URL + "/fr",
        "en": BASE_URL + "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      {children}
      <CookieBanner lang={lang} dict={dict.cookie_banner} />
    </>
  );
}
