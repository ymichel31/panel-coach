import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

export type Column<T = Record<string, unknown>> = {
  key: keyof T | string;
  header: string;
};

type DataListPageProps<T extends Record<string, unknown> & { id: number | string }> = {
  pageTitle: string;
  createButtonLabel: string;
  createHref: string;
  columns: Column<T>[];
  data: T[];
  emptyMessage: string;
  /** Si se define, se añade una columna "Acciones" con enlace Editar a {editHrefPrefix}{row.id} */
  editHrefPrefix?: string;
};

const tableHeaderCellClass =
  "px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400";
const tableBodyCellClass = "px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400";
const tableBodyCellPrimaryClass =
  "px-5 py-4 text-gray-800 text-theme-sm dark:text-white/90";
const emptyCellClass =
  "px-5 py-8 text-center text-gray-500 text-theme-sm dark:text-gray-400";

export function DataListPage<T extends Record<string, unknown> & { id: number | string }>({
  pageTitle,
  createButtonLabel,
  createHref,
  columns,
  data,
  emptyMessage,
  editHrefPrefix,
}: DataListPageProps<T>) {
  const colspan = columns.length + (editHrefPrefix ? 1 : 0);

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
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    isHeader
                    className={tableHeaderCellClass}
                  >
                    {col.header}
                  </TableCell>
                ))}
                {editHrefPrefix && (
                  <TableCell isHeader className={tableHeaderCellClass + " w-24 text-end"}>
                    Acciones
                  </TableCell>
                )}
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.length === 0 ? (
                <TableRow>
                  <td
                    colSpan={colspan}
                    className={emptyCellClass}
                  >
                    {emptyMessage}
                  </td>
                </TableRow>
              ) : (
                data.map((row) => (
                  <TableRow key={row.id}>
                    {columns.map((col, i) => (
                      <TableCell
                        key={String(col.key)}
                        className={
                          i === 0 ? tableBodyCellPrimaryClass : tableBodyCellClass
                        }
                      >
                        {String(row[col.key as keyof T] ?? "")}
                      </TableCell>
                    ))}
                    {editHrefPrefix && (
                      <TableCell className={tableBodyCellClass + " text-end"}>
                        <Link
                          href={`${editHrefPrefix}${row.id}`}
                          className="text-brand-500 hover:underline text-theme-sm"
                        >
                          Editar
                        </Link>
                      </TableCell>
                    )}
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
