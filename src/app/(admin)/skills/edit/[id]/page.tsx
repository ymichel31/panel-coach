import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSkillByIdAction, getSkillsCategoriesAction } from "@/actions/skill";
import SkillEditForm from "@/components/skills/SkillEditForm";

export const metadata: Metadata = {
  title: "Editar habilidad",
  description: "Editar habilidad",
};

type Props = {
  params: Promise<{ id: string }>;
}

export default async function EditSkillPage({
  params,
}: Props) {
  const { id } = await params;
  const skill = await getSkillByIdAction(id);
  const skillsCategories = await getSkillsCategoriesAction();

  if (!skill) notFound();
  if (!skillsCategories) notFound();
  
  return <SkillEditForm skill={skill} skillsCategories={skillsCategories} />;
}
