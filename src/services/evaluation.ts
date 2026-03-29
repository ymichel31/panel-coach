import { createClient } from "@/lib/supabase/server";
import type { Evaluation } from "@/types/evaluation";

export const getEvaluations = async (): Promise<Evaluation[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("evaluations")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
};

export const getEvaluationById = async (
  id: number
): Promise<Evaluation | null> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("evaluations")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    return null;
  }

  return data as Evaluation | null;
};