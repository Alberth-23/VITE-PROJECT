import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import photo1 from "../../assets/about/about-1.jpg";
import photo2 from "../../assets/about/about-2.jpg";
import photo3 from "../../assets/about/about-3.jpg"; // si no tienes esta, borra la import y el uso

const photos = [
  { src: photo1, alt: "Foto personal 1" },
  { src: photo2, alt: "Foto personal 2" },
  { src: photo3, alt: "Foto personal 3" },
];

export const AboutSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  // Cerrar con tecla ESC
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-slate-800/70 bg-slate-950"
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

        {/* Contenido: texto + galería de fotos */}
        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]">
          {/* Columna 1: texto */}
          <div className="space-y-6 text-sm text-slate-300 sm:text-base">
            <div className="space-y-4">
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

            {/* Tarjetas de "qué hago" */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Web · Backend
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-100">
                  Aplicaciones web para negocio
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Diseño y desarrollo aplicaciones web con React + TypeScript y
                  APIs REST con FastAPI, conectadas a bases de datos SQL.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Mobile
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-100">
                  Aplicaciones móviles
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Desarrollo apps móviles conectadas a backend propio, pensando en
                  rendimiento, seguridad y experiencia de usuario.
                </p>
              </div>

              <div className="rounded-2xl border border-dashed border-teal-500/40 bg-slate-900/40 p-4 sm:col-span-2">
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

          {/* Columna 2: collage de fotos clicables */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-3">
                {/* Foto grande arriba */}
                <button
                  type="button"
                  onClick={() => openModal(0)}
                  className="group col-span-2 relative overflow-hidden rounded-2xl bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <img
                    src={photo1}
                    alt="Foto personal"
                    className="h-48 w-full rounded-2xl object-cover object-center transition duration-300 group-hover:scale-105 group-focus-visible:scale-105 sm:h-56"
                  />
                </button>

                {/* Foto izquierda abajo */}
                <button
                  type="button"
                  onClick={() => openModal(1)}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <img
                    src={photo2}
                    alt="Foto personal secundaria"
                    className="h-32 w-full rounded-2xl object-cover object-center transition duration-300 group-hover:scale-105 group-focus-visible:scale-105 sm:h-36"
                  />
                </button>

                {/* Foto derecha abajo */}
                <button
                  type="button"
                  onClick={() => openModal(2)}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <img
                    src={photo3}
                    alt="Foto personal adicional"
                    className="h-32 w-full rounded-2xl object-cover object-center transition duration-300 group-hover:scale-105 group-focus-visible:scale-105 sm:h-36"
                  />
                </button>
              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                Me gusta mantener un equilibrio entre lo técnico y lo personal:
                aprender constantemente, construir proyectos reales y seguir
                mejorando como desarrollador.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Modal / Lightbox */}
      {activeIndex !== null && photos[activeIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};