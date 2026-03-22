export type SkillInput = {
  name: string;
  category: string;
  maxScore: number;
};

export type Skill = {
  id: string;
  name: string;
  category_id: string;
  max_score: number;
  created_at: string;
  updated_at: string;
};

export type SkillCategory = {
  id: string;
  category: string;
  created_at: string;
  updated_at: string;
};