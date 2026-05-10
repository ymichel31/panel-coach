import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Evaluation } from "@/types/evaluation";
import Link from "next/link";
import { formatDateToLocal } from "@/utils/date";

type EvaluationsListProps = {
  pageTitle: string;
  data: Evaluation[];
  emptyMessage: string;
};

export function EvaluationsList({ pageTitle, data, emptyMessage }: EvaluationsListProps) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <PageBreadcrumb pageTitle={pageTitle} />
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Sesión
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Practicante
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Fecha
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.length === 0 ? (
                <TableRow>
                  <td
                    colSpan={3}
                    className="px-5 py-8 text-center text-theme-sm text-gray-500 dark:text-gray-400"
                  >
                    {emptyMessage}
                  </td>
                </TableRow>
              ) : (
                data.map((row) => {
                  const href = `/evaluations/${row.session_id}/${encodeURIComponent(row.practitioner_id)}`;
                  const practitionerLabel =
                    [row.first_name, row.last_name].filter(Boolean).join(" ").trim() ||
                    row.practitioner_id;

                  return (
                    <TableRow key={`${row.session_id}-${row.practitioner_id}`}>
                      <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                        <Link
                          href={href}
                          className="text-brand-400 hover:text-brand-500 hover:underline dark:text-brand-300 dark:hover:text-brand-400"
                        >
                          {row.title?.trim() || `Sesión ${row.session_id}`}
                        </Link>
                      </TableCell>
                      <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                        {practitionerLabel}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                        {formatDateToLocal(row.date)}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
