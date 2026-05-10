"use client";

import { useId, useRef } from "react";
import Label from "@/components/form/Label";

type DatePickerFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function DatePickerField({ label, value, onChange }: DatePickerFieldProps) {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const fieldId = useId();

  return (
    <div>
      <Label htmlFor={fieldId}>
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
        <input
          ref={dateInputRef}
          type="date"
          id={fieldId}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          onClick={() => dateInputRef.current?.showPicker?.()}
          className="date-input-custom relative min-w-0 flex-1 cursor-pointer appearance-none border-0 bg-transparent px-3 py-2.5 text-sm outline-none dark:bg-transparent"
        />
      </div>
    </div>
  );
}
