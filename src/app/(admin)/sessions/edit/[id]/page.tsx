import { getSessionByIdAction } from "@/actions/session";
import SessionEditForm from "./SessionEditForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Editar sesión | Panel Coach",
  description: "Editar sesión",
};

export default async function EditSessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const list = await getSessionByIdAction(id);
  if (!list || !Array.isArray(list) || list.length === 0) notFound();
  const session = list[0] as { id: string; title?: string; date?: string; description?: string };
  return <SessionEditForm session={session} />;
}
