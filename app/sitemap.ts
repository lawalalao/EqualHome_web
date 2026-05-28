import type { MetadataRoute } from "next";

const BASE = "https://equalhome.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/support`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/terms`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/cookies`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
