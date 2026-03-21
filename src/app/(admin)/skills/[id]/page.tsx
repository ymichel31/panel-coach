import Label from "@/components/form/Label";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { getSkillById } from "@/services/skill";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SkillDetailPage({ params }: Props) {
  const { id } = await params;

  const skill = await getSkillById(id);

  if (!skill) return notFound();

  // TODO: Esto lo podemos mover a un tipo de dato y tipar la en el retorno de la función getSkillById
  const row = skill as {
    name: string;
    category?: string;
    max_score?: number;
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Detalle de habilidad" />

      <div className="max-w-md w-full space-y-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <div className="px-4 py-4 sm:px-5 sm:py-5 space-y-4">
            
            <div>
              <Label>Nombre</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {row.name}
              </p>
            </div>

            <div>
              <Label>Categoría</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {row.category || "Sin categoría."}
              </p>
            </div>

            <div>
              <Label>Puntuación máxima</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {row.max_score ?? 0}
              </p>
            </div>

          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/skills/edit/${id}`}
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600"
          >
            Editar habilidad
          </Link>
          <Link
            href="/skills"
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300"
          >
            Volver al listado
          </Link>
        </div>
      </div>
    </div>
  );
}