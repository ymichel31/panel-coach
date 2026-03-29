import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Practitioner } from "@/types/practitioner";
import Link from "next/link";

type PractitionerListProps = {
  pageTitle: string;
  data: Practitioner[];
  emptyMessage: string;
};

export function PractitionerList({ pageTitle, data, emptyMessage }: PractitionerListProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <PageBreadcrumb pageTitle={pageTitle} />
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Nombre
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Apellido
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Edad
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Categoría de peso
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Peso actual
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 w-40 text-end"
                >
                  Gimnasio
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.length === 0 ? (
                <TableRow>
                  <td colSpan={5} className="px-5 py-8 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                    {emptyMessage}
                  </td>
                </TableRow>
              ) : (
                data.map((row) => (
                  <TableRow key={row.practitioner_id}>
                    <TableCell className="px-5 py-4 text-gray-800 text-theme-sm dark:text-white/90">
                      <Link
                        href={`/practitioners/${row.practitioner_id}`}
                        className="text-brand-400 hover:text-brand-500 hover:underline dark:text-brand-300 dark:hover:text-brand-400"
                      >
                        {row.first_name}
                      </Link>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.last_name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">{row.age}</TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.weight_category}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.weight}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">{row.gym}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
