"use client";

import { useRef } from "react";
import Label from "@/components/form/Label";

type DatePickerFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const inputClass =
  "relative min-w-0 flex-1 cursor-pointer border-0 bg-transparent px-3 py-2.5 text-sm outline-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 dark:bg-transparent";

export default function DatePickerField({ label, value, onChange }: DatePickerFieldProps) {
  const dateInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Label htmlFor="fecha">
        {label.endsWith(" *") ? (
          <>
            {label.slice(0, -2)}
            <span className="text-error-500">*</span>
          </>
        ) : (
          label
        )}
      </Label>
      <div className="flex h-11 w-full items-center overflow-hidden rounded-lg border border-gray-300 bg-transparent text-gray-800 focus-within:border-brand-300 focus-within:ring-3 focus-within:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus-within:border-brand-800">
        <label
          htmlFor="fecha"
          className="flex cursor-pointer items-center justify-center pl-3 pr-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          title="Elegir fecha"
          onClick={(e) => {
            e.preventDefault();
            dateInputRef.current?.focus();
            dateInputRef.current?.showPicker?.();
          }}
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
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </label>
        <input
          ref={dateInputRef}
          type="date"
          id="fecha"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          onClick={() => dateInputRef.current?.showPicker?.()}
          className={inputClass}
        />
      </div>
    </div>
  );
}