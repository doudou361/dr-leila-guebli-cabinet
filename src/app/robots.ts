import type { MetadataRoute } from "next";
import { FEATURES, SITE_CONFIG } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!FEATURES.indexable) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
