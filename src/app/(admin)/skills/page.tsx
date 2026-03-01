import { DataListPage } from "@/components/common/DataListPage";
import { getSkillsAction, deleteSkillAction } from "@/actions/skill";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Habilidades | Panel Coach",
  description: "Listado de habilidades",
};

type HabilidadRow = {
  id: string;
  name: string;
  category: string;
  maxScore: number;
};

const columns = [
  { key: "name" as const, header: "Nombre" },
  { key: "category" as const, header: "Categoría" },
  { key: "maxScore" as const, header: "Puntuación máx." },
];

export default async function SkillsPage() {
  const list = await getSkillsAction();
  const data: HabilidadRow[] = (list ?? []).map(
    (s: {
      id: string;
      name?: string;
      category?: string;
      maxScore?: number;
      max_score?: number;
    }) => ({
      id: s.id,
      name: s.name ?? "",
      category: s.category ?? "",
      maxScore: s.maxScore ?? s.max_score ?? 0,
    })
  );

  return (
    <DataListPage<HabilidadRow>
      pageTitle="Habilidades"
      createButtonLabel="Crear habilidad"
      createHref="/skills/create"
      columns={columns}
      data={data}
      emptyMessage='No hay habilidades. Haz clic en "Crear habilidad" para añadir una.'
      editHrefPrefix="/skills/edit/"
      deleteAction={deleteSkillAction}
    />
  );
}
