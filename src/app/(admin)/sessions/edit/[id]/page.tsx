import { getSessionByIdAction } from "@/actions/session";
import SessionEditForm from "../../../../../components/sessions/SessionEditForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Editar sesión",
  description: "Editar sesión",
};

export default async function EditSessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getSessionByIdAction(id);
  if (!session) notFound();
  return <SessionEditForm session={session} />;
}
