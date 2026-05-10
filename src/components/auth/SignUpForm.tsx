"use client";
import Label from "@/components/form/Label";
import DatePickerField from "@/components/form/DatePickerField";
import { SignUpInput } from "@/types/auth";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

type Props = {
  onSubmit: (data: SignUpInput) => void;
};

export default function SignUpForm({ onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignUpInput>({
    defaultValues: {
      start_date: "",
    },
  });

  const [successMessage, setSuccessMessage] = useState("");

  /*const handleFormSubmit = async (data: SignUpInput) => {
    await onSubmit(data);
    setSuccessMessage("Registro exitoso");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
    reset();
  };*/

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Regístrate
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Introduce tus datos para crear una cuenta.
            </p>
          </div>

          <div>
            {successMessage && (
              <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg">
                <p>{successMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">

                {/* Name and Last Name */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div className="sm:col-span-1">
                    <Label>
                      Nombre <span className="text-error-500">*</span>
                    </Label>
                    <input
                      className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      type="text"
                      id="first_name"
                      placeholder="Ej. María"
                      {...register("first_name")}
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <Label>
                      Apellidos <span className="text-error-500">*</span>
                    </Label>
                    <input
                      className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      type="text"
                      id="last_name"
                      placeholder="Ej. García"
                      {...register("last_name")}
                    />
                  </div>

                </div>

                {/* Age and Weight Category */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div className="sm:col-span-1">
                    <Label>
                      Edad <span className="text-error-500">*</span>
                    </Label>

                    <input
                      className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      type="number"
                      id="age"
                      min={1}
                      step={1}
                      placeholder="Ej. 20"
                      {...register("age")}
                    />
                  </div>

                  {/* Weight Category */}
                  <div className="sm:col-span-1">
                    <Label>
                      Categoría de peso <span className="text-error-500">*</span>
                    </Label>

                    <input
                      className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      type="text"
                      id="weight_category"
                      placeholder="Ej. Pesado"
                      {...register("weight_category")}
                    />
                  </div>

                  {/* Current Weight */}
                  <div className="sm:col-span-1">
                    <Label>
                      Peso actual <span className="text-error-500">*</span>
                    </Label>
                    <input
                      className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      type="number"
                      min={40}
                      step={0.1}
                      placeholder="Ej. 80 kg"
                      {...register("weight")}
                    />
                  </div>

                  {/* Gym */}
                  <div className="sm:col-span-1">
                    <Label>
                      Gym <span className="text-error-500">*</span>
                    </Label>

                    <input
                      className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      type="text"
                      id="gym"
                      placeholder="Ej. Gym 1"
                      {...register("gym")}
                    />
                  </div>

                </div>

                {/* Start Date and Gym */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="sm:col-span-1">
                    <Controller
                      name="start_date"
                      control={control}
                      render={({ field }) => (
                        <DatePickerField
                          label="Fecha de inicio *"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <Label>
                    Correo <span className="text-error-500">*</span>
                  </Label>
                  <input
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    type="email"
                    id="email"
                    placeholder="ejemplo@correo.com"
                    {...register("email")}
                  />
                </div>

                {/* Password */}
                <div>
                  <Label>
                    Contraseña <span className="text-error-500">*</span>
                  </Label>

                  <div className="relative">
                    <input
                      className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                      placeholder="Introduce tu contraseña"
                      {...register("password")}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                  >
                    Regístrate
                  </button>
                </div>

              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                ¿Ya tienes cuenta?{" "}
                <Link
                  href="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Iniciar sesión
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}