export type PractitionerInput = {
  practitioner_id: string;
  first_name: string;
  last_name: string;
  age: number;
  weight_category: string;
  start_date: string;
  gym: string;
};

export type Practitioner = {
  practitioner_id: string;
  first_name: string;
  last_name: string;
  age: number;
  weight_category: string;
  start_date: string;
  gym: string;
  program_level_id: number;
  created_at: string;
  updated_at: string;
};