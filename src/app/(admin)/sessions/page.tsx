import { SessionList } from "@/components/sessions/SessionList";
import { getSessionsAction, deleteSessionAction } from "@/actions/session";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesiones",
  description: "Listado de sesiones",
};

export default async function SessionsPage() {
  const sessions = await getSessionsAction();
  
  return (
    <SessionList
      pageTitle="Sesiones"
      createButtonLabel="Crear sesión"
      createHref="/sessions/create"
      data={sessions ?? []}
      emptyMessage='No hay sesiones. Haz clic en "Crear sesión" para añadir una.'
      editHrefPrefix="/sessions/edit/"
      deleteAction={deleteSessionAction}
    />
  );
}
