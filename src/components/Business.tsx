import Image from "next/image";

const WA_LINK =
  "https://wa.me/525586444339?text=Haz%20un%20sticker%20para%20mi%20negocio%20que%20";

const businessCards = [
  {
    emoji: "🏷️",
    label: "Logo → Sticker",
    desc: "Tu logo convertido en sticker al instante",
  },
  {
    emoji: "🎨",
    label: "Reacciones de marca",
    desc: "Stickers con la personalidad de tu negocio",
  },
  {
    emoji: "📤",
    label: "Viral en WhatsApp",
    desc: "Tus clientes lo comparten y tu marca viaja",
  },
];

export default function Business() {
  return (
    <section
      id="negocios"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: "#161616",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        className="spray-circle"
        style={{
          width: 700,
          height: 700,
          background: "#FF8100",
          top: "50%",
          right: -200,
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Copy */}
          <div style={{ maxWidth: 580 }}>
            <div className="section-tag">Para negocios</div>

            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                color: "#F5F5F5",
                lineHeight: 0.95,
                marginBottom: 24,
              }}
            >
              TU LOGO TAMBIÉN{" "}
              <span style={{ color: "#FF8100" }}>PUEDE SER UN STICKER</span>
            </h2>

            <p
              style={{
                fontSize: 17,
                color: "#AAA",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Envíale tu logo a Sticky y conviértelo en un sticker listo para
              compartir con tus clientes.
            </p>

            <p
              style={{
                fontSize: 17,
                color: "#AAA",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Un buen sticker puede ser{" "}
              <strong style={{ color: "#F5F5F5" }}>
                la mejor publicidad para tu negocio:
              </strong>{" "}
              tus clientes lo usan, lo mandan y tu marca viaja en cada
              conversación.
            </p>

            {/* Business cards */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 36,
              }}
            >
              {businessCards.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "#1E1E1E",
                    border: "1px solid #2A2A2A",
                    borderRadius: 12,
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flex: "1 1 auto",
                    minWidth: 180,
                  }}
                >
                  <span style={{ fontSize: 22 }}>{c.emoji}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#F5F5F5",
                      }}
                    >
                      {c.label}
                    </div>
                    <div style={{ fontSize: 12, color: "#666" }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
              style={{ fontSize: 15 }}
            >
              {/* <span>🏪</span> */}
              Crea un sticker para tu negocio
            </a>
          </div>

          {/* Visual — logo becoming sticker */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {/* Before */}
            <div
              style={{
                background: "#1E1E1E",
                border: "1px solid #2A2A2A",
                borderRadius: 20,
                padding: 28,
                textAlign: "center",
                width: 160,
              }}
            >
              <Image
                src="/stickers/quentli-logo.png"
                alt="Logo Quentli"
                width={80}
                height={80}
                style={{
                  borderRadius: 16,
                  marginBottom: 10,
                  display: "block",
                  marginInline: "auto",
                }}
              />
              <div style={{ fontSize: 11, color: "#555", marginTop: 8 }}>
                Tu logo
              </div>
            </div>

            {/* Arrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 28,
                color: "#FF8100",
              }}
            >
              →
            </div>

            {/* After (sticker style) */}
            <div
              style={{
                transform: "rotate(3deg)",
                filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.5))",
              }}
            >
              <Image
                src="/stickers/quentli-sticker.webp"
                alt="Sticker Quentli"
                width={160}
                height={160}
                style={{
                  borderRadius: 12,
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
