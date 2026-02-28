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
import { ListActionsCell } from "./ListActionsCell";

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
  editHrefPrefix?: string;
  deleteAction?: (id: string) => Promise<unknown>;
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
  deleteAction,
}: DataListPageProps<T>) {
  const hasActions = Boolean(editHrefPrefix || deleteAction);
  const colspan = columns.length + (hasActions ? 1 : 0);

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
                {hasActions && (
                  <TableCell isHeader className={tableHeaderCellClass + " w-40 text-end"}>
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
                    {hasActions && (
                      <TableCell className={tableBodyCellClass + " text-end"}>
                        <ListActionsCell
                          editHref={editHrefPrefix ? `${editHrefPrefix}${row.id}` : undefined}
                          deleteAction={deleteAction}
                          rowId={row.id}
                        />
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
