import { PractitionerList } from "@/components/practitioners/PractitionerList";
import { getPractitionersAction } from "@/actions/practitioner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practicantes",
  description: "Listado de practicantes",
};

export default async function PractitionersPage() {
  const list = await getPractitionersAction();
  const practitioners = list ?? [];
  const data = practitioners.map((p: Record<string, unknown>) => ({
    id: String(p.practitioner_id ?? p.id ?? ""),
    firstName: String(p.first_name ?? ""),
    lastName: String(p.last_name ?? ""),
    age: Number(p.age ?? 0),
    weightCategory: String(p.weight_category ?? ""),
    gym: String(p.gym ?? ""),
  }));

  return (
    <PractitionerList
      pageTitle="Practicantes"
      data={data}
      emptyMessage="No hay practicantes registrados"
    />
  );
}
