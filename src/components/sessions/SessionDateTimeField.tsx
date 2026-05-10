"use client";

import Label from "@/components/form/Label";
import { useRef } from "react";

type SessionDateTimeFieldProps = {
  datePart: string;
  timePart: string;
  onDatePartChange: (value: string) => void;
  onTimePartChange: (value: string) => void;
};

export default function SessionDateTimeField({
  datePart,
  timePart,
  onDatePartChange,
  onTimePartChange,
}: SessionDateTimeFieldProps) {
  const timeInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Label htmlFor="fecha">Fecha y hora</Label>
      <div className="session-datetime-field flex h-11 w-full items-center overflow-hidden rounded-lg border border-gray-300 bg-transparent text-gray-800 focus-within:border-brand-300 focus-within:ring-3 focus-within:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus-within:border-brand-800">
        <input
          type="date"
          id="fecha"
          value={datePart}
          onChange={(e) => onDatePartChange(e.target.value)}
          onClick={(e) => e.currentTarget.showPicker?.()}
          className="relative min-w-0 flex-1 cursor-pointer border-0 bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none dark:bg-transparent dark:text-white/90"
        />
        <input
          ref={timeInputRef}
          type="time"
          id="hora"
          value={timePart}
          onChange={(e) => onTimePartChange(e.target.value)}
          onClick={() => timeInputRef.current?.showPicker?.()}
          className="relative min-w-0 flex-1 cursor-pointer border-0 bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none dark:bg-transparent dark:text-white/90"
        />
        <label
          htmlFor="hora"
          className="flex shrink-0 cursor-pointer items-center justify-center pl-2 pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          title="Elegir hora"
          onClick={(e) => {
            e.preventDefault();
            timeInputRef.current?.focus();
            timeInputRef.current?.showPicker?.();
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </label>
      </div>
    </div>
  );
}
