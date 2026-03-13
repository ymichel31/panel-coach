'use server';
import { getPractitionerById, getPractitioners } from '@/services/practitioner';

export async function getPractitionersAction() {
  return getPractitioners();
}

export async function getPractitionerByIdAction(id: string) {
  return getPractitionerById(id);
}