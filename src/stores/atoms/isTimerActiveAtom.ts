import { atom } from 'jotai';

export const isTimerActiveAtom = atom(false);

export const readWriteAtom = atom(
  (get) => {
    return get(isTimerActiveAtom);
  },
  (get, set, newTimerStateAtom: boolean) => {
    set(isTimerActiveAtom, newTimerStateAtom);
  },
);
