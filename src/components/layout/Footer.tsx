import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <Container className="flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-400 sm:flex-row sm:text-sm">
        <p className="text-center sm:text-left">
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p className="text-center sm:text-right">
          Construido con{" "}
          <span className="font-medium text-teal-400">React</span> &{" "}
          <span className="font-medium text-teal-400">Tailwind CSS</span>.
        </p>
      </Container>
    </footer>
  );
};