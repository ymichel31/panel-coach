import { PractitionerList } from "@/components/practitioners/PractitionerList";
import { getPractitionersAction } from "@/actions/practitioner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practicantes",
  description: "Listado de practicantes",
};

export default async function PractitionersPage() {
  const practitioners = await getPractitionersAction();

  return (
    <PractitionerList
      pageTitle="Practicantes"
      data={practitioners ?? []}
      emptyMessage="No hay practicantes registrados"
    />
  );
}
