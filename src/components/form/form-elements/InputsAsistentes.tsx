"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { EnvelopeIcon } from "../../../icons";
import PhoneInput from "../group-input/PhoneInput";

const countries = [
  { code: "US", label: "+1" },
  { code: "CA", label: "+1" },
  { code: "CO", label: "+57" },
];

export default function InputsAsistentes() {
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Teléfono:", phoneNumber);
  };

  return (
    <ComponentCard>
      <div className="space-y-6">
        <div>
          <Label htmlFor="nombre-asistente">Nombre</Label>
          <Input
            id="nombre-asistente"
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="apellido-asistente">Apellido</Label>
          <Input
            id="apellido-asistente"
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="email-asistente">Email</Label>
          <div className="relative">
            <Input
              id="email-asistente"
              type="email"
              name="email"
              placeholder="correo@ejemplo.com"
              className="pl-[62px]"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-white">
              <EnvelopeIcon />
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="telefono-asistente">Teléfono</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+57 (300) 123-4567"
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
