import React, { useState } from "react";
import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";
import { WhatsAppIcon, InstagramIcon } from "../ui/icons";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const buildWhatsAppUrl = (data: ContactFormValues): string | null => {
    const rawNumber = siteConfig.social.whatsapp;
    if (!rawNumber) return null;

    const phone = rawNumber.toString().replace(/[^\d]/g, "");
    if (!phone) return null;

    const text = `Hola, soy ${data.name} (${data.email}).\n\n${data.message}`;
    const encodedText = encodeURIComponent(text);

    return `https://wa.me/${phone}?text=${encodedText}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Por favor completa todos los campos obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMessage("Por favor introduce un email válido.");
      return;
    }

    const whatsappUrl = buildWhatsAppUrl(form);

    if (!whatsappUrl) {
      setErrorMessage(
        "WhatsApp no está configurado. Contáctame por email o Instagram."
      );
      return;
    }

    setErrorMessage(null);
    window.open(whatsappUrl, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappNumberClean =
    siteConfig.social.whatsapp &&
    siteConfig.social.whatsapp.toString().replace(/[^\d]/g, "");

  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-slate-800/60 bg-slate-950"
      aria-label="Formulario de contacto"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Encabezado */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
            Contacto
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            ¿Hablamos por WhatsApp o Instagram?
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Completa el formulario y te redirigiré a{" "}
            <span className="font-medium text-slate-100">WhatsApp</span> con el
            mensaje prellenado. También puedes escribirme directamente por{" "}
            <span className="font-medium text-slate-100">Instagram</span> o{" "}
            <span className="font-medium text-slate-100">email</span>.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
          {/* Columna izquierda: info de contacto */}
          <div className="space-y-6 text-sm text-slate-300 sm:text-base">
            <div>
              <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                Información directa
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-medium text-slate-100">Email: </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-teal-400 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.location && (
                  <li>
                    <span className="font-medium text-slate-100">
                      Ubicación:{" "}
                    </span>
                    <span>{siteConfig.location}</span>
                  </li>
                )}
                <li>
                  <span className="font-medium text-slate-100">
                    Disponible para:{" "}
                  </span>
                  <span>Trabajos full-time, freelance o proyectos a medida.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 sm:text-sm">
              <p className="font-semibold text-slate-100">
                ¿Qué tipo de proyectos me interesan?
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Aplicaciones web con React + TypeScript + FastAPI.</li>
                <li>Sistemas para clínicas y sector salud.</li>
                <li>Aplicaciones móviles conectadas a APIs propias.</li>
              </ul>
            </div>

            {/* Botones directos a WhatsApp / Instagram */}
            <div className="flex flex-wrap gap-3">
              {whatsappNumberClean && (
                <a
                  href={`https://wa.me/${whatsappNumberClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-3 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-[#25D366]/40 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp </span>
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] px-3 py-2 text-xs font-medium text-white shadow-lg shadow-[#dd2a7b]/40 transition hover:-translate-y-0.5"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>

          {/* Columna derecha: formulario -> redirección a WhatsApp */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-slate-200"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="h-9 rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-teal-500/0 transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/40"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="h-9 rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-slate-50 outline-none ring-teal-500/0 transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-200"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-teal-500/0 transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/40"
                  placeholder="Cuéntame brevemente sobre el proyecto, el rol o la oportunidad..."
                />
              </div>

              {errorMessage && (
                <p className="text-xs font-medium text-rose-400">{errorMessage}</p>
              )}

              <div className="flex items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-teal-500/40 transition hover:-translate-y-0.5 hover:bg-teal-400"
                >
                  Enviar y abrir WhatsApp
                </button>

                <p className="hidden text-[11px] text-slate-400 sm:block">
                  O escríbeme directamente a{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-teal-400 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  {siteConfig.social.instagram && (
                    <>
                      {" "}
                      o por{" "}
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-400 hover:underline"
                      >
                        Instagram
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};