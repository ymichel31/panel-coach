"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import MultiSelect from "@/components/form/MultiSelect";
import TextAreaInput from "@/components/form/form-elements/TextAreaInput";
import React from "react";
import Button from "@/components/ui/button/Button";

// Opciones de asistentes (en producción vendrían de la API, ej. asistentes registrados)
const asistentesOptions = [
  { value: "1", text: "Juan Pérez", selected: false },
  { value: "2", text: "María García", selected: false },
  { value: "3", text: "Carlos López", selected: false },
  { value: "4", text: "Ana Martínez", selected: false },
  { value: "5", text: "Pedro Sánchez", selected: false },
];

export default function FormSesion() {
  const handleAsistentesChange = (selected: string[]) => {
    console.log("Asistentes seleccionados:", selected);
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Crear Sesión" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="space-y-6">
          <DefaultInputs />
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-gray-900">
            <MultiSelect
              label="Asistentes"
              options={asistentesOptions}
              onChange={handleAsistentesChange}
              defaultSelected={[]}
            />
          </div>
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
      </div>
    </div>
  );
}
