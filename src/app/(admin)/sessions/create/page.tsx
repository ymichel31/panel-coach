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

// Habilidades disponibles (en producción vendrían de la API /skills)
const habilidadesOptions = [
  { value: "1", text: "Comunicación", selected: false },
  { value: "2", text: "Liderazgo", selected: false },
  { value: "3", text: "Trabajo en equipo", selected: false },
  { value: "4", text: "Resolución de problemas", selected: false },
  { value: "5", text: "Gestión del tiempo", selected: false },
];

export default function CreateSessionPage() {
  const handleEvaluadoresChange = (selected: string[]) => {
    console.log("Evaluadores seleccionados:", selected);
  };

  const handleCategoriaChange = (selected: string[]) => {
    console.log("Categoría seleccionada:", selected[0] ?? "");
  };

  const handleHabilidadesChange = (selected: string[]) => {
    console.log("Habilidades seleccionadas:", selected);
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
            <Link href="/sessions">
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
          <ComponentCard>
            <MultiSelect
              label="Habilidades"
              options={habilidadesOptions}
              placeholder="Selecciona habilidades"
              onChange={handleHabilidadesChange}
              defaultSelected={[]}
            />
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}
