"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import MultiSelect from "@/components/form/MultiSelect";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React, { useState } from "react";

const categoriasOptions = [
  { value: "principiante", text: "Principiante", selected: false },
  { value: "avanzado", text: "Avanzado", selected: false },
  { value: "experto", text: "Experto", selected: false },
  { value: "coach", text: "Coach", selected: false },
];

export default function CrearHabilidadPage() {
  const [descripcion, setDescripcion] = useState("");

  const handleCategoriaChange = (selected: string[]) => {
    console.log("Categoría seleccionada:", selected[0] ?? "");
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Crear habilidad" />

      <div className="max-w-2xl space-y-6">
        <ComponentCard>
          <div className="space-y-6">
            <div>
              <Label htmlFor="nombre-habilidad">Nombre</Label>
              <Input
                type="text"
                id="nombre-habilidad"
                name="nombre-habilidad"
                placeholder="Nombre de la habilidad"
              />
            </div>
            <div>
              <MultiSelect
                label="Categoría"
                options={categoriasOptions}
                placeholder="Categoría de la habilidad"
                onChange={handleCategoriaChange}
                defaultSelected={[]}
                multiple={false}
              />
            </div>
            <div>
              <Label>Descripción</Label>
              <TextArea
                value={descripcion}
                onChange={(value) => setDescripcion(value)}
                rows={4}
                placeholder="Descripción de la habilidad"
              />
            </div>
            <div className="flex gap-4">
              <Button size="md" variant="primary">
                Guardar
              </Button>
              <Link href="/habilidades">
                <Button size="md" variant="outline">
                  Cancelar
                </Button>
              </Link>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
