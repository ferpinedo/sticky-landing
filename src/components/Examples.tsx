import Image from "next/image";

type Msg =
  | { type: "in" | "out"; text: string }
  | { type: "img"; emoji: string; caption: string }
  | { type: "img-real"; src: string; caption: string }
  | { type: "sticker"; emoji: string }
  | { type: "sticker-img"; src: string; alt: string }
  | { type: "sticker-img-out"; src: string; alt: string }
  | { type: "sticker-out"; emoji: string }
  | { type: "sticker-labeled"; emoji: string; text: string };

const examples: { label: string; conversation: Msg[] }[] = [
  {
    label: "Foto a sticker",
    conversation: [
      {
        type: "out",
        text: "Hazme un sticker de esta foto, pero que en lugar de la mancuerna esté cargando un garrafón de agua",
      },
      {
        type: "img-real",
        src: "/stickers/foto-gym.jpeg",
        caption: "foto-gym.jpg",
      },
      { type: "in", text: "Va, ahorita te lo hago" },
      {
        type: "sticker-img",
        src: "/stickers/gym.webp",
        alt: "Sticker gym garrafón",
      },
      { type: "in", text: "¡Listo! Aquí está tu sticker" },
    ],
  },
  {
    label: "Crea un sticker desde cero",
    conversation: [
      {
        type: "in",
        text: "Hola, ¿qué sticker deseas hacer hoy?",
      },
      {
        type: "out",
        text: "Por favor, haz un sticker de Michael Jordan clavando una canasta",
      },
      { type: "in", text: "Claro, dame un segundo" },
      {
        type: "sticker-img",
        src: "/stickers/jordan.webp",
        alt: "Sticker Michael Jordan clavando una canasta",
      },
      { type: "in", text: "Listo" },
    ],
  },
  {
    label: "Modifica stickers existentes",
    conversation: [
      { type: "out", text: 'Ponle "Amo las conchas" a este sticker' },
      {
        type: "sticker-img-out",
        src: "/stickers/concha.webp",
        alt: "Concha sticker",
      },
      { type: "in", text: "Listo, aquí va con el texto" },
      {
        type: "sticker-img",
        src: "/stickers/amolasconchas.webp",
        alt: "Amo las conchas sticker",
      },
    ],
  },
  {
    label: "Stickers para tu negocio",
    conversation: [
      { type: "out", text: "Convierte mi logo en sticker" },
      {
        type: "img-real",
        src: "/stickers/quentli-logo.png",
        caption: "logo.png",
      },
      { type: "in", text: "¡Perfecto! Aquí está tu sticker de marca" },
      {
        type: "sticker-img",
        src: "/stickers/quentli-sticker.webp",
        alt: "Sticker logo",
      },
    ],
  },
];

function MiniChat({ conversation }: { conversation: Msg[] }) {
  return (
    <div
      style={{
        background: "#0d1418",
        borderRadius: 12,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        flex: 1,
      }}
    >
      {conversation.map((msg, i) => {
        if (msg.type === "in") {
          return (
            <div
              key={i}
              style={{
                alignSelf: "flex-start",
                background: "#202c33",
                color: "#e9edef",
                padding: "5px 9px",
                borderRadius: "8px 8px 8px 2px",
                fontSize: 11.5,
                maxWidth: "78%",
              }}
            >
              {msg.text}
            </div>
          );
        }
        if (msg.type === "out") {
          return (
            <div
              key={i}
              style={{
                alignSelf: "flex-end",
                background: "#005c4b",
                color: "#e9edef",
                padding: "5px 9px",
                borderRadius: "8px 8px 2px 8px",
                fontSize: 11.5,
                maxWidth: "78%",
              }}
            >
              {msg.text}
            </div>
          );
        }
        if (msg.type === "img") {
          return (
            <div
              key={i}
              style={{
                alignSelf: "flex-end",
                background: "#2a3942",
                borderRadius: 8,
                width: 90,
                height: 70,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                gap: 2,
              }}
            >
              {msg.emoji}
              <span style={{ fontSize: 9, color: "#8696a0" }}>
                {msg.caption}
              </span>
            </div>
          );
        }
        if (msg.type === "img-real") {
          return (
            <div
              key={i}
              style={{
                alignSelf: "flex-end",
                borderRadius: 10,
                overflow: "hidden",
                width: 90,
                height: 90,
                background: "#1f2c34",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={msg.src}
                alt={msg.caption}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 4,
                  right: 6,
                  fontSize: 9,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {msg.caption}
              </div>
            </div>
          );
        }
        if (msg.type === "sticker-img") {
          return (
            <div key={i} style={{ alignSelf: "flex-start" }}>
              <Image
                src={msg.src}
                alt={msg.alt}
                width={100}
                height={100}
                style={{
                  filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.6))",
                  display: "block",
                }}
              />
            </div>
          );
        }
        if (msg.type === "sticker-img-out") {
          return (
            <div key={i} style={{ alignSelf: "flex-end" }}>
              <Image
                src={msg.src}
                alt={msg.alt}
                width={100}
                height={100}
                style={{
                  filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.6))",
                  display: "block",
                }}
              />
            </div>
          );
        }
        if (msg.type === "sticker") {
          return (
            <div
              key={i}
              style={{
                alignSelf: "flex-start",
                fontSize: 44,
                padding: 4,
                filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.5))",
              }}
            >
              {msg.emoji}
            </div>
          );
        }
        if (msg.type === "sticker-out") {
          return (
            <div
              key={i}
              style={{
                alignSelf: "flex-end",
                fontSize: 44,
                padding: 4,
                filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.5))",
              }}
            >
              {msg.emoji}
            </div>
          );
        }
        if (msg.type === "sticker-labeled") {
          return (
            <div
              key={i}
              style={{
                alignSelf: "flex-start",
                position: "relative",
                fontSize: 44,
                padding: 4,
                filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.5))",
              }}
            >
              {msg.emoji}
              <div
                style={{
                  position: "absolute",
                  bottom: 2,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: 9,
                  fontWeight: 900,
                  color: "white",
                  textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                  letterSpacing: "0.06em",
                }}
              >
                {msg.text}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function Examples() {
  return (
    <section
      id="ejemplos"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: "#161616",
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
          left: -200,
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag">Ejemplos</div>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)", color: "#F5F5F5" }}
          >
            LO QUE STICKY <span style={{ color: "#FF8100" }}>PUEDE HACER</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#888",
              marginTop: 12,
              maxWidth: 500,
              margin: "12px auto 0",
            }}
          >
            Desde fotos hasta reacciones chistosas, stickers de marca y más.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {examples.map((ex, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                background: "#1E1E1E",
                border: "1px solid #2A2A2A",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid #2A2A2A",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#FF8100",
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#FF8100",
                    letterSpacing: "0.05em",
                  }}
                >
                  {ex.label}
                </span>
              </div>
              <div
                style={{
                  padding: 12,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MiniChat conversation={ex.conversation} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
