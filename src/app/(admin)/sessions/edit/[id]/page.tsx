import { getSessionByIdAction } from "@/actions/session";
import SessionEditForm from "@/components/sessions/SessionEditForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPractitionerEvaluatorsAction } from "@/actions/practitioner";
import { getProgramLevelsAction } from "@/actions/programLevel";

export const metadata: Metadata = {
  title: "Editar sesión",
  description: "Editar sesión",
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditSessionPage({ params }: Props) {
  const { id } = await params;

  const session = await getSessionByIdAction(id);
  const evaluators = await getPractitionerEvaluatorsAction();
  const programLevels = await getProgramLevelsAction();

  if (!session) notFound();

  return <SessionEditForm session={session} evaluators={evaluators} programLevels={programLevels} />;
}
