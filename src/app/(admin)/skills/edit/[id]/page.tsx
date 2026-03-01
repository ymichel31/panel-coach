import { getSkillByIdAction } from "@/actions/skill";
import SkillEditForm from "./SkillEditForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Editar habilidad | Panel Coach",
  description: "Editar habilidad",
};

export default async function EditSkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = await getSkillByIdAction(id);
  if (!skill) notFound();
  return <SkillEditForm skill={skill} />;
}
