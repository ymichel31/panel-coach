"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/input/TextArea";
import MultiSelect from "@/components/form/MultiSelect";
import SessionDateTimeField from "@/components/sessions/SessionDateTimeField";
import Button from "@/components/ui/button/Button";
import {
  categoriasOptions,
  evaluadoresOptions,
  habilidadesOptions,
} from "@/constants/sessionForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { createSessionAction } from "@/actions/session";

export default function CreateSessionPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [datePart, setDatePart] = useState("");
  const [timePart, setTimePart] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEvaluadoresChange = (selected: string[]) => {
    console.log("Evaluadores seleccionados:", selected);
  };

  const handleCategoriaChange = (selected: string[]) => {
    console.log("Categoría seleccionada:", selected[0] ?? "");
  };

  const handleHabilidadesChange = (selected: string[]) => {
    console.log("Habilidades seleccionadas:", selected);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const date = datePart && timePart ? `${datePart}T${timePart}` : "";
    if (!title.trim() || !date) {
      setError("Nombre, fecha y hora son obligatorios.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await createSessionAction({ title, date, description });
      if (result) {
        router.push("/sessions");
        router.refresh();
      } else {
        setError("No se pudo crear la sesión. Revisa la consola del servidor.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear la sesión");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="Crear Sesión" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="space-y-6">
          <form id="create-session-form" onSubmit={handleSubmit}>
            <ComponentCard>
              <div className="space-y-6">
                <div>
                  <Label>Nombre</Label>
                  <input
                    type="text"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    placeholder="Nombre de la sesión"
                    value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                <SessionDateTimeField
                  datePart={datePart}
                  timePart={timePart}
                  onDatePartChange={setDatePart}
                  onTimePartChange={setTimePart}
                />
                <div>
                  <Label>Descripción</Label>
                  <TextArea
                    placeholder="Descripción de la sesión"
                    value={description}
                    onChange={setDescription}
                    rows={6}
                  />
                </div>
              </div>
            </ComponentCard>
            {error && (
              <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>
            )}
          </form>
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
        <div className="flex gap-4">
            <button
              type="submit"
              form="create-session-form"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300"
            >
              {isSubmitting ? "Guardando…" : "Guardar"}
            </button>
            <Link href="/sessions">
              <Button size="md" variant="outline">
                Cancelar
              </Button>
            </Link>
          </div>
      </div>
    </div>
  );
}
