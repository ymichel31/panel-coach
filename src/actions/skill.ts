'use server';

import { revalidatePath } from 'next/cache';

import type { SkillInput } from '@/types/skill';
import { createSkill, deleteSkill, getSkillById, getSkills, updateSkill } from '@/services/skill';

export async function getSkillsAction() {
  return await getSkills();
}

export async function getSkillByIdAction(id: string) {
  return await getSkillById(id);
}

export async function createSkillAction(skill: SkillInput) {
  const data = await createSkill(skill);
  revalidatePath('/skills');
  return data;
}

export async function updateSkillAction(skill: SkillInput & { id: string }) {
  const data = await updateSkill(skill);
  revalidatePath('/skills');
  return data;
}

export async function deleteSkillAction(id: string) {
  const data = await deleteSkill(id);
  revalidatePath('/skills');
  return data;
}
