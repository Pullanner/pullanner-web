import { atom } from 'jotai';

import { Workout } from '@/types/plan';

export const workoutPlanAtom = atom<Workout[]>([]);

export const readWriteWorkoutPlanAtom = atom(
  (get) => {
    return get(workoutPlanAtom);
  },
  (get, set, newWorkoutPlan: Workout[]) => {
    set(workoutPlanAtom, newWorkoutPlan);
  },
);

export const planCompleteAtom = atom(false);

export const readWritePlanCompleteAtom = atom(
  (get) => {
    return get(planCompleteAtom);
  },
  (get, set, newPlanComplete: boolean) => {
    set(planCompleteAtom, newPlanComplete);
  },
);
