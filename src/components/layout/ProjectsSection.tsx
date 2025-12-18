import { Container } from "../ui/Container";

const projects = [
  {
    title: "Sistema Web Odontológico",
    type: "Aplicación web full stack",
    year: "2024",
    description:
      "Sistema para clínicas odontológicas con gestión de pacientes, agenda, historias clínicas y facturación.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    responsibilities: [
      "Diseño de la arquitectura frontend y backend.",
      "Implementación de API REST con FastAPI.",
      "Integración con base de datos PostgreSQL.",
      "Interfaz responsive para escritorio y móvil.",
    ],
    githubUrl: "https://github.com/Alberth-23/web-odontologia",
  },
  {
    title: "Aplicación móvil para gestión de pacientes",
    type: "Aplicación móvil",
    year: "2024",
    description:
      "App móvil para que odontólogos y asistentes gestionen pacientes, citas y notificaciones desde el teléfono.",
    stack: ["Java / Android", "REST API", "JSON"],
    responsibilities: [
      "Diseño de pantallas y navegación.",
      "Consumo de API REST propia.",
      "Manejo de autenticación y sesiones.",
    ],
    githubUrl: "https://github.com/tu-usuario/app-movil-odontologia",
  },
  {
    title: "API REST clínica con FastAPI",
    type: "Backend / API",
    year: "2023",
    description:
      "API REST para gestión de pacientes, turnos y odontólogos, lista para integrarse con web y apps móviles.",
    stack: ["Python", "FastAPI", "SQL", "MariaDB"],
    responsibilities: [
      "Definición de modelos y esquemas de datos.",
      "Rutas protegidas con autenticación.",
      "Validación y documentación automática con OpenAPI.",
    ],
    githubUrl: "https://github.com/tu-usuario/api-fastapi-clinica",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="proyectos"
      className="scroll-mt-24 border-t border-slate-800/60 bg-slate-950/95"
      aria-label="Proyectos destacados"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Encabezado */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
            Proyectos
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Proyectos que demuestran mi stack en producción.
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Una selección de proyectos orientados a problemas reales, con
            enfoque en clínicas odontológicas, APIs REST y aplicaciones móviles.
          </p>
        </div>

        {/* Lista de proyectos */}
        <div className="mt-8 space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-teal-500/60 hover:bg-slate-900"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                {/* Título + info */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="rounded-full bg-slate-950/70 px-2 py-0.5 font-medium tracking-wide uppercase">
                      {project.type}
                    </span>
                    <span>·</span>
                    <span className="text-slate-500">{project.year}</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Botón GitHub */}
                <div className="flex items-start">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm transition group-hover:border-teal-400 group-hover:text-teal-300"
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
                    <span>Ver en GitHub</span>
                  </a>
                </div>
              </div>

              {/* Stack y responsabilidades */}
              <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Tecnologías
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-950/70 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Lo que hice
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300 sm:text-[13px]">
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};