import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const initials =
    siteConfig.name
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "DEV";

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  // Sombra al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_10px_40px_rgba(15,23,42,0.9)]" : ""
      }`}
    >
      <Container className="flex h-14 items-center justify-between gap-3 sm:h-16">
        {/* Branding gamer */}
        <a href="#home" className="flex items-center gap-3" onClick={close}>
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-500 opacity-90 shadow-[0_0_25px_rgba(45,212,191,0.7)]" />
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl">
              <span className="text-xs font-bold tracking-tight text-slate-950">
                {initials}
              </span>
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="max-w-[150px] truncate text-xs font-semibold sm:max-w-none sm:text-sm">
              {siteConfig.name}
            </span>
            <span className="hidden text-[10px] text-slate-400 xs:block sm:text-xs">
              {siteConfig.role}
            </span>
          </div>
        </a>

        {/* Navegación desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 text-xs font-medium text-slate-200 md:flex lg:text-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-1 pb-0.5 transition-colors hover:text-teal-400"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px translate-y-1 bg-gradient-to-r from-transparent via-teal-400/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}

          {/* Actions desktop */}
          <div className="ml-3 flex items-center gap-2">
            <a
              href={siteConfig.cvUrl}
              download
              className="hidden items-center justify-center rounded-md border border-teal-500/50 bg-teal-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.4)] transition hover:bg-teal-500/20 lg:inline-flex"
            >
              CV
            </a>

            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-200 transition hover:border-teal-400 hover:text-teal-400"
              aria-label="Ver perfil de GitHub"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z"
                />
              </svg>
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-200 transition hover:border-teal-400 hover:text-teal-400"
              aria-label="Ver perfil de LinkedIn"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.39h4.52V24H.24V8.39zM8.46 8.39h4.33v2.12h.06c.6-1.14 2.06-2.34 4.23-2.34 4.52 0 5.35 2.98 5.35 6.85V24h-4.52v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24H8.46V8.39z"
                />
              </svg>
            </a>
          </div>
        </nav>

        {/* Botón menú (mobile) */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 md:hidden"
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
          onClick={toggle}
        >
          <span className="sr-only">Abrir menú</span>
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-4 bg-current" />
          <span className="mt-1 block h-0.5 w-3 bg-current" />
        </button>
      </Container>

      {/* Menú mobile */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/98 backdrop-blur md:hidden">
          <Container className="py-3">
            <nav aria-label="Navegación móvil">
              <ul className="flex flex-col gap-0.5 text-sm font-medium text-slate-200">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={close}
                      className="block rounded-md px-2 py-1.75 hover:bg-slate-900 hover:text-teal-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex items-center justify-between gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-teal-400 hover:text-teal-400"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fill="currentColor"
                      d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-teal-400 hover:text-teal-400"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fill="currentColor"
                      d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.39h4.52V24H.24V8.39zM8.46 8.39h4.33v2.12h.06c.6-1.14 2.06-2.34 4.23-2.34 4.52 0 5.35 2.98 5.35 6.85V24h-4.52v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24H8.46V8.39z"
                    />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};