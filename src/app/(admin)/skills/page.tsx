import { DataListPage } from "@/components/common/DataListPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Habilidades | Panel Coach",
  description: "Listado de habilidades",
};

type HabilidadRow = {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
};

const habilidadesData: HabilidadRow[] = [];

const columns = [
  { key: "nombre" as const, header: "Nombre" },
  { key: "categoria" as const, header: "Categoría" },
  { key: "descripcion" as const, header: "Descripción" },
];

export default function SkillsPage() {
  return (
    <DataListPage<HabilidadRow>
      pageTitle="Habilidades"
      createButtonLabel="Crear habilidad"
      createHref="/skills/create"
      columns={columns}
      data={habilidadesData}
      emptyMessage='No hay habilidades. Haz clic en "Crear habilidad" para añadir una.'
    />
  );
}
