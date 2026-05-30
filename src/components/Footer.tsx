import Link from "next/link";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/1234567890?text=Hola%20Sticky%2C%20quiero%20crear%20un%20sticker";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#negocios", label: "Para negocios" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/aviso-de-privacidad", label: "Aviso de Privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0E0E0E",
        borderTop: "1px solid #1E1E1E",
        paddingTop: 60,
        paddingBottom: 40,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: 16 }}>
              <Image src="/sticky-logo.svg" alt="Sticky" width={110} height={30} />
            </Link>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 20, maxWidth: 220 }}>
              Crea stickers para WhatsApp con AI, directo en la app. Gratis, sin descargas.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 700,
                color: "#FF8100",
                textDecoration: "none",
                padding: "8px 16px",
                border: "1px solid rgba(255,129,0,0.3)",
                borderRadius: 8,
                transition: "background 0.2s",
              }}
            >
              <span>💬</span> Escribirle a Sticky
            </a>
          </div>

          {/* Nav column */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: 16,
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: 14,
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    className="hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: 16,
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: 14,
                      color: "#888",
                      textDecoration: "none",
                    }}
                    className="hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: 16,
              }}
            >
              Contacto
            </h4>
            <a
              href="mailto:fer@quentli.com"
              style={{ fontSize: 14, color: "#888", textDecoration: "none" }}
              className="hover:text-white"
            >
              fer@quentli.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1E1E1E",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "#444" }}>
            © {new Date().getFullYear()} Sticky. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 13, color: "#333" }}>
            Hecho con 🧡 y AI
          </p>
        </div>
      </div>
    </footer>
  );
}
