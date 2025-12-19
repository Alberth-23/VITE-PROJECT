import React from "react";

type IconProps = {
  className?: string;
};

/** Ícono de WhatsApp (solo logo). */
export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M16.04 4C9.4 4 4 9.2 4 15.36c0 2.53.84 4.87 2.27 6.77L4 28l6.1-2.17c1.8.99 3.87 1.55 5.96 1.55 6.64 0 12.04-5.2 12.04-11.36C28.1 9.2 22.68 4 16.04 4zm0 2.35c5.25 0 9.52 4.1 9.52 9.01 0 4.96-4.27 9.06-9.52 9.06-1.93 0-3.8-.6-5.36-1.63l-.38-.24-3.62 1.29 1.26-3.41-.25-.35a8.49 8.49 0 0 1-1.68-5.72c0-4.92 4.27-9.01 9.53-9.01zm-4.43 4.55c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.49 1.47 3.73.18.24 2.48 3.87 6.11 5.22 3.02 1.16 3.64.93 4.29.87.65-.06 2.11-.86 2.41-1.69.3-.83.3-1.54.21-1.69-.09-.15-.33-.24-.69-.42-.36-.18-2.11-1.04-2.44-1.16-.33-.12-.57-.18-.81.18-.24.36-.93 1.16-1.14 1.4-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.96-1.79-2.15-2-2.51-.21-.36-.02-.56.16-.74.17-.17.39-.45.57-.68.18-.24.24-.42.36-.68.12-.27.06-.51-.03-.69-.09-.18-.81-2.01-1.11-2.76-.29-.69-.57-.71-.81-.72z"
    />
  </svg>
);

/** Ícono de Instagram. */
export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M16 7.2c2.17 0 2.43.01 3.29.05.8.04 1.23.17 1.52.28.38.15.65.33.94.62.29.29.47.56.62.94.11.29.24.72.28 1.52.04.86.05 1.12.05 3.29s-.01 2.43-.05 3.29c-.04.8-.17 1.23-.28 1.52a2.73 2.73 0 0 1-.62.94 2.73 2.73 0 0 1-.94.62c-.29.11-.72.24-1.52.28-.86.04-1.12.05-3.29.05s-2.43-.01-3.29-.05c-.8-.04-1.23-.17-1.52-.28a2.73 2.73 0 0 1-.94-.62 2.73 2.73 0 0 1-.62-.94c-.11-.29-.24-.72-.28-1.52C9.21 18.43 9.2 18.17 9.2 16s.01-2.43.05-3.29c.04-.8.17-1.23.28-1.52.15-.38.33-.65.62-.94.29-.29.56-.47.94-.62.29-.11.72-.24 1.52-.28C13.57 7.21 13.83 7.2 16 7.2m0-2c-2.21 0-2.49.01-3.36.05-.87.04-1.46.18-1.98.38-.54.21-1 .49-1.46.95-.46.46-.74.92-.95 1.46-.2.52-.34 1.11-.38 1.98C8.81 11.89 8.8 12.17 8.8 14.38v3.24c0 2.21.01 2.49.05 3.36.04.87.18 1.46.38 1.98.21.54.49 1 .95 1.46.46.46.92.74 1.46.95.52.2 1.11.34 1.98.38.87.04 1.15.05 3.36.05s2.49-.01 3.36-.05c.87-.04 1.46-.18 1.98-.38.54-.21 1-.49 1.46-.95.46-.46.74-.92.95-1.46.2-.52.34-1.11.38-1.98.04-.87.05-1.15.05-3.36v-3.24c0-2.21-.01-2.49-.05-3.36-.04-.87-.18-1.46-.38-1.98a4.18 4.18 0 0 0-.95-1.46 4.18 4.18 0 0 0-1.46-.95c-.52-.2-1.11-.34-1.98-.38C18.49 5.21 18.21 5.2 16 5.2Z"
    />
    <path
      fill="currentColor"
      d="M16 11.2A4.8 4.8 0 1 0 20.8 16 4.81 4.81 0 0 0 16 11.2Zm0 7.6A2.8 2.8 0 1 1 18.8 16 2.81 2.81 0 0 1 16 18.8Zm4.96-8.92a1.12 1.12 0 1 1-1.12-1.12 1.12 1.12 0 0 1 1.12 1.12Z"
    />
  </svg>
);

/** Ícono genérico de React. */
export const ReactIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="2.6" fill="currentColor" />
    <ellipse
      cx="16"
      cy="16"
      rx="10"
      ry="4.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <ellipse
      cx="16"
      cy="16"
      rx="10"
      ry="4.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      transform="rotate(60 16 16)"
    />
    <ellipse
      cx="16"
      cy="16"
      rx="10"
      ry="4.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      transform="rotate(120 16 16)"
    />
  </svg>
);

/** Ícono TypeScript (TS). */
export const TypeScriptIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="4" fill="#0F172A" />
    <text
      x="50%"
      y="54%"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontSize="11"
      fontWeight="700"
      fill="#38BDF8"
    >
      TS
    </text>
  </svg>
);

/** Ícono Python genérico. */
export const PythonIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path
      fill="#38BDF8"
      d="M16.1 5c-1.9 0-3.1.2-4.1.6C10.9 6 10 6.9 10 8.5V13h6.5v1.5h-8c-1.6 0-2.9 1.3-2.9 2.9V22c0 1.2.6 2.1 1.7 2.6 1 .4 2.3.6 4.1.6h.6v-2.6c0-2 1.6-3.6 3.6-3.6H22v-5.4c0-1.6-.9-2.5-2-2.9-1-.4-2.2-.6-3.9-.6h-0z"
    />
    <path
      fill="#FACC15"
      d="M15.9 27c1.9 0 3.1-.2 4.1-.6 1.1-.4 2-1.3 2-2.9V19h-6.5v-1.5h8c1.6 0 2.9-1.3 2.9-2.9V10c0-1.2-.6-2.1-1.7-2.6-1-.4-2.3-.6-4.1-.6h-.6v2.6c0 2-1.6 3.6-3.6 3.6H10v5.4c0 1.6.9 2.5 2 2.9 1 .4 2.2.6 3.9.6h0z"
    />
  </svg>
);

/** Ícono Java genérico (taza de café). */
export const JavaIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M9 21c0 2.2 2.4 4 5.9 4 3.5 0 5.9-1.8 5.9-4H9zm12.5-7.5h-1v5.2c0 1.7-2.5 3-5.6 3s-5.6-1.3-5.6-3v-5.2H8.2C7.5 13.5 7 14 7 14.7v2.1C7 18.5 8.6 20 10.5 20H18c2.5 0 4.5-2 4.5-4.5v-1.3c0-.7-.5-1.2-1-1.7z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      d="M13 7c0 1.2 1.4 1.2 1.4 2.3S13 10.9 13 12m3-5c0 1.2 1.4 1.2 1.4 2.3S16 10.9 16 12"
    />
  </svg>
);

/** Ícono de base de datos (cilindro). */
export const DatabaseIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <ellipse cx="16" cy="8" rx="8" ry="3.3" fill="currentColor" />
    <path
      fill="currentColor"
      d="M8 8v9.8C8 19.9 11.6 22 16 22s8-2.1 8-4.2V8c0 2.1-3.6 3.8-8 3.8S8 10.1 8 8z"
      opacity="0.85"
    />
  </svg>
);

/** Ícono Linux (terminal). */
export const LinuxIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect x="5" y="7" width="22" height="18" rx="3" fill="#020617" />
    <rect
      x="6.5"
      y="8.5"
      width="19"
      height="15"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      fill="currentColor"
      d="M10 14.5 8.2 13l1-1.1L12.6 14l-3.4 2.1L8.2 15zM14 18h4v1.4h-4z"
    />
  </svg>
);

/** Ícono Git. */
export const GitIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M14.6 6.3a2 2 0 0 1 2.8 0l8.3 8.3a2 2 0 0 1 0 2.8l-5.6 5.6a2 2 0 0 1-2.8 0l-8.3-8.3a2 2 0 0 1 0-2.8l5.6-5.6z"
      opacity="0.9"
    />
    <circle cx="16" cy="11" r="1.4" fill="#020617" />
    <circle cx="19" cy="16" r="1.4" fill="#020617" />
    <circle cx="13" cy="17" r="1.4" fill="#020617" />
    <path
      fill="none"
      stroke="#020617"
      strokeWidth="1"
      d="M16 11v2.5L19 16l-6 1"
    />
  </svg>
);