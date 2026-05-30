import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aviso-de-privacidad", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terminos-y-condiciones", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
