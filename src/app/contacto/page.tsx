import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Sticky",
  description: "Comunícate con el equipo de Sticky.",
};

const WA_LINK = "https://wa.me/525586444339?text=Hazme%20un%20sticker%20que%20";

export default function Contacto() {
  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: 100,
          paddingBottom: 80,
          minHeight: "100vh",
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
            top: "30%",
            right: -200,
            opacity: 0.06,
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#666",
              textDecoration: "none",
              marginBottom: 40,
            }}
          >
            ← Regresar
          </Link>

          <div className="section-tag">Contacto</div>

          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(44px, 7vw, 80px)",
              color: "#F5F5F5",
              marginBottom: 16,
              lineHeight: 0.92,
            }}
          >
            HABLEMOS
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#AAA",
              lineHeight: 1.7,
              marginBottom: 60,
              maxWidth: 500,
            }}
          >
            ¿Tienes preguntas, ideas o quieres saber más sobre Sticky?
            Escríbenos, con gusto te respondemos.
          </p>

          {/* Contact options */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 480,
            }}
          >
            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "#1E1E1E",
                border: "1px solid #2A2A2A",
                borderRadius: 16,
                padding: 24,
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              className="feature-card"
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(0, 168, 132, 0.1)",
                  border: "1px solid rgba(0,168,132,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  flexShrink: 0,
                }}
              >
                💬
              </div>
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#F5F5F5",
                    marginBottom: 4,
                  }}
                >
                  Haz tu sticker en WhatsApp
                </div>
                <div style={{ fontSize: 13, color: "#666" }}>
                  La forma más rápida de probar y hacer preguntas
                </div>
              </div>
              <div style={{ marginLeft: "auto", color: "#555", fontSize: 18 }}>
                →
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:fer@quentli.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "#1E1E1E",
                border: "1px solid #2A2A2A",
                borderRadius: 16,
                padding: 24,
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              className="feature-card"
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(255,129,0,0.1)",
                  border: "1px solid rgba(255,129,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  flexShrink: 0,
                }}
              >
                ✉️
              </div>
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#F5F5F5",
                    marginBottom: 4,
                  }}
                >
                  fer@quentli.com
                </div>
                <div style={{ fontSize: 13, color: "#666" }}>
                  Para temas de negocios, prensa o soporte
                </div>
              </div>
              <div style={{ marginLeft: "auto", color: "#555", fontSize: 18 }}>
                →
              </div>
            </a>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #2A2A2A",
              marginTop: 60,
              paddingTop: 40,
            }}
          >
            <p style={{ fontSize: 14, color: "#555", marginBottom: 20 }}>
              ¿Quieres probar Sticky ahora mismo?
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
              style={{ fontSize: 15 }}
            >
              <span>✦</span>
              Crear mi primer sticker gratis
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
