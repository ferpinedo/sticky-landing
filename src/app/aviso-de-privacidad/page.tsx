import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Sticky",
  description:
    "Aviso de privacidad de Sticky, el asistente de WhatsApp para crear stickers con AI.",
};

export default function AvisoDePrivacidad() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 100, paddingBottom: 80, minHeight: "100vh" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back link */}
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

          <div className="section-tag">Legal</div>

          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "#F5F5F5",
              marginBottom: 8,
            }}
          >
            AVISO DE PRIVACIDAD
          </h1>

          <p style={{ fontSize: 13, color: "#555", marginBottom: 48 }}>
            Última actualización: mayo 2025
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 36,
              fontSize: 15,
              color: "#AAA",
              lineHeight: 1.8,
            }}
          >
            <Section title="1. Identidad y contacto del responsable">
              <p>
                El responsable del tratamiento de tus datos personales es{" "}
                <strong style={{ color: "#F5F5F5" }}>Sticky</strong>, operado
                por su fundador. Para cualquier asunto relacionado con tu
                privacidad, puedes comunicarte al correo electrónico:{" "}
                <a href="mailto:fer@quentli.com" style={{ color: "#FF8100" }}>
                  fer@quentli.com
                </a>
              </p>
            </Section>

            <Section title="2. Datos que se pueden recopilar">
              <p>
                Al interactuar con Sticky a través de WhatsApp, es posible que
                se procese la siguiente información:
              </p>
              <ul
                style={{
                  paddingLeft: 20,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <li>Número de teléfono asociado a tu cuenta de WhatsApp.</li>
                <li>Mensajes de texto que envíes al número de Sticky.</li>
                <li>
                  Imágenes o archivos que compartas para crear o editar
                  stickers.
                </li>
                <li>Stickers existentes que envíes para modificación.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                No se recopilan datos adicionales más allá de lo necesario para
                prestar el servicio.
              </p>
            </Section>

            <Section title="3. Finalidades del tratamiento">
              <p>Tus datos se utilizan exclusivamente para:</p>
              <ul
                style={{
                  paddingLeft: 20,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <li>
                  Crear stickers personalizados a partir de tus indicaciones.
                </li>
                <li>Procesar y devolver las imágenes resultantes.</li>
                <li>Mejorar la calidad del servicio de Sticky.</li>
                <li>Atender solicitudes de soporte o contacto.</li>
              </ul>
            </Section>

            <Section title="4. Uso de WhatsApp y servicios de terceros">
              <p>
                Sticky opera a través de la API de WhatsApp Business. El uso de
                WhatsApp está sujeto a los{" "}
                <a
                  href="https://www.whatsapp.com/legal/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FF8100" }}
                >
                  Términos de Servicio de WhatsApp
                </a>{" "}
                y su{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FF8100" }}
                >
                  Política de Privacidad
                </a>
                .
              </p>
              <p style={{ marginTop: 12 }}>
                Sticky puede utilizar servicios de inteligencia artificial de
                terceros para generar stickers. Dichos servicios pueden procesar
                las imágenes y textos enviados conforme a sus propias políticas
                de privacidad.
              </p>
            </Section>

            <Section title="5. Conservación de datos">
              <p>
                Los datos procesados durante la creación de stickers se
                conservan el tiempo estrictamente necesario para prestar el
                servicio. Las imágenes compartidas no se almacenan de manera
                permanente salvo que sea necesario para el funcionamiento del
                servicio. No compartimos tus datos con terceros con fines
                comerciales o publicitarios.
              </p>
            </Section>

            <Section title="6. Derechos de los usuarios">
              <p>
                En cualquier momento puedes ejercer los siguientes derechos
                enviando un correo a{" "}
                <a href="mailto:fer@quentli.com" style={{ color: "#FF8100" }}>
                  fer@quentli.com
                </a>
                :
              </p>
              <ul
                style={{
                  paddingLeft: 20,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <li>
                  <strong style={{ color: "#F5F5F5" }}>Acceso:</strong> Conocer
                  qué datos personales tenemos sobre ti.
                </li>
                <li>
                  <strong style={{ color: "#F5F5F5" }}>Rectificación:</strong>{" "}
                  Corregir datos inexactos o incompletos.
                </li>
                <li>
                  <strong style={{ color: "#F5F5F5" }}>Cancelación:</strong>{" "}
                  Solicitar la eliminación de tus datos.
                </li>
                <li>
                  <strong style={{ color: "#F5F5F5" }}>Oposición:</strong>{" "}
                  Oponerte al tratamiento de tus datos para fines específicos.
                </li>
              </ul>
            </Section>

            <Section title="7. Cambios a este aviso de privacidad">
              <p>
                Sticky se reserva el derecho de modificar este aviso de
                privacidad en cualquier momento. Los cambios serán publicados en
                este sitio web. Se recomienda revisarlo periódicamente. El uso
                continuado del servicio después de cualquier modificación
                implica la aceptación del aviso actualizado.
              </p>
            </Section>

            <Section title="8. Contacto">
              <p>
                Para cualquier duda, aclaración o ejercicio de derechos
                relacionados con tu privacidad, contáctanos en:{" "}
                <a href="mailto:fer@quentli.com" style={{ color: "#FF8100" }}>
                  fer@quentli.com
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#F5F5F5",
          marginBottom: 12,
          paddingBottom: 10,
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {children}
      </div>
    </div>
  );
}
