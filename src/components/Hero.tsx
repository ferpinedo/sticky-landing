import PhoneMockup from "./PhoneMockup";

const WA_LINK = "https://wa.me/525586444339?text=Hola";

export default function Hero() {
  return (
    <section
      className="pt-32 md:pt-20"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingBottom: 60,
      }}
    >
      {/* Background blobs */}
      <div
        className="spray-circle"
        style={{
          width: 600,
          height: 600,
          background: "#FF8100",
          top: -100,
          left: -100,
        }}
      />
      <div
        className="spray-circle"
        style={{
          width: 400,
          height: 400,
          background: "#FF8100",
          bottom: 0,
          right: 100,
          opacity: 0.05,
        }}
      />
      {/* Dot grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Two-column layout via CSS media query workaround with flex-wrap */}
        <div className="flex flex-wrap items-center justify-between gap-y-20 md:gap-12">
          {/* Copy */}
          <div style={{ flex: "1 1 min(100%, 580px)" }}>
            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(56px, 9vw, 100px)",
                lineHeight: 0.92,
                color: "#F5F5F5",
                marginBottom: 24,
              }}
            >
              CREA STICKERS{" "}
              <span style={{ color: "#FF8100" }}>PARA WHATSAPP</span> EN
              SEGUNDOS
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2.2vw, 19px)",
                color: "#AAAAAA",
                lineHeight: 1.65,
                marginBottom: 36,
                maxWidth: 500,
              }}
            >
              Pídele un sticker, mándale una foto o edita uno que ya tengas.{" "}
              <strong style={{ color: "#F5F5F5" }}>
                Sticky lo hace con AI,
              </strong>{" "}
              directo en WhatsApp.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange animate-glow-pulse"
                style={{ fontSize: 15 }}
              >
                {/* <span>💬</span> */}
                Haz tu sticker en WhatsApp
              </a>
            </div>

            <p style={{ fontSize: 13, color: "#666", letterSpacing: "0.02em" }}>
              <span style={{ color: "#FF8100", fontWeight: 700 }}>Gratis.</span>{" "}
              Sin descargar otra app. Solo WhatsApp.
            </p>

            {/* Feature pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 28,
              }}
            >
              {[
                "🤖 AI generativa",
                "⚡️ En segundos",
                "📱 Solo WhatsApp",
                "🆓 Sin costo",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#888",
                    background: "#1E1E1E",
                    border: "1px solid #2A2A2A",
                    borderRadius: 100,
                    padding: "5px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div
            style={{
              flex: "1 1 300px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
