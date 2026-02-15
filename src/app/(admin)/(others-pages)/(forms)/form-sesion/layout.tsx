import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear Sesión | TailAdmin - Next.js Dashboard Template",
  description: "Formulario para crear una sesión y seleccionar asistentes",
};

export default function FormSesionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
