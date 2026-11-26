import type { MetadataRoute } from "next";

const siteUrl = "https://www.versuscrm.com.br";

const pages = [
  "",
  "/site-imobiliario-para-corretores",
  "/crm-imobiliario",
  "/funcionalidades",
  "/para-corretores",
  "/planos",
  "/sobre",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path, index) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
