import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sesiones | Panel Coach",
  description: "Listado de sesiones",
};

// Datos de ejemplo; en producción vendrían de la API
const sesionesData: { id: number; nombre: string; fecha: string; estado: string }[] = [];

export default function SesionesPage() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <PageBreadcrumb pageTitle="Sesiones" />
        <Link href="/sesiones/crear">
          <Button size="md" variant="primary">
            Crear sesión
          </Button>
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Nombre
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Fecha
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Estado
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {sesionesData.length === 0 ? (
                <TableRow>
                  <td
                    colSpan={3}
                    className="px-5 py-8 text-center text-gray-500 text-theme-sm dark:text-gray-400"
                  >
                    No hay sesiones. Haz clic en &quot;Crear sesión&quot; para añadir una.
                  </td>
                </TableRow>
              ) : (
                sesionesData.map((sesion) => (
                  <TableRow key={sesion.id}>
                    <TableCell className="px-5 py-4 text-gray-800 text-theme-sm dark:text-white/90">
                      {sesion.nombre}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {sesion.fecha}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {sesion.estado}
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
