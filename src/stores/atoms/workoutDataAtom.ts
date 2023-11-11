import { atom } from 'jotai';

import { StepIdForWorkout } from '@/types/workout';
import { getImpossiblePullUps } from '@/utils/getImpossiblePullUps';

const initialWorkoutData = new Set<StepIdForWorkout>([1]);

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
