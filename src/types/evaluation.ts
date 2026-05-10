export type Evaluation = {
    session_id: number;
    practitioner_id: string;
    title: string;
    date: string;
    first_name: string;
    last_name: string;
  };


  export type EvaluationDetail = {
    id: number;
    first_name: string;
    last_name: string;
    gym: string;
    start_date: string;
    skill: string;
    score: number;
    category: string;
    max_score: number;
  };