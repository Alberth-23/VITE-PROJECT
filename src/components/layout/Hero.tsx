import { siteConfig } from "../../config/site";
import { Container } from "../ui/Container";

export const Hero = () => {
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
          {/* Columna izquierda: texto y CTAs */}
          <div className="space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-400">
              {siteConfig.role}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
              .
              <br />
              Desarrollo soluciones{" "}
              <span className="text-teal-400">web y móviles</span>.
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

          {/* Columna derecha: tu card de stack (puedes dejar la que ya tenías) */}
          {/* ... */}
        </div>
      </Container>
    </section>
  );
};