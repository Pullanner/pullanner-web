import { atom } from 'jotai';

import { ROADMAP_DATA } from '@/constants';

const HANGING = 'Hanging';

const initialWorkoutData = ROADMAP_DATA.map(({ title }) => {
  return { name: title, selected: title === HANGING };
});

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
