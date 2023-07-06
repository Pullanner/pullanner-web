import dayjs from 'dayjs';
import { atom } from 'jotai';

export const selectedDateAtom = atom(dayjs().format('YYYY-MM-DD'));

export const readWriteAtom = atom(
  (get) => {
    return get(selectedDateAtom);
  },
  (get, set, newSelectedDate: string) => {
    set(selectedDateAtom, newSelectedDate);
  },
);
