export type PullUpSteps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Workout = {
  step: PullUpSteps;
  count: number;
  set: number;
  done: boolean;
};

export type PlanType = 'strength' | 'master';

export type Plan = {
  id: number;
  createdAt: string;
  updatedAt: string;
  planDateTime: string;
  planName: string;
  planType: PlanType;
  workouts: Workout[];
  progress: number;
  note: string;
  mainWorkoutStep: PullUpSteps;
};

export type NewPlan = Pick<Plan, 'planDateTime' | 'planName' | 'planType' | 'workouts'>;

export type CheckedPlan = Pick<Plan, 'workouts' | 'note'>;

export type Plans = {
  [date: string]: Plan[];
};

export type PlanData = {
  data: { [date: string]: Plan[] };
};
