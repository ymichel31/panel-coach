"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import MultiSelect from "../MultiSelect";

const tipoPruebaOptions = [
  { value: "psicologico", text: "Psicológico", selected: false },
  { value: "tecnico", text: "Técnico", selected: false },
  { value: "mixto", text: "Mixto", selected: false },
];

export default function InputsTest() {
  const handleTipoPruebaChange = (selected: string[]) => {
    console.log("Tipo(s) de prueba seleccionado(s):", selected);
  };

  return (
    <ComponentCard>
      <div className="space-y-6">
        <div>
          <Label htmlFor="nombre-prueba">Nombre de la Prueba</Label>
          <Input
            id="nombre-prueba"
            type="text"
            placeholder="Ingresa el nombre de la prueba"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <MultiSelect
          label="Tipo de Prueba"
          options={tipoPruebaOptions}
          placeholder="Selecciona el tipo de prueba"
          onChange={handleTipoPruebaChange}
          defaultSelected={[]}
        />
      </div>
    </ComponentCard>
  );
}
