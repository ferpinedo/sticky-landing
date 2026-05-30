import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sticky — Crea stickers para WhatsApp con AI",
  description:
    "Crea stickers para WhatsApp en segundos con inteligencia artificial. Manda una foto, describe tu idea o edita un sticker que ya tienes. Gratis, sin descargar otra app.",
  openGraph: {
    title: "Sticky — Crea stickers para WhatsApp con AI",
    description:
      "Crea stickers para WhatsApp en segundos con inteligencia artificial. Gratis, sin descargar otra app.",
    type: "website",
    images: ["/sticky-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${inter.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          background: "#121212",
          color: "#F5F5F5",
        }}
      >
        {children}
      </body>
    </html>
  );
}
