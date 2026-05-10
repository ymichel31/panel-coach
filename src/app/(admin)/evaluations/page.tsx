import { EvaluationsList } from "@/components/evaluations/EvaluationsList";
import { getEvaluationsAction } from "@/actions/evaluation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evaluaciones",
  description: "Listado de evaluaciones",
};

export default async function EvaluationsPage() {
  const evaluations = await getEvaluationsAction();

  console.log(evaluations);

  return (
    <h1>Evaluaciones</h1>
  );
}

{/* <EvaluationsList
  pageTitle="Evaluaciones"
  data={evaluations ?? []}
  emptyMessage="No hay evaluaciones registradas"
/> */}