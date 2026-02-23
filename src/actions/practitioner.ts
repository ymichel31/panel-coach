'use server';

import { getPractitionerById, getPractitioners } from '@/services/practitioner';

export async function getPractitionersAction() {
  return await getPractitioners();
}

export async function getPractitionerByIdAction(id: string) {
  return await getPractitionerById(id);
}
