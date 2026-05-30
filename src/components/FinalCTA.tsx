import { whatsappLink } from "@/lib/whatsapp";

const WA_LINK = whatsappLink("Hola");

export default function FinalCTA() {
  return (
    <section
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big glow */}
      <div
        className="spray-circle"
        style={{
          width: 800,
          height: 800,
          background: "#FF8100",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.07,
          filter: "blur(80px)",
        }}
      />

      {/* Border top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(255,129,0,0.5), transparent)",
        }}
      />

      <div
        className="max-w-4xl mx-auto px-4 sm:px-6"
        style={{ textAlign: "center", position: "relative" }}
      >
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(44px, 7.5vw, 96px)",
            color: "#F5F5F5",
            lineHeight: 0.92,
            marginBottom: 24,
          }}
        >
          TU PRÓXIMO STICKER{" "}
          <span style={{ color: "#FF8100" }}>ESTÁ A UN MENSAJE</span>
        </h2>

        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "#888",
            maxWidth: 440,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Abre WhatsApp, escríbele a Sticky y crea tu primer sticker en
          segundos.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-orange animate-glow-pulse"
          style={{ fontSize: 16, padding: "18px 36px" }}
        >
          {/* <span>💬</span> */}
          Haz tu sticker en WhatsApp
        </a>

        <div style={{ marginTop: 24, fontSize: 13, color: "#555" }}>
          Gratis · Sin descargar otra app · Solo WhatsApp
        </div>
      </div>
    </section>
  );
}
