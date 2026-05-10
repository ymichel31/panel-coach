'use server';

import { getEvaluations, getEvaluationsBySessionAndPractitioner } from '@/services/evaluation';

export async function getEvaluationsAction() {
  return getEvaluations();
}

export async function getEvaluationsBySessionAndPractitionerAction(sessionId: number, practitionerId: string) {
  return getEvaluationsBySessionAndPractitioner(sessionId, practitionerId);
}
