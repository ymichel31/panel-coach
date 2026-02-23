import { DataListPage } from "@/components/common/DataListPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Practicantes | Panel Coach",
  description: "Listado de practicantes",
};

type PracticanteRow = {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  experiencia: string;
};

const practicantesData: PracticanteRow[] = [];

const columns = [
  { key: "nombre" as const, header: "Nombre" },
  { key: "apellido" as const, header: "Apellido" },
  { key: "edad" as const, header: "Edad" },
  { key: "correo" as const, header: "Correo" },
  { key: "experiencia" as const, header: "Experiencia" },
];

export default function PractitionersPage() {
  return (
    <DataListPage<PracticanteRow>
      pageTitle="Practicantes"
      createButtonLabel="Nuevo practicante"
      createHref="/practitioners/create"
      columns={columns}
      data={practicantesData}
      emptyMessage='No hay practicantes. Haz clic en "Nuevo practicante" para añadir uno.'
    />
  );
}
