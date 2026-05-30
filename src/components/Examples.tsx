const examples = [
  {
    label: "Foto a sticker",
    conversation: [
      { type: "out", text: "Hazme un sticker de esta foto de mi gato 😄" },
      { type: "in",  text: "Claro, mándame la foto 🧡" },
      { type: "img", emoji: "🐱", caption: "gato.jpg" },
      { type: "in",  text: "Listo, aquí está tu sticker 🎨" },
      { type: "sticker", emoji: "🐱✨" },
    ],
  },
  {
    label: "Agregar texto",
    conversation: [
      { type: "out", text: 'Ponle "Modo bestia" a este sticker' },
      { type: "sticker-out", emoji: "💪" },
      { type: "in",  text: "Hecho 😎" },
      { type: "sticker-labeled", emoji: "💪", text: "MODO BESTIA" },
    ],
  },
  {
    label: "Editar sticker",
    conversation: [
      { type: "out", text: "Hazlo en versión zombie" },
      { type: "sticker-out", emoji: "😎" },
      { type: "in",  text: "Aquí tu sticker zombie 🧟" },
      { type: "sticker", emoji: "🧟" },
    ],
  },
  {
    label: "Reacción chistosa",
    conversation: [
      { type: "out", text: 'Crea un sticker de "no gracias"' },
      { type: "in",  text: "Va, aquí va 😂" },
      { type: "sticker-labeled", emoji: "🙅", text: "NO GRACIAS" },
    ],
  },
  {
    label: "Logo de negocio",
    conversation: [
      { type: "out", text: "Mándale mi logo para crear un sticker de mi negocio" },
      { type: "img", emoji: "🏪", caption: "logo.png" },
      { type: "in",  text: "¡Perfecto! Aquí está tu sticker de marca 🧡" },
      { type: "sticker", emoji: "🏷️✨" },
    ],
  },
  {
    label: "Sticker de texto",
    conversation: [
      { type: "out", text: 'Hazme un sticker que diga "Ya valió"' },
      { type: "in",  text: "Aquí está 😄" },
      { type: "sticker-labeled", emoji: "😬", text: "YA VALIÓ" },
    ],
  },
];

function MiniChat({ conversation }: { conversation: typeof examples[0]["conversation"] }) {
  return (
    <div
      style={{
        background: "#0d1418",
        borderRadius: 12,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        minHeight: 160,
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
              {"emoji" in msg ? msg.emoji : null}
              <span style={{ fontSize: 9, color: "#8696a0" }}>{"caption" in msg ? msg.caption : null}</span>
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
            LO QUE STICKY{" "}
            <span style={{ color: "#FF8100" }}>PUEDE HACER</span>
          </h2>
          <p style={{ fontSize: 16, color: "#888", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
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
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid #2A2A2A",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
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
                <span style={{ fontSize: 12, fontWeight: 700, color: "#FF8100", letterSpacing: "0.05em" }}>
                  {ex.label}
                </span>
              </div>

              {/* Chat preview */}
              <div style={{ padding: 12 }}>
                <MiniChat conversation={ex.conversation} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
