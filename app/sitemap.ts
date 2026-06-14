import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // TEMPORARILY DISABLED: /works sitemap entry.
  // TODO: Add /works back once portfolio assets are finalized.
  const routes = ["", "/services", "/plans", "/about", "/contact"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
