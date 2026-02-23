import { DataListPage } from "@/components/common/DataListPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sesiones | Panel Coach",
  description: "Listado de sesiones",
};

type SesionRow = {
  id: number;
  nombre: string;
  fecha: string;
  estado: string;
};

const sesionesData: SesionRow[] = [];

const columns = [
  { key: "nombre" as const, header: "Nombre" },
  { key: "fecha" as const, header: "Fecha" },
  { key: "estado" as const, header: "Estado" },
];

export default function SessionsPage() {
  return (
    <DataListPage<SesionRow>
      pageTitle="Sesiones"
      createButtonLabel="Crear sesión"
      createHref="/sessions/create"
      columns={columns}
      data={sesionesData}
      emptyMessage='No hay sesiones. Haz clic en "Crear sesión" para añadir una.'
    />
  );
}
