"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function DefaultInputs() {
  return (
    <ComponentCard>
      <div className="space-y-6">
        <div>
          <Label>Nombre</Label>
          <Input
            type="text"
            placeholder="Nombre de la sesión"
          />
        </div>

        <div>
          <Label htmlFor="fecha-hora">Fecha y hora</Label>
          <Input
            type="datetime-local"
            id="fecha-hora"
            name="fecha-hora"
            className="[&::-webkit-calendar-picker-indicator]:invert"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
