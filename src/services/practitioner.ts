import { PRACTITIONER_EVALUATOR_LEVEL } from "@/constants/programLevels";
import { createClient } from "@/lib/supabase/server";
import type { Practitioner, PractitionerInput } from "@/types/practitioner";

export const getPractitioners = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("practitioners").select("*");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
};

export const getPractitionerById = async (practitionerId: string): Promise<Practitioner | null> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("practitioners")
    .select("*")
    .eq("practitioner_id", practitionerId)
    .maybeSingle();
  if (error) {
    console.error(error);
    return null;
  }
  return data as Practitioner | null;
};


export const createPractitioner = async (practitioner: PractitionerInput) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("practitioners").insert(practitioner);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

export const getPractitionerEvaluators = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("practitioners").select("*").eq("program_level_id", PRACTITIONER_EVALUATOR_LEVEL);
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}