import Label from "@/components/form/Label";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDateToLocal } from "@/utils/date";
import { getEvaluationsBySessionAndPractitionerAction } from "@/actions/evaluation";

type Props = {
  params: Promise<{
    sessionId: string;
    practitionerId: string;
  }>;
};

export default async function EvaluationDetailPage({ params }: Props) {
  const { sessionId, practitionerId } = await params;

  const sessionIdNumber = Number(sessionId);

  const evaluations =
    await getEvaluationsBySessionAndPractitionerAction(
      sessionIdNumber,
      practitionerId
    );

  if (!evaluations?.length) {
    notFound();
  }
  const firstEvaluation = evaluations[0];

  return (
    <div>
      <PageBreadcrumb pageTitle="Detalle de evaluación" />

      <div className="w-full max-w-2xl space-y-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
            <div>
              <Label>Sesión</Label>

              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {sessionIdNumber}
              </p>
            </div>

            <div>
              <Label>Practicante</Label>

              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {[firstEvaluation.first_name, firstEvaluation.last_name]
                  .join(" ")
                  .trim()}
              </p>
            </div>

            <div>
              <Label>Gimnasio</Label>

              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {firstEvaluation.gym}
              </p>
            </div>

            <div>
              <Label>Fecha</Label>

              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {formatDateToLocal(firstEvaluation.start_date)}
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-100 border-t border-gray-100 dark:divide-white/[0.05] dark:border-white/[0.05]">
            {evaluations.map((evaluation) => {
              let scoreText = `${evaluation.score}`;

              if (evaluation.max_score != null) {
                scoreText = scoreText + ` / ${evaluation.max_score}`;
              }

              return (
                <div
                  key={evaluation.id}
                  className="space-y-4 px-4 py-4 sm:px-5 sm:py-5"
                >
                  <div>
                    <Label>Habilidad</Label>

                    <p className="mt-1.5 whitespace-pre-wrap text-theme-sm text-gray-800 dark:text-white/90">
                      {evaluation.skill}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Puntuación</Label>

                      <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                        {scoreText}
                      </p>
                    </div>

                    <div>
                      <Label>Categoría</Label>

                      <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                        {evaluation.category}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/evaluations"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-medium text-gray-700 ring-1 ring-gray-300 ring-inset transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300"
          >
            Volver al listado
          </Link>
        </div>
      </div>
    </div>
  );
}