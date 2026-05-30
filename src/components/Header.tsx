"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const WA_LINK = "https://wa.me/525586444339?text=Hazme%20un%20sticker%20que%20";

const navLinks = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#ejemplos", label: "Casos de uso" },
  { href: "/#negocios", label: "Para negocios" },
  { href: "/#gratis", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(18,18,18,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,42,42,0.8)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/sticky-logo.png"
            alt="Sticky"
            width={44}
            height={44}
            priority
            style={{ borderRadius: 10, background: "white" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-orange text-sm"
        >
          <span>💬</span>
          Haz tu sticker
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-200"
            style={
              menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}
            }
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-200"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-200"
            style={
              menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}
            }
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(18,18,18,0.97)",
            borderTop: "1px solid #2A2A2A",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-gray-200 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange text-sm mt-2 justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <span>💬</span>
            Haz tu sticker
          </a>
        </div>
      )}
    </header>
  );
}
