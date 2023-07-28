export type Workout = {
  id: number;
  name: string;
  count: number;
  set: number;
  total: number;
  done: boolean;
  color: string;
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
