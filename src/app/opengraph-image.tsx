import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { siteDescription, siteName } from "@/lib/site";

export const alt = `${siteName} — Crea stickers para WhatsApp con AI`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [bebasFont, logoData] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/bebasneue/v16/JTUSjIg69CK48gW7PXooxW4.ttf",
    ).then((res) => res.arrayBuffer()),
    readFile(join(process.cwd(), "public/sticky-logo.png")),
  ]);

  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#121212",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 760,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Bebas Neue",
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              color: "#F5F5F5",
              textTransform: "uppercase",
            }}
          >
            <span>Crea stickers</span>
            <span style={{ color: "#FF8100" }}>para WhatsApp</span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(245, 245, 245, 0.82)",
              maxWidth: 680,
            }}
          >
            {siteDescription}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 22px",
              borderRadius: 999,
              background: "rgba(255, 129, 0, 0.14)",
              border: "1px solid rgba(255, 129, 0, 0.35)",
              color: "#FF8100",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Gratis · Solo WhatsApp · Con AI
          </div>
        </div>

        <img
          src={logoSrc}
          alt={siteName}
          width={220}
          height={220}
          style={{
            borderRadius: 36,
            flexShrink: 0,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bebas Neue",
          data: bebasFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
