import { atom } from 'jotai';

const initialTimerState = {
  isVisible: false,
  reset: false,
};

export const timerStateAtom = atom(initialTimerState);

export const readWriteAtom = atom(
  (get) => {
    return get(timerStateAtom);
  },
  (get, set, newTimerStateAtom: typeof initialTimerState) => {
    set(timerStateAtom, newTimerStateAtom);
  },
);
