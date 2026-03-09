"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React, { useState } from "react";

export default function CreatePractitionerPage() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [experiencia, setExperiencia] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nombre, apellido, edad, correo, experiencia });
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Nuevo practicante" />

      <div className="max-w-2xl">
        <ComponentCard>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="apellido">Apellido</Label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="edad">Edad</Label>
              <input
                type="number"
                id="edad"
                name="edad"
                placeholder="Edad"
                min="1"
                max="120"
                value={edad}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEdad(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="correo">Correo</Label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="correo@ejemplo.com"
                value={correo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCorreo(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="experiencia">Experiencia</Label>
                <input
                type="text"
                id="experiencia"
                name="experiencia"
                placeholder="Ej: 2 años, 6 meses..."
                value={experiencia}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExperiencia(e.target.value)}
              />
              <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                Tiempo que lleva practicando
              </p>
            </div>
            <div className="flex gap-4">
              <Button type="submit" size="md" variant="primary">
                Guardar
              </Button>
              <Link href="/practitioners">
                <Button type="button" size="md" variant="outline">
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>
        </ComponentCard>
      </div>
    </div>
  );
}
