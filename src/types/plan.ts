export type PullUpSteps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Workout = {
  id: PullUpSteps;
  name: string;
  color: string;
  count: number;
  set: number;
  total: number;
};

export type Plan = {
  id: number;
  createdAt: string;
  updatedAt: string;
  planDate: string;
  planName: string;
  planTime: string;
  planType: string;
  workout: Workout[];
  progress: number;
  note: string;
  mainColor: string;
};

export type PlanData = {
  [date: string]: Plan[];
};
