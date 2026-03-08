import { DataListPage } from "@/components/common/DataListPage";
import { getPractitionersAction } from "@/actions/practitioner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Practicantes",
  description: "Listado de practicantes",
};

type PracticanteRow = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  weightCategory: string;
  gym: string;
};

const columns = [
  { key: "firstName" as const, header: "Nombre" },
  { key: "lastName" as const, header: "Apellido" },
  { key: "age" as const, header: "Edad" },
  { key: "weightCategory" as const, header: "Categoría peso" },
  { key: "gym" as const, header: "Gimnasio" },
];

export default async function PractitionersPage() {
  const list = await getPractitionersAction();
  const data: PracticanteRow[] = (list ?? []).map((p: Record<string, unknown>) => ({
    id: String(p.practitioner_id ?? p.id ?? ""),
    firstName: String(p.first_name ?? ""),
    lastName: String(p.last_name ?? ""),
    age: Number(p.age ?? 0),
    weightCategory: String(p.weight_category ?? ""),
    gym: String(p.gym ?? ""),
  }));

  return (
    <DataListPage<PracticanteRow>
      pageTitle="Practicantes"
      createButtonLabel="Nuevo practicante"
      createHref="/practitioners/create"
      columns={columns}
      data={data}
      emptyMessage='No hay practicantes. Haz clic en "Nuevo practicante" para añadir uno.'
    />
  );
}
