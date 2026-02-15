import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import InputsTest from "@/components/form/form-elements/InputsTest";
import SelectInputs from "@/components/form/form-elements/SelectInputs";
import TextAreaInput from "@/components/form/form-elements/TextAreaInput";
import { Metadata } from "next";
import React from "react";
import Button from "@/components/ui/button/Button";

export const metadata: Metadata = {
  title: "Next.js Form Pruebas | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Pruebas page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
export default function FormPruebas() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Crear Prueba" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="space-y-6">
          <InputsTest />
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
        </div>

      </div>
    </div>
  );
}

