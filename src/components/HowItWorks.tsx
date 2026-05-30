const steps = [
  {
    number: "01",
    emoji: "💬",
    title: "Escríbele a Sticky",
    desc: "Busca a Sticky en WhatsApp y empieza a chatear. No necesitas descargar nada ni crear una cuenta.",
  },
  {
    number: "02",
    emoji: "📸",
    title: "Mándale una idea, foto o sticker",
    desc: "Describe lo que quieres, sube una foto, o mándale un sticker existente para editarlo. Sticky entiende todo.",
  },
  {
    number: "03",
    emoji: "✨",
    title: "Recibe tu sticker al instante",
    desc: "En segundos recibirás tu sticker listo para usar y compartir. Sin esperas, sin complicaciones.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
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
          top: "50%",
          right: -150,
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">Cómo funciona</div>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#F5F5F5" }}
          >
            TAN FÁCIL COMO{" "}
            <span style={{ color: "#FF8100" }}>MANDAR UN MENSAJE</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                background: "#1E1E1E",
                border: "1px solid #2A2A2A",
                borderRadius: 20,
                padding: 32,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Big number watermark */}
              <div
                className="font-heading"
                style={{
                  position: "absolute",
                  top: -10,
                  right: 16,
                  fontSize: 120,
                  color: "rgba(255,129,0,0.06)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {step.number}
              </div>

              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: "rgba(255,129,0,0.12)",
                  border: "1px solid rgba(255,129,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 20,
                }}
              >
                {step.emoji}
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#FF8100",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Paso {step.number}
              </div>

              <h3
                className="font-heading"
                style={{
                  fontSize: 28,
                  color: "#F5F5F5",
                  marginBottom: 12,
                  lineHeight: 1.1,
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: 15, color: "#888", lineHeight: 1.6 }}>
                {step.desc}
              </p>

              {/* Bottom orange line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 32,
                  right: 32,
                  height: 2,
                  background: "linear-gradient(90deg, #FF8100, transparent)",
                  borderRadius: 2,
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
