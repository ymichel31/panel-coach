import { SessionList } from "@/components/sessions/SessionList";
import { getSessionsAction, deleteSessionAction } from "@/actions/session";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesiones",
  description: "Listado de sesiones",
};

export default async function SessionsPage() {
  const sessions = await getSessionsAction();
  const data = (sessions ?? []).map(
    (s: { id: string; title?: string; date?: string; description?: string }) => ({
      id: s.id,
      title: s.title ?? "",
      date: s.date ?? "",
      description: s.description ?? "",
    })
  );

  return (
    <SessionList
      pageTitle="Sesiones"
      createButtonLabel="Crear sesión"
      createHref="/sessions/create"
      data={data}
      emptyMessage='No hay sesiones. Haz clic en "Crear sesión" para añadir una.'
      editHrefPrefix="/sessions/edit/"
      deleteAction={deleteSessionAction}
    />
  );
}
