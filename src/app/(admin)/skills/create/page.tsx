import { notFound } from "next/navigation";
import { getSkillsCategoriesAction } from "@/actions/skill";
import SkillCreateForm from "@/components/skills/SkillCreateForm";

export default async function CreateSkillPage() {
  const skillsCategories = await getSkillsCategoriesAction();
  if (!skillsCategories) notFound();

  return <SkillCreateForm skillsCategories={skillsCategories} />;
}
