import Image from "next/image";

const WA_LINK = "https://wa.me/525586444339?text=Hola";

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

          {/* Visual — mini WhatsApp chat */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "#0d1418",
                borderRadius: 20,
                overflow: "hidden",
                width: 280,
                boxShadow: "0 0 0 1px #2A2A2A, 0 24px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Mini WA header */}
              <div
                style={{
                  background: "#1f2c34",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image
                  src="/sticky-logo.png"
                  alt="Sticky"
                  width={32}
                  height={32}
                  style={{
                    borderRadius: "50%",
                    background: "#1a1a1a",
                    padding: 3,
                    objectFit: "contain",
                  }}
                />
                <div>
                  <div
                    style={{ fontSize: 13, fontWeight: 600, color: "#e9edef" }}
                  >
                    Sticky
                  </div>
                  <div style={{ fontSize: 11, color: "#8696a0" }}>en línea</div>
                </div>
              </div>

              {/* Messages */}
              <div
                style={{
                  padding: "12px 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  background: "#0d1418",
                }}
              >
                {/* User sends logo */}
                <div
                  style={{
                    alignSelf: "flex-end",
                    fontSize: 12,
                    color: "#e9edef",
                    background: "#005c4b",
                    padding: "6px 10px",
                    borderRadius: "8px 8px 2px 8px",
                    maxWidth: "78%",
                  }}
                >
                  Mira, este es el logo de mi empresa 👆
                </div>

                {/* Logo image bubble */}
                <div
                  style={{
                    alignSelf: "flex-end",
                    borderRadius: 10,
                    overflow: "hidden",
                    width: 110,
                    height: 110,
                    background: "#1f2c34",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/stickers/quentli-logo.png"
                    alt="Logo Quentli"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Sticky reply */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 12,
                    color: "#e9edef",
                    background: "#202c33",
                    padding: "6px 10px",
                    borderRadius: "8px 8px 8px 2px",
                    maxWidth: "78%",
                  }}
                >
                  ¡Qué buen logo! Ya lo convierto en sticker 🧡
                </div>

                {/* Sticker result */}
                <div style={{ alignSelf: "flex-start" }}>
                  <Image
                    src="/stickers/quentli-sticker.webp"
                    alt="Sticker Quentli"
                    width={130}
                    height={130}
                    style={{
                      filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.6))",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 12,
                    color: "#e9edef",
                    background: "#202c33",
                    padding: "6px 10px",
                    borderRadius: "8px 8px 8px 2px",
                    maxWidth: "78%",
                  }}
                >
                  Listo ✅ ¿Le agrego texto o lo dejamos así?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
