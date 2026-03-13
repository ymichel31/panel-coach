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

export type SkillRow = {
  id: string;
  name: string;
  category: string;
  maxScore: number;
};

type SkillListProps = {
  pageTitle: string;
  createButtonLabel: string;
  createHref: string;
  data: SkillRow[];
  emptyMessage: string;
  editHrefPrefix: string;
  deleteAction: (id: string) => Promise<unknown>;
};

export function SkillList({
  pageTitle,
  createButtonLabel,
  createHref,
  data,
  emptyMessage,
  editHrefPrefix,
  deleteAction,
}: SkillListProps) {
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
                  Categoría
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                  Puntuación máx.
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
                      {row.name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.category}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.maxScore}
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
