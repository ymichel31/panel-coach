import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { ListActionsCell } from "@/components/common/ListActionsCell";
import Button from "@/components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export type SessionRow = {
  id: string;
  title: string;
  date: string;
  description: string;
};

type SessionListProps = {
  pageTitle: string;
  createButtonLabel: string;
  createHref: string;
  data: SessionRow[];
  emptyMessage: string;
  editHrefPrefix: string;
  deleteAction: (id: string) => Promise<unknown>;
};

export function SessionList({
  pageTitle,
  createButtonLabel,
  createHref,
  data,
  emptyMessage,
  editHrefPrefix,
  deleteAction,
}: SessionListProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <PageBreadcrumb pageTitle={pageTitle} />
        <Link href={createHref}>
          <Button size="md" variant="primary">
            {createButtonLabel}
          </Button>
        </Link>
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
                  Fecha
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Descripción
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 w-40 text-end"
                >
                  Acciones
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.length === 0 ? (
                <TableRow>
                  <td colSpan={4} className="px-5 py-8 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                    {emptyMessage}
                  </td>
                </TableRow>
              ) : (
                data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="px-5 py-4 text-gray-800 text-theme-sm dark:text-white/90">
                      <Link
                        href={`/sessions/${row.id}`}
                        className="text-brand-400 hover:text-brand-500 hover:underline dark:text-brand-300 dark:hover:text-brand-400"
                      >
                        {row.title}
                      </Link>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.date}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.description}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400 text-end">
                      <ListActionsCell
                        editHref={`${editHrefPrefix}${row.id}`}
                        deleteAction={deleteAction}
                        rowId={row.id}
                      />
                    </TableCell>
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
