"use client";
import React from "react";
import MultiSelect from "../MultiSelect";
import ComponentCard from "@/components/common/ComponentCard";

const asistentesOptions = [
  { value: "1", text: "Juan Pérez", selected: false },
  { value: "2", text: "María García", selected: false },
  { value: "3", text: "Carlos López", selected: false },
  { value: "4", text: "Ana Martínez", selected: false },
  { value: "5", text: "Pedro Sánchez", selected: false },
];

export default function AsistentesMultiSelect() {
  const handleChange = (selected: string[]) => {
    console.log("Asistentes seleccionados:", selected);
  };

  return (
    <ComponentCard>
      <div className="space-y-6">
    <MultiSelect
      label="Asistentes"
      options={asistentesOptions}
      onChange={handleChange}
      defaultSelected={[]}
    />
    </div>
    </ComponentCard>
  );
}
