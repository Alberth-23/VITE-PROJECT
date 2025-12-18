import { Container } from "../ui/Container";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces modernas, accesibles y responsivas.",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    description: "APIs REST limpias, seguras y bien estructuradas.",
    items: ["Python", "FastAPI", "Java", "REST", "Autenticación JWT"],
  },
  {
    title: "Bases de datos",
    description: "Modelado de datos y consultas eficientes.",
    items: ["PostgreSQL", "MariaDB", "SQL", "DBeaver"],
  },
  {
    title: "Herramientas & Entorno",
    description: "Flujo de trabajo productivo y orientado a buenas prácticas.",
    items: ["Git", "GitHub", "Linux (Kali)", "VS Code", "Arquitectura limpia"],
  },
];

const learning = ["Angular"];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-800/60 bg-slate-950"
      aria-label="Skills técnicas"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Encabezado */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
            Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Stack técnico enfocado en web, mobile y APIs.
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Combino tecnologías modernas de frontend, backend y bases de datos
            para construir soluciones completas, mantenibles y preparadas para
            producción.
          </p>
        </div>

        {/* Grid de skills */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-100">
                {group.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {group.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-950/70 px-2 py-1 text-[11px] font-medium text-slate-200 ring-1 ring-slate-700/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bloque: Aprendiendo */}
        <div className="mt-8 rounded-2xl border border-dashed border-teal-500/40 bg-slate-900/40 p-4 text-sm text-slate-200 sm:text-base">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
            Actualmente aprendiendo
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {learning.map((item) => (
              <span
                key={item}
                className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300 ring-1 ring-teal-500/40"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};