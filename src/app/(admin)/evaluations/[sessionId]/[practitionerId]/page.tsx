import Label from "@/components/form/Label";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDateToLocal } from "@/utils/date";
import { getEvaluationsBySessionAndPractitionerAction } from "@/actions/evaluation";



type Props = {
  params: Promise<{
    sessionId: number;
    practitionerId: string;
  }>;
};

export default async function EvaluationDetailPage({ params }: Props) {
  const { sessionId, practitionerId } = await params;

  const evaluation = await getEvaluationsBySessionAndPractitionerAction(sessionId, practitionerId);

  if (evaluation?.length === 0) return notFound();
  console.log(evaluation);

  return (
    <div>
      <PageBreadcrumb pageTitle="Detalle de evaluación" />

{/*       <div className="max-w-md w-full space-y-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <div className="px-4 py-4 sm:px-5 sm:py-5 space-y-4">
            <div>
              <Label>Sesión</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {evaluation.session_id}
              </p>
            </div>
            <div>
              <Label>Practicante</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {evaluation.practitioner_id}
              </p>
            </div>
            <div>
                <Label>Habilidad</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90 whitespace-pre-wrap">
                {evaluation.skill_id}
              </p>
            </div>
            <div>
              <Label>Fecha de evaluación</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {formatDateToLocal(evaluation.evaluation_date)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/evaluations"
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300"
          >
            Volver al listado
          </Link>
        </div>
      </div> */}
    </div>
  );
}
