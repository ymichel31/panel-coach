"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import TextAreaInput from "@/components/form/form-elements/TextAreaInput";
import MultiSelect from "@/components/form/MultiSelect";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React from "react";

const categoriasOptions = [
  { value: "principiante", text: "Principiante", selected: false },
  { value: "avanzado", text: "Avanzado", selected: false },
  { value: "experto", text: "Experto", selected: false },
  { value: "coach", text: "Coach", selected: false },
];

const evaluadoresOptions = [
  { value: "1", text: "Juan Pérez", selected: false },
  { value: "2", text: "María García", selected: false },
  { value: "3", text: "Carlos López", selected: false },
  { value: "4", text: "Ana Martínez", selected: false },
  { value: "5", text: "Pedro Sánchez", selected: false },
];

export default function CrearSesionPage() {
  const handleEvaluadoresChange = (selected: string[]) => {
    console.log("Evaluadores seleccionados:", selected);
  };

  const handleCategoriaChange = (selected: string[]) => {
    console.log("Categoría seleccionada:", selected[0] ?? "");
  };

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
            <Link href="/sesiones">
              <Button size="md" variant="outline">
                Cancelar
              </Button>
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <ComponentCard>
            <MultiSelect
              label="Categoría"
              options={categoriasOptions}
              placeholder="Selecciona categoría"
              onChange={handleCategoriaChange}
              defaultSelected={[]}
              multiple={false}
            />
          </ComponentCard>
          <ComponentCard>
            <MultiSelect
              label="Evaluadores"
              options={evaluadoresOptions}
              placeholder="Selecciona evaluador"
              onChange={handleEvaluadoresChange}
              defaultSelected={[]}
            />
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}
