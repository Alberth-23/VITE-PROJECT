import React from "react";
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

export const Hero: React.FC = () => {
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
      className="relative overflow-hidden border-b border-slate-800/70 bg-slate-950/85"
      aria-label="Presentación personal"
    >
      {/* Fondo con degradado cyan/indigo suave */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-48 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div className="relative left-1/2 h-72 w-[80rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-400/24 via-slate-900/0 to-transparent opacity-95" />
      </div>

      <Container className="pt-10 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Columna izquierda: avatar, texto y CTAs */}
          <div className="space-y-6">
            {/* Avatar con iniciales */}
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-2xl bg-slate-950">
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-400 to-indigo-500 opacity-95" />
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl">
                  <span className="text-xs font-bold tracking-tight text-slate-950">
                    {initials}
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-100">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] text-slate-400">
                  {siteConfig.role}
                </span>
              </div>
            </div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
              {siteConfig.role}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Desarrollo soluciones{" "}
              <span className="text-cyan-400">web y móviles</span> con foco
              en producto real.
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              {siteConfig.description}
            </p>

            <ul className="flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Sistemas para clínicas odontológicas (gestión de pacientes,
                agenda, historias clínicas, facturación).
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400 opacity-80" />
                React · TypeScript · FastAPI · SQL · Linux
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm shadow-cyan-500/40 transition hover:-translate-y-0.5 hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Ver GitHub
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Contacto
              </a>

              <a
                href={siteConfig.cvUrl}
                download
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Columna derecha: card de Stack con iconos */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-lg shadow-slate-900/70">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Stack principal
              </p>

              <div className="mt-4 space-y-4 text-sm text-slate-100">
                {/* Backend */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Backend & APIs
                  </p>
                  <p className="mt-1 font-medium">Python · FastAPI · REST</p>
                  <p className="mt-1 text-xs text-slate-400">
                    APIs limpias y tipadas, conectadas a bases de datos SQL,
                    pensadas para integrarse con web y mobile.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/70">
                      <PythonIcon className="h-3.5 w-3.5" />
                      <span>Python</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/70">
                      <DatabaseIcon className="h-3.5 w-3.5" />
                      <span>FastAPI · REST</span>
                    </span>
                  </div>
                </div>

                {/* Frontend / Mobile */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Frontend & Mobile
                  </p>
                  <p className="mt-1 font-medium">
                    React · TypeScript · Java (Android)
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Interfaces modernas y responsivas, con foco en experiencia de
                    usuario y negocio.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/70">
                      <ReactIcon className="h-3.5 w-3.5" />
                      <span>React</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/70">
                      <TypeScriptIcon className="h-3.5 w-3.5" />
                      <span>TypeScript</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-slate-200 ring-1 ring-slate-700/70">
                      <JavaIcon className="h-3.5 w-3.5" />
                      <span>Java · Android</span>
                    </span>
                  </div>
                </div>

                {/* Datos & entorno */}
                <div className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/60 p-4 text-xs text-slate-300">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Datos & entorno
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/70">
                      <DatabaseIcon className="h-3.5 w-3.5" />
                      <span>PostgreSQL · MariaDB · SQL</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/70">
                      <LinuxIcon className="h-3.5 w-3.5" />
                      <span>Linux (Kali)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/70">
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