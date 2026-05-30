"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Sticky tiene costo?",
    a: "No, puedes empezar gratis. Sticky está disponible sin costo desde el primer mensaje.",
  },
  {
    q: "¿Necesito descargar una app?",
    a: "No. Sticky funciona directo por WhatsApp. Solo necesitas tener WhatsApp instalado y buscar a Sticky para empezar.",
  },
  {
    q: "¿Puedo mandar una foto?",
    a: "Sí. Puedes mandar cualquier foto y pedirle a Sticky que la convierta en sticker. En segundos tendrás tu sticker listo.",
  },
  {
    q: "¿Puedo editar un sticker que ya tengo?",
    a: "Sí. Mándale el sticker a Sticky y dile qué quieres cambiar: el estilo, el texto, los colores, o hacerlo completamente diferente.",
  },
  {
    q: "¿Sirve para mi negocio?",
    a: "Sí. Puedes mandar tu logo o ideas de tu marca para crear stickers compartibles que representen a tu negocio. Un buen sticker se comparte solo.",
  },
  {
    q: "¿Puedo agregar texto a un sticker?",
    a: "Sí. Puedes pedirle a Sticky que agregue texto, frases, captions, reacciones o mensajes de marca a cualquier sticker.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: "#161616",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">FAQ</div>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)", color: "#F5F5F5" }}
          >
            PREGUNTAS{" "}
            <span style={{ color: "#FF8100" }}>FRECUENTES</span>
          </h2>
        </div>

        <div
          style={{
            background: "#1E1E1E",
            border: "1px solid #2A2A2A",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item"
              style={{ borderBottom: i === faqs.length - 1 ? "none" : "1px solid #2A2A2A" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontWeight: 600,
                    color: open === i ? "#FF8100" : "#F5F5F5",
                    transition: "color 0.2s",
                    flex: 1,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#FF8100",
                    fontSize: 20,
                    transition: "transform 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    fontSize: 15,
                    color: "#888",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
