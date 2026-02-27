"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type ListActionsCellProps = {
  editHref?: string;
  deleteAction?: (id: string) => Promise<unknown>;
  rowId: string | number;
};

export function ListActionsCell({ editHref, deleteAction, rowId }: ListActionsCellProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = String(rowId);

  async function handleDelete() {
    if (!deleteAction) return;
    const ok = window.confirm("¿Estás seguro de que quieres eliminar este registro?");
    if (!ok) return;
    setError(null);
    setIsDeleting(true);
    try {
      await deleteAction(id);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1 text-theme-sm">
      {error && (
        <span className="text-red-500 text-xs" role="alert">
          {error}
        </span>
      )}
      <div className="flex items-center gap-3">
        {editHref && (
          <Link href={editHref} className="text-brand-500 hover:underline">
            Editar
          </Link>
        )}
        {deleteAction && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-red-500 hover:underline disabled:opacity-50"
          >
            {isDeleting ? "Eliminando…" : "Eliminar"}
          </button>
        )}
      </div>
    </div>
  );
}
