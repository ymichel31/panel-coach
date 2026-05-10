import { EvaluationsList } from "@/components/evaluations/EvaluationsList";
import { getEvaluationsAction } from "@/actions/evaluation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evaluaciones",
  description: "Listado de evaluaciones",
};

export default async function EvaluationsPage() {
  const evaluations = await getEvaluationsAction();

  return (
    <EvaluationsList
      pageTitle="Evaluaciones"
      data={evaluations ?? []}
      emptyMessage="No hay evaluaciones registradas"
    />
  );
}
