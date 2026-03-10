import { SkillList } from "@/components/skills/SkillList";
import { getSkillsAction, deleteSkillAction } from "@/actions/skill";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Listado de habilidades",
};

export default async function SkillsPage() {
  const list = await getSkillsAction();
  const data = (list ?? []).map(
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
    <SkillList
      pageTitle="Habilidades"
      createButtonLabel="Crear habilidad"
      createHref="/skills/create"
      data={data}
      emptyMessage='No hay habilidades. Haz clic en "Crear habilidad" para añadir una.'
      editHrefPrefix="/skills/edit/"
      deleteAction={deleteSkillAction}
    />
  );
}
