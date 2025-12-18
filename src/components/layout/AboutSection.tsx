import { Container } from "../ui/Container";

export const AboutSection = () => {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-slate-800/60 bg-slate-950/90"
      aria-label="Sobre mí y qué hago"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Encabezado */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
            Sobre mí · Qué hago
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Desarrollo soluciones completas para web y móvil.
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Soy desarrollador <span className="font-medium">Full Stack & Mobile</span> con
            foco en construir productos reales: desde la API y base de datos
            hasta la interfaz que usa el usuario final.
          </p>
        </div>

        {/* Contenido en dos columnas */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Columna 1: texto sobre ti */}
          <div className="space-y-4 text-sm text-slate-300 sm:text-base">
            <p>
              Tengo experiencia desarrollando{" "}
              <span className="font-medium text-slate-100">
                sistemas para clínicas odontológicas
              </span>{" "}
              (gestión de pacientes, agenda, historias clínicas, facturación),
              así como aplicaciones móviles modernas.
            </p>
            <p>
              Me gusta trabajar con{" "}
              <span className="font-medium text-slate-100">
                React, TypeScript y FastAPI
              </span>{" "}
              para crear soluciones rápidas, mantenibles y fáciles de escalar.
              Cuido mucho la arquitectura, la claridad del código y la UX.
            </p>
            <p>
              Busco mi primera oportunidad profesional para seguir creciendo en
              equipos donde pueda aportar desde el backend, frontend y mobile.
            </p>
          </div>

          {/* Columna 2: tarjetas de "qué hago" */}
          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Web · Backend
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-100">
                Aplicaciones web para negocio
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Diseño y desarrollo aplicaciones web con React + TypeScript y
                APIs REST con FastAPI, conectadas a bases de datos SQL
                (PostgreSQL, MariaDB).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Mobile
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-100">
                Aplicaciones móviles
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Desarrollo apps móviles conectadas a backend propio, pensando en
                rendimiento, seguridad y una buena experiencia de usuario.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-teal-500/40 bg-slate-900/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                Salud · Clínicas odontológicas
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-100">
                Software especializado
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Experiencia construyendo soluciones a medida para clínicas:
                gestión de pacientes, turnos, historias clínicas y reportes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};