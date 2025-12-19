import { siteConfig } from "../../config/site";
import { Container } from "../ui/Container";
import {
  ReactIcon,
  TypeScriptIcon,
  PythonIcon,
  JavaIcon,
  DatabaseIcon,
  LinuxIcon,
  GitIcon,
} from "../ui/icons";

export const Hero = () => {
  const initials =
    siteConfig.name
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "DEV";

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      aria-label="Presentación personal"
    >
      {/* Fondo sutil con degradado */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div className="relative left-1/2 h-64 w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-teal-500/20 via-sky-500/10 to-transparent opacity-70" />
      </div>

      <Container className="pt-10 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Columna izquierda: avatar, texto y CTAs */}
          <div className="space-y-6">
            {/* Avatar con iniciales */}
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 opacity-80 blur-sm" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-slate-950 shadow-lg shadow-teal-500/40">
                  <span className="rounded-full bg-slate-50/90 px-3 py-1 text-sm tracking-tight text-slate-900">
                    {initials}
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-100">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-slate-400">
                  {siteConfig.role}
                </span>
              </div>
            </div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-400">
              {siteConfig.role}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Desarrollo soluciones{" "}
              <span className="text-teal-400">web y móviles</span> con foco en
              producto real.
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              {siteConfig.description}
            </p>

            <ul className="flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                Sistemas para clínicas odontológicas (gestión de pacientes,
                agenda, historias clínicas, facturación).
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 opacity-80" />
                React · TypeScript · FastAPI · SQL · Linux
              </li>
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-teal-500/40 transition hover:-translate-y-0.5 hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Ver GitHub
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Contacto
              </a>

              <a
                href={siteConfig.cvUrl}
                download
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-sm font-medium text-slate-50 transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Columna derecha: card de Stack / experiencia */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-sky-500/10 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl shadow-teal-500/20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Stack principal
              </p>

              <div className="mt-4 space-y-4 text-sm text-slate-100">
                {/* Backend */}
                <div className="rounded-2xl bg-slate-900/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Backend & APIs
                  </p>
                  <p className="mt-1 font-medium">Python · FastAPI · REST</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Diseño de APIs limpias, tipadas y listas para producción,
                    conectadas a bases de datos SQL.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/60">
                      <PythonIcon className="h-3.5 w-3.5" />
                      <span>Python</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/60">
                      <DatabaseIcon className="h-3.5 w-3.5" />
                      <span>FastAPI · REST</span>
                    </span>
                  </div>
                </div>

                {/* Frontend / Mobile */}
                <div className="rounded-2xl bg-slate-900/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Frontend & Mobile
                  </p>
                  <p className="mt-1 font-medium">
                    React · TypeScript · Java (Android)
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Interfaces modernas, responsivas y orientadas a negocio,
                    integradas con APIs propias.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/60">
                      <ReactIcon className="h-3.5 w-3.5" />
                      <span>React</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/60">
                      <TypeScriptIcon className="h-3.5 w-3.5" />
                      <span>TypeScript</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/60">
                      <JavaIcon className="h-3.5 w-3.5" />
                      <span>Java · Android</span>
                    </span>
                  </div>
                </div>

                {/* DB + herramientas */}
                <div className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/40 p-4 text-xs text-slate-300">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Datos & entorno
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/60">
                      <DatabaseIcon className="h-3.5 w-3.5" />
                      <span>PostgreSQL · MariaDB · SQL</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/60">
                      <LinuxIcon className="h-3.5 w-3.5" />
                      <span>Linux (Kali)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/60">
                      <GitIcon className="h-3.5 w-3.5" />
                      <span>Git · GitHub</span>
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400">
                    Enfoque en buenas prácticas, arquitectura limpia y código
                    mantenible.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <span>Stack listo para proyectos reales</span>
                <span>Full Stack · Mobile · APIs</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};