export type Evaluation = {
    id: number;
    session_id: number;
    practitioner_id: string;
    skill_id: number;
    evaluation_date: string;
    score: number;
    evaluator_practitioner_id: string;
    notes: string;
  };