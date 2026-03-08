import { DataListPage } from "@/components/common/DataListPage";
import { getSessionsAction, deleteSessionAction } from "@/actions/session";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sesiones",
  description: "Listado de sesiones",
};

export default async function SessionsPage() {
  const sessions = await getSessionsAction();

  const columns = [
    { key: "title" as const, header: "Nombre" },
    { key: "date" as const, header: "Fecha" },
    { key: "description" as const, header: "Descripción" },
  ];

  const data = (sessions ?? []).map((s: { id: string; title?: string; date?: string; description?: string }) => ({
    id: s.id,
    title: s.title ?? "",
    date: s.date ?? "",
    description: s.description ?? "",
  }));

  return (
    <DataListPage
      pageTitle="Sesiones"
      createButtonLabel="Crear sesión"
      createHref="/sessions/create"
      columns={columns}
      data={data}
      emptyMessage='No hay sesiones. Haz clic en "Crear sesión" para añadir una.'
      editHrefPrefix="/sessions/edit/"
      deleteAction={deleteSessionAction}
    />
  );
}
