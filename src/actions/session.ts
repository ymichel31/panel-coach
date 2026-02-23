'use server';

import { revalidatePath } from 'next/cache';

import type { SessionInput } from '@/types/session';
import {
  createSession,
  deleteSession,
  getSessionById,
  getSessions,
  updateSession,
} from '@/services/session';

export async function getSessionsAction() {
  return await getSessions();
}

export async function getSessionByIdAction(id: string) {
  return await getSessionById(id);
}

export async function createSessionAction(session: SessionInput) {
  const data = await createSession(session);
  revalidatePath('/sessions');
  return data;
}

export async function updateSessionAction(session: SessionInput & { id: string }) {
  const data = await updateSession(session);
  revalidatePath('/sessions');
  return data;
}

export async function deleteSessionAction(id: string) {
  const data = await deleteSession(id);
  revalidatePath('/sessions');
  return data;
}
