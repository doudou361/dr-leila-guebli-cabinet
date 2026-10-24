import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  return [
    {
      url: `${base}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          fr: `${base}`,
          en: `${base}/en`,
        },
      },
    },
    {
      url: `${base}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${base}`,
          en: `${base}/en`,
        },
      },
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/en/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/en/confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
