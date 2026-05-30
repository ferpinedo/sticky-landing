const features = [
  {
    emoji: "✍️",
    title: "De texto a sticker",
    desc: "Describe lo que quieres y Sticky lo crea. Escribe tu idea y recibe el sticker perfecto.",
  },
  {
    emoji: "📸",
    title: "De foto a sticker",
    desc: "Manda cualquier foto y Sticky la convierte en un sticker listo para compartir en segundos.",
  },
  {
    emoji: "✂️",
    title: "Edita stickers existentes",
    desc: "Manda un sticker que ya tienes y pídele a Sticky que lo modifique, cambie estilo o remix.",
  },
  {
    emoji: "💬",
    title: "Agrega texto con estilo",
    desc: "Ponle frases, reacciones, captions o mensajes de marca directamente sobre el sticker.",
  },
  {
    emoji: "🤖",
    title: "AI directo en WhatsApp",
    desc: "Sin salir de WhatsApp. Sin apps extra. Sticky vive donde ya tienes todas tus conversaciones.",
  },
  {
    emoji: "🆓",
    title: "Gratis",
    desc: "Empieza a crear stickers sin pagar nada. Acceso gratuito desde el primer mensaje.",
  },
];

export default function Features() {
  return (
    <section
      id="funciones"
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
          width: 500,
          height: 500,
          background: "#FF8100",
          bottom: -100,
          right: -100,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div style={{ marginBottom: 60 }}>
          <div className="section-tag">Funciones</div>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)", color: "#F5F5F5", maxWidth: 600 }}
          >
            TODO LO QUE{" "}
            <span style={{ color: "#FF8100" }}>STICKY PUEDE HACER</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                background: "#1E1E1E",
                border: "1px solid #2A2A2A",
                borderRadius: 16,
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Orange top border */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 24,
                  right: 24,
                  height: 2,
                  background: "linear-gradient(90deg, #FF8100, transparent)",
                  opacity: 0.5,
                }}
              />

              <div style={{ fontSize: 36, marginBottom: 16 }}>{f.emoji}</div>

              <h3
                className="font-heading"
                style={{ fontSize: 26, color: "#F5F5F5", marginBottom: 10 }}
              >
                {f.title}
              </h3>

              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
