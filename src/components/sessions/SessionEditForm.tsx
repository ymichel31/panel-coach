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
import { updateSessionAction } from "@/actions/session";
import dayjs from "dayjs";
import { parseDateToParts } from "../../utils/date";
type Session = { id: string; title?: string; date?: string; description?: string };


export default function SessionEditForm({ session }: { session: Session }) {
  const router = useRouter();
  const { datePart: initialDate, timePart: initialTime } = parseDateToParts(session.date);
  const [title, setTitle] = useState(session.title ?? "");
  const [datePart, setDatePart] = useState(initialDate);
  const [timePart, setTimePart] = useState(initialTime);
  const [description, setDescription] = useState(session.description ?? "");
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
    const date = datePart && timePart ? dayjs(`${datePart} ${timePart}`).toISOString() : "";
    if (!title.trim() || !date) {
      setError("Nombre, fecha y hora son obligatorios.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await updateSessionAction({ id: session.id, title, date, description });
      if (result) {
        router.push("/sessions");
        router.refresh();
      } else {
        setError("No se pudo actualizar la sesión. Revisa la consola del servidor.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar la sesión");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="Editar sesión" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="space-y-6">
          <form id="edit-session-form" onSubmit={handleSubmit}>
            <ComponentCard>
              <div className="space-y-6">
                <div>
                  <Label>Nombre</Label>
                  <input
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    type="text"
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
            form="edit-session-form"
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
