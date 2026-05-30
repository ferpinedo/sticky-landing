import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Sticky",
  description:
    "Términos y condiciones de uso de Sticky, el asistente de WhatsApp para crear stickers con AI.",
};

export default function TerminosYCondiciones() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 100, paddingBottom: 80, minHeight: "100vh" }}>
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

          <div className="section-tag">Legal</div>

          <h1
            className="font-heading"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "#F5F5F5",
              marginBottom: 8,
            }}
          >
            TÉRMINOS Y CONDICIONES
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
            <Section title="1. Descripción del servicio">
              <p>
                Sticky es un asistente de inteligencia artificial que permite a
                los usuarios crear, editar y personalizar stickers para WhatsApp
                mediante conversaciones de mensajería. El servicio opera a
                través del canal de WhatsApp y utiliza tecnología de AI
                generativa para producir contenido visual.
              </p>
            </Section>

            <Section title="2. Aceptación de los términos">
              <p>
                Al iniciar una conversación con Sticky y usar el servicio, el
                usuario acepta estos términos y condiciones. Si no estás de
                acuerdo con alguno de los términos, debes abstenerte de usar el
                servicio.
              </p>
            </Section>

            <Section title="3. Responsabilidades del usuario">
              <p>Al usar Sticky, el usuario se compromete a:</p>
              <ul
                style={{
                  paddingLeft: 20,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <li>Usar el servicio de manera lícita y respetuosa.</li>
                <li>
                  No enviar contenido ilegal, ofensivo, difamatorio o que
                  infrinja derechos de terceros.
                </li>
                <li>
                  No compartir imágenes de otras personas sin su consentimiento.
                </li>
                <li>
                  No usar el servicio para actividades fraudulentas o
                  maliciosas.
                </li>
                <li>
                  Respetar los derechos de propiedad intelectual de terceros en
                  el contenido que comparte.
                </li>
              </ul>
            </Section>

            <Section title="4. Uso aceptable">
              <p>
                Sticky está diseñado para la creación de stickers para uso
                personal y comercial legítimo. Está prohibido:
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
                  Crear contenido que promueva el odio, discriminación o
                  violencia.
                </li>
                <li>
                  Generar imágenes sexualmente explícitas o de contenido adulto
                  sin el contexto adecuado.
                </li>
                <li>
                  Intentar manipular o eludir los sistemas de seguridad del
                  servicio.
                </li>
                <li>
                  Usar el servicio de manera automatizada o mediante bots no
                  autorizados.
                </li>
              </ul>
            </Section>

            <Section title="5. Contenido generado por AI">
              <p>
                Los stickers y demás contenido producido por Sticky son
                generados por inteligencia artificial. Sticky no garantiza que
                el contenido generado sea siempre perfecto, exacto o libre de
                errores. El usuario es responsable del uso que haga del
                contenido generado.
              </p>
              <p style={{ marginTop: 12 }}>
                El contenido generado puede estar sujeto a las políticas de uso
                de los servicios de AI utilizados. Sticky no reclama derechos de
                propiedad intelectual sobre el contenido generado a partir de
                los insumos del usuario.
              </p>
            </Section>

            <Section title="6. Acceso gratuito">
              <p>
                Sticky actualmente ofrece acceso gratuito a sus funciones
                principales. Sticky se reserva el derecho de modificar en el
                futuro las condiciones de acceso, introducir planes de pago
                opcionales o cambiar las características disponibles. Cualquier
                cambio significativo será comunicado a los usuarios con
                anticipación razonable.
              </p>
            </Section>

            <Section title="7. Disponibilidad del servicio">
              <p>
                Sticky realizará sus mejores esfuerzos para mantener el servicio
                disponible de manera continua. Sin embargo, no garantiza
                disponibilidad ininterrumpida. El servicio puede estar sujeto a
                interrupciones por mantenimiento, actualizaciones o causas fuera
                del control de Sticky. No nos hacemos responsables por pérdidas
                derivadas de la interrupción temporal del servicio.
              </p>
            </Section>

            <Section title="8. Propiedad intelectual">
              <p>
                La marca Sticky, su diseño, logotipo y demás elementos de
                identidad son propiedad de sus creadores. Queda prohibida su
                reproducción o uso sin autorización expresa.
              </p>
              <p style={{ marginTop: 12 }}>
                El contenido que el usuario envía a Sticky (fotos, stickers,
                texto) permanece como propiedad del usuario. Al enviar
                contenido, el usuario otorga a Sticky los permisos necesarios
                para procesarlo únicamente con el fin de generar el sticker
                solicitado.
              </p>
            </Section>

            <Section title="9. Limitación de responsabilidad">
              <p>
                Sticky no será responsable por daños directos, indirectos,
                incidentales o consecuentes derivados del uso o imposibilidad de
                uso del servicio. El servicio se ofrece &quot;tal cual&quot; sin
                garantías expresas o implícitas de ningún tipo.
              </p>
            </Section>

            <Section title="10. Cambios a los términos">
              <p>
                Sticky se reserva el derecho de modificar estos términos en
                cualquier momento. Los cambios serán publicados en este sitio.
                El uso continuado del servicio después de publicados los cambios
                implica la aceptación de los términos actualizados.
              </p>
            </Section>

            <Section title="11. Contacto">
              <p>
                Para preguntas o comentarios sobre estos términos, puedes
                escribirnos a:{" "}
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
