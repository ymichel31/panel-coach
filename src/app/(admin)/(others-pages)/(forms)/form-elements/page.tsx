import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import SelectInputs from "@/components/form/form-elements/SelectInputs";
import TextAreaInput from "@/components/form/form-elements/TextAreaInput";
import AsistentesMultiSelect from "@/components/form/form-elements/AsistentesMultiSelect";
import { Metadata } from "next";
import React from "react";
import Button from "@/components/ui/button/Button";
export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Crear Sesión" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="space-y-6">
          <DefaultInputs />
          <TextAreaInput />
          <div className="flex gap-4">
            <Button size="md" variant="primary">
              Guardar
            </Button>
            <Button size="md" variant="outline">
              Cancelar
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <SelectInputs />
            <AsistentesMultiSelect />

        </div>

      </div>
    </div>
  );
}

