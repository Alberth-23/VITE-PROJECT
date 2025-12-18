import { siteConfig } from "../../config/site";
import { WhatsAppIcon } from "./icons";

export const WhatsAppFloatingButton = () => {
  const raw = siteConfig.social.whatsapp;

  if (!raw) return null;

  // Solo dígitos
  const phone = raw.toString().replace(/[^\d]/g, "");
  if (!phone) return null;

  const url = `https://wa.me/${phone}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
};