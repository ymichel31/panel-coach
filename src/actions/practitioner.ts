'use server';
import { getPractitionerById, getPractitioners, getPractitionerEvaluators } from '@/services/practitioner';

export async function getPractitionersAction() {
  return getPractitioners();
}

export async function getPractitionerByIdAction(id: string) {
  return getPractitionerById(id);
}

export async function getPractitionerEvaluatorsAction() {
  return getPractitionerEvaluators();
}