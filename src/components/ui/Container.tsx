import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Contenedor responsive reutilizable para centrar el contenido
 * y limitar el ancho máximo de las secciones.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

// Export default para que funcionen también los imports "import Container from ..."
export default Container;