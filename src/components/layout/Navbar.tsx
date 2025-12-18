import { useState } from "react";
import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        {/* Branding */}
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg shadow-teal-500/40" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">{siteConfig.name}</span>
            <span className="text-xs text-slate-400">{siteConfig.role}</span>
          </div>
        </a>

        {/* Navegación + enlaces sociales */}
        <nav
          aria-label="Navegación principal"
          className="flex flex-1 items-center justify-end gap-4"
        >
          {/* Links de navegación (desktop) */}
          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-teal-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Enlaces a redes (GitHub / LinkedIn) - solo desktop */}
          <div className="hidden items-center gap-3 md:flex">
            {/* GitHub */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-teal-400 hover:text-teal-400"
              aria-label="Ver perfil de GitHub"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-teal-400 hover:text-teal-400"
              aria-label="Ver perfil de LinkedIn"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.39h4.52V24H.24V8.39zM8.46 8.39h4.33v2.12h.06c.6-1.14 2.06-2.34 4.23-2.34 4.52 0 5.35 2.98 5.35 6.85V24h-4.52v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24H8.46V8.39z"
                />
              </svg>
            </a>
          </div>

          {/* Botón menú (mobile) */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 md:hidden"
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Abrir menú</span>
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </nav>
      </Container>

      {/* Menú mobile */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur md:hidden">
          <Container className="py-3">
            <ul className="flex flex-col gap-2 text-sm font-medium text-slate-200">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-md px-2 py-2 hover:bg-slate-900/80 hover:text-teal-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Redes también en mobile */}
            <div className="mt-3 flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-100 hover:border-teal-400 hover:text-teal-400"
              >
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-100 hover:border-teal-400 hover:text-teal-400"
              >
                LinkedIn
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};