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
  const pageUrl = `${BASE_URL}/${lang}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: isEn
        ? "EqualHome · Make the invisible visible."
        : "EqualHome · Rends l'invisible visible.",
      template: "%s · EqualHome",
    },
    description: isEn
      ? "The first app that makes your household mental load visible, so you can truly share it. Free for couples."
      : "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment. Gratuit pour les couples.",
    applicationName: "EqualHome",
    authors: [{ name: "DIGITALL ELEVATE", url: BASE_URL }],
    keywords: isEn
      ? ["mental load", "household balance", "couple app", "domestic tasks", "cognitive load", "family organisation"]
      : ["charge mentale", "équilibre foyer", "app couple", "tâches domestiques", "charge cognitive", "organisation famille"],
    category: "Lifestyle",
    openGraph: {
      type: "website",
      locale: isEn ? "en_GB" : "fr_FR",
      alternateLocale: isEn ? "fr_FR" : "en_GB",
      url: pageUrl,
      siteName: "EqualHome",
      title: isEn
        ? "EqualHome · Make the invisible visible."
        : "EqualHome · Rends l'invisible visible.",
      description: isEn
        ? "The first app that makes your household mental load visible, so you can truly share it."
        : "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
      images: [
        {
          url: `${BASE_URL}/${lang}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isEn ? "EqualHome — Make the invisible visible." : "EqualHome — Rends l'invisible visible.",
        },
      ],
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
      images: [`${BASE_URL}/${lang}/opengraph-image`],
    },
    appleWebApp: {
      capable: true,
      title: "EqualHome",
      statusBarStyle: "default",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        "fr": `${BASE_URL}/fr`,
        "en": `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/fr`,
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

  const dict = getDictionary(lang);
  const isEn = lang === "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "EqualHome",
        "url": BASE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/icon.png`,
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "bonjour@equalhome.app",
          "contactType": "customer support",
          "availableLanguage": ["French", "English"],
        },
        "sameAs": ["https://twitter.com/equalhome"],
      },
      {
        "@type": "MobileApplication",
        "@id": `${BASE_URL}/#app`,
        "name": "EqualHome",
        "operatingSystem": "iOS, ANDROID",
        "applicationCategory": "LifestyleApplication",
        "description": isEn
          ? "The first app that makes your household mental load visible, so you can truly share it."
          : "La première app qui rend visible la charge mentale du foyer, pour la partager vraiment.",
        "inLanguage": isEn ? "en" : "fr",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "description": isEn ? "Free plan available" : "Formule gratuite disponible",
        },
        "publisher": { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": "EqualHome",
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": `${BASE_URL}/fr/#faq` },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
      <CookieBanner lang={lang} dict={dict.cookie_banner} />
    </>
  );
}
