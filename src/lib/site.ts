import type { Metadata } from "next";

export const siteName = "Sticky";

export const siteDescription =
  "Crea stickers para WhatsApp en segundos con inteligencia artificial. Manda una foto, describe tu idea o edita un sticker que ya tienes. Gratis, sin descargar otra app.";

export const siteKeywords = [
  "stickers WhatsApp",
  "crear stickers",
  "stickers con AI",
  "stickers inteligencia artificial",
  "stickers gratis WhatsApp",
  "generador de stickers",
  "WhatsApp stickers México",
  "Sticky",
];

export function getSiteUrl(): URL {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  return new URL(url);
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "es_MX",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteName} — Crea stickers para WhatsApp con AI`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: getSiteUrl().toString() }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} — Crea stickers para WhatsApp con AI`,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Crea stickers para WhatsApp con AI`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/sticky-logo.png",
    apple: "/sticky-logo.png",
  },
};
