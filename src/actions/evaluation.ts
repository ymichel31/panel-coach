'use server';

import { getEvaluationById, getEvaluations } from '@/services/evaluation';

export async function getEvaluationsAction() {
  return getEvaluations();
}

export async function getEvaluationByIdAction(evaluationId: string) {
  return getEvaluationById(evaluationId);
}
