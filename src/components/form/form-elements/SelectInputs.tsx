"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import MultiSelect from "../MultiSelect";

const categoriasOptions = [
  { value: "principiante", text: "Principiante", selected: false },
  { value: "avanzado", text: "Avanzado", selected: false },
  { value: "experto", text: "Experto", selected: false },
  { value: "coach", text: "Coach", selected: false },
];

interface SelectInputsProps {
  className?: string;
}

export default function SelectInputs({ className }: SelectInputsProps) {
  const handleCategoriasChange = (selected: string[]) => {
    console.log("Categoría seleccionada:", selected[0] ?? "");
  };

  return (
    <ComponentCard className={className}>
      <div className="space-y-6">
        <MultiSelect
          label="Categorías"
          options={categoriasOptions}
          placeholder="Selecciona categoría"
          onChange={handleCategoriasChange}
          defaultSelected={[]}
          multiple={false}
        />
      </div>
    </ComponentCard>
  );
}
