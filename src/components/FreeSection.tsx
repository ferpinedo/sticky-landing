import { CheckIcon } from "@heroicons/react/24/solid";

import { whatsappLink } from "@/lib/whatsapp";

const WA_LINK = whatsappLink("Hola");

const featurePills = [
  "Sin tarjeta de crédito",
  "Sin registro",
  "Sin descargar apps",
  "Directo en WhatsApp",
];

export default function FreeSection() {
  return (
    <section
      id="gratis"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="spray-circle"
        style={{
          width: 600,
          height: 600,
          background: "#FF8100",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.06,
        }}
      />

      <div
        className="max-w-4xl mx-auto px-4 sm:px-6"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">Sin costo</div>

        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            color: "#F5F5F5",
            lineHeight: 0.92,
            marginBottom: 24,
          }}
        >
          SIEMPRE{" "}
          <span
            style={{
              color: "#FF8100",
              position: "relative",
              display: "inline-block",
            }}
          >
            GRATIS
            <span
              style={{
                position: "absolute",
                bottom: -2,
                left: -4,
                right: -4,
                height: 6,
                background: "#FF8100",
                borderRadius: 3,
                transform: "skew(-5deg)",
                opacity: 0.4,
              }}
            />
          </span>
        </h2>

        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "#AAA",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
          }}
        >
          Crea stickers con AI sin pagar y sin instalar otra app.{" "}
          <strong style={{ color: "#F5F5F5" }}>
            Solo abre WhatsApp y escríbele a Sticky.
          </strong>
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange animate-glow-pulse"
            style={{ fontSize: 16, padding: "16px 32px" }}
          >
            Usar Sticky gratis
          </a>
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginTop: 36,
          }}
        >
          {featurePills.map((label) => (
            <span
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "#888",
                background: "#1E1E1E",
                border: "1px solid #2A2A2A",
                borderRadius: 100,
                padding: "6px 14px",
              }}
            >
              <CheckIcon
                aria-hidden
                style={{
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "#22C55E",
                }}
              />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
