import { atom } from 'jotai';

import { getImpossiblePullUps } from '@/utils/getImpossiblePullUps';

export type WorkoutId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const initialWorkoutData = new Set<WorkoutId>([1]);

export type WorkoutData = typeof initialWorkoutData;

export const workoutDataAtom = atom(initialWorkoutData);

export const possiblePullUpAtom = atom((get) => {
  return [...get(workoutDataAtom)];
});

export const impossiblePullUpAtom = atom((get) => {
  const possiblePullUps = get(workoutDataAtom);

  const impossiblePullUps = getImpossiblePullUps([...possiblePullUps]);

  return impossiblePullUps;
});

export const readWriteAtom = atom(
  (get) => {
    return get(workoutDataAtom);
  },
  (get, set, newWorkoutDataAtom: WorkoutData) => {
    set(workoutDataAtom, newWorkoutDataAtom);
  },
);
