import Label from "@/components/form/Label";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { getSessionById } from "@/services/session";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/utils/date";



type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SessionDetailPage({ params }: Props) {
  const { id } = await params;

  const session = await getSessionById(id);

  if (!session) return notFound();

  return (
    <div>
      <PageBreadcrumb pageTitle="Detalle de sesión" />

      <div className="max-w-md w-full space-y-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <div className="px-4 py-4 sm:px-5 sm:py-5 space-y-4">
            <div>
              <Label>Nombre</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {session.title}
              </p>
            </div>
            <div>
              <Label>Fecha y hora</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90">
                {formatDate(session.date)}
              </p>
            </div>
            <div>
              <Label>Descripción</Label>
              <p className="mt-1.5 text-theme-sm text-gray-800 dark:text-white/90 whitespace-pre-wrap">
                {session.description?.trim() ? session.description : "Sin descripción."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/sessions/edit/${id}`}
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600"
          >
            Editar sesión
          </Link>
          <Link
            href="/sessions"
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300"
          >
            Volver al listado
          </Link>
        </div>
      </div>
    </div>
  );
}
