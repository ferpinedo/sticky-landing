import type { MetadataRoute } from "next";

import { siteDescription, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#FF8100",
    lang: "es-MX",
    icons: [
      {
        src: "/sticky-logo.png",
        sizes: "817x817",
        type: "image/png",
      },
    ],
  };
}
