"use client";

import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/input/TextArea";
import MultiSelect from "@/components/form/MultiSelect";
import SessionDateTimeField from "@/components/sessions/SessionDateTimeField";
import Button from "@/components/ui/button/Button";
import { evaluadoresOptions } from "@/constants/sessionForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { createSessionAction } from "@/actions/session";
import dayjs from "dayjs";


type SessionFormProps = {
  skills: any[];
  programLevels: any[];
};

type SessionFormInput = {
  title: string;
  description: string;
  datePart: string;
  timePart: string;
  categoryId: string;
  habilidades: string[];
  evaluadores: string[];
};

export default function SessionForm({ skills, programLevels }: SessionFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SessionFormInput>({
    defaultValues: {
      title: "",
      description: "",
      datePart: "",
      timePart: "",
      categoryId: "",
      habilidades: [],
      evaluadores: [],
    },
  });


  const habilidadesOptions = skills.map((skill) => ({
    value: skill.id,
    text: skill.name,
    selected: false,
  }));

  const categoriasOptions = programLevels.map((programLevel) => ({
    value: programLevel.id,
    text: programLevel.sublevel
      ? `${programLevel.level} - ${programLevel.sublevel}`
      : programLevel.level,
    selected: false,
  }));

  const onSubmit = async (data: SessionFormInput) => {
    if (!data.datePart || !data.timePart) {
      alert("Fecha y hora son obligatorias");
      return;
    }
  
    const date = dayjs(`${data.datePart} ${data.timePart}`).toISOString();
  
    try {
      const result = await createSessionAction({
        title: data.title,
        date,
        description: data.description,
      });
  
      if (result) {
        router.push("/sessions");
        router.refresh();
      } else {
        alert("No se pudo crear la sesión.");
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Error al crear la sesión");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} id="create-session-form">
          <ComponentCard>
            <div className="space-y-6">
              <div>
                <Label>Nombre</Label>
                <input
                  type="text"
                  placeholder="Nombre de la sesión"
                  className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  {...register("title", { required: "El nombre es obligatorio" })}
                />
                {errors.title && (
                  <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                )}
              </div>

              <Controller
                name="datePart"
                control={control}
                render={({ field }) => (
                  <SessionDateTimeField
                    datePart={field.value}
                    timePart={watch("timePart")}
                    onDatePartChange={field.onChange}
                    onTimePartChange={(time) => setValue("timePart", time)}
                  />
                )}
              />

              <div>
                <Label>Descripción</Label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      placeholder="Descripción de la sesión"
                      value={field.value}
                      onChange={field.onChange}
                      rows={6}
                    />
                  )}
                />
              </div>
            </div>
          </ComponentCard>
        </form>
      </div>

      <div className="space-y-6">
        <ComponentCard>
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <MultiSelect
                label="Categoría"
                options={categoriasOptions}
                placeholder="Selecciona categoría"
                onChange={(selected) => field.onChange(selected[0] ?? "")}
                defaultSelected={[]}
                multiple={false}
              />
            )}
          />
        </ComponentCard>

        <ComponentCard>
          <Controller
            name="evaluadores"
            control={control}
            render={({ field }) => (
              <MultiSelect
                label="Evaluadores"
                options={evaluadoresOptions}
                placeholder="Selecciona evaluador"
                onChange={field.onChange}
                defaultSelected={[]}
              />
            )}
          />
        </ComponentCard>

        <ComponentCard>
          <Controller
            name="habilidades"
            control={control}
            render={({ field }) => (
              <MultiSelect
                label="Habilidades"
                options={habilidadesOptions}
                placeholder="Selecciona habilidades"
                onChange={field.onChange}
                defaultSelected={[]}
              />
            )}
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
  );
}