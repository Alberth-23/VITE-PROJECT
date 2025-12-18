import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout principal de la aplicación:
 * - Navbar fijo
 * - Contenido principal
 * - Footer
 * Incluye enlace "skip to content" para accesibilidad.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Link para saltar directamente al contenido (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main
        id="main-content"
        className="pt-20 pb-10 sm:pt-24 sm:pb-12"
        role="main"
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};