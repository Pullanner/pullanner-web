import { atom } from 'jotai';

import { Workout } from '@/types/plan';

type WorkoutPlanType = Omit<Workout, 'done'>;

export const workoutPlanAtom = atom<WorkoutPlanType[]>([]);

export const readWriteAtom = atom(
  (get) => {
    return get(workoutPlanAtom);
  },
  (get, set, newWorkoutPlan: WorkoutPlanType[]) => {
    set(workoutPlanAtom, newWorkoutPlan);
  },
);
