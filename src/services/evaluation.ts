import { createClient } from "@/lib/supabase/server";
import type { Evaluation, EvaluationDetail } from "@/types/evaluation";

export const getEvaluations = async (): Promise<Evaluation[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("list_evaluations")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
};

export const getEvaluationsBySessionAndPractitioner = async (
  sessionId: number,
  practitionerId: string
): Promise<EvaluationDetail[] | null> => {
  const supabase = await createClient();

  const { data, error } = await supabase
  .from("evaluations_detail")
  .select("*")
  .eq("session_id", sessionId)
  .eq("practitioner_id", practitionerId);

  if (error) {
    console.error(error);
    return null;
  }
  return data as unknown as EvaluationDetail[] | null;
};