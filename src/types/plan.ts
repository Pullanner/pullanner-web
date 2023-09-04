export type PullUpSteps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Workout = {
  count: number;
  set: number;
  done: boolean;
  step: PullUpSteps;
};

export type PlanType = 'strength' | 'master';

export type Plan = {
  id: number;
  createdAt: string;
  updatedAt: string;
  planDateTime: string;
  planName: string;
  planType: PlanType;
  workout: Workout[];
  progress: number;
  note: string;
  mainWorkoutStep: PullUpSteps;
};

export type PlanData = {
  [date: string]: Plan[];
};

export type SelectedWorkoutType = {
  id: PullUpSteps;
  name: string;
  color: string;
  count: number;
  set: number;
  total: number;
};
