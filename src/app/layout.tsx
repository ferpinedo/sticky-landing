import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

import { defaultMetadata } from "@/lib/site";

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

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
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
