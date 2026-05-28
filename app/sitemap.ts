import type { MetadataRoute } from "next";

const BASE = "https://equalhome.app";
const LOCALES = ["fr", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedPages = (path: string, freq: MetadataRoute.Sitemap[0]["changeFrequency"], priority: number) =>
    LOCALES.map(l => ({
      url: `${BASE}/${l}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    }));

  return [
    { url: BASE,      lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    ...localizedPages("",          "weekly",  1.0),
    ...localizedPages("/support",  "monthly", 0.8),
    ...localizedPages("/privacy",  "monthly", 0.5),
    ...localizedPages("/terms",    "monthly", 0.5),
    ...localizedPages("/cookies",  "monthly", 0.3),
  ];
}
