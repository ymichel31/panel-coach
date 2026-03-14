import { createClient } from "@/lib/supabase/server";

export const getProgramLevelsService = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("program_levels")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
};
