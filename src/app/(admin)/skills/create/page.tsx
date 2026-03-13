"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import MultiSelect from "@/components/form/MultiSelect";
import Button from "@/components/ui/button/Button";
import { createSkillAction } from "@/actions/skill";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const categoriasOptions = [
  { value: "principiante", text: "Principiante", selected: false },
  { value: "avanzado", text: "Avanzado", selected: false },
  { value: "experto", text: "Experto", selected: false },
  { value: "coach", text: "Coach", selected: false },
];

export default function CreateSkillPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCategoriaChange = (selected: string[]) => {
    setCategory(selected[0] ?? "");
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const scoreNum = parseInt(maxScore, 10);
    if (!name.trim()) {
      setError("El nombre es obligatorio.");
      return;
    }
    if (isNaN(scoreNum) || scoreNum < 0) {
      setError("La puntuación máxima debe ser un número mayor o igual a 0.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await createSkillAction({
        name: name.trim(),
        category: category.trim(),
        maxScore: scoreNum,
      });
      if (result) {
        router.push("/skills");
        router.refresh();
      } else {
        setError("No se pudo crear la habilidad. Revisa la consola del servidor.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear la habilidad.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="Crear habilidad" />

      <div className="max-w-2xl space-y-6">
        <ComponentCard>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
            )}
            <div>
              <Label htmlFor="nombre-habilidad">Nombre</Label>
              <input
                type="text"
                className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                id="nombre-habilidad"
                name="nombre-habilidad"
                placeholder="Nombre de la habilidad"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <MultiSelect
                label="Categoría"
                options={categoriasOptions}
                placeholder="Categoría de la habilidad"
                onChange={handleCategoriaChange}
                defaultSelected={category ? [category] : []}
                multiple={false}
              />
            </div>
            <div>
              <Label htmlFor="max-score">Puntuación máxima</Label>
              <input
                className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                type="number"
                id="max-score"
                name="max-score"
                min="0"
                placeholder="Ej: 10"
                value={maxScore}
                onChange={(e) => setMaxScore(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Button
                type="submit"
                size="md"
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Guardando…" : "Guardar"}
              </Button>
              <Link href="/skills">
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
