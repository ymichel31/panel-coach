"use server";

import { getProgramLevelsService } from "@/services/programLevel";

export async function getProgramLevelsAction() {
  return await getProgramLevelsService();
}
