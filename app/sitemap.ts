import type { MetadataRoute } from "next";

const siteUrl = "https://www.versuscrm.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
