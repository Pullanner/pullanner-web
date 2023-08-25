import { atom } from 'jotai';

export type WorkoutId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const initialWorkoutData = new Set<WorkoutId>([1]);

export type WorkoutData = typeof initialWorkoutData;

export const workoutDataAtom = atom(initialWorkoutData);

export const readWriteAtom = atom(
  (get) => {
    return get(workoutDataAtom);
  },
  (get, set, newWorkoutDataAtom: WorkoutData) => {
    set(workoutDataAtom, newWorkoutDataAtom);
  },
);
