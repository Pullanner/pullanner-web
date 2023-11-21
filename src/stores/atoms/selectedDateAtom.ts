import dayjs from 'dayjs';
import { atom } from 'jotai';

import { DATE_FORMAT_YYYY_MM_DD } from '@/constants';

export const selectedDateAtom = atom(dayjs().format(DATE_FORMAT_YYYY_MM_DD));

export const readWriteAtom = atom(
  (get) => {
    return get(selectedDateAtom);
  },
  (get, set, newSelectedDate: string) => {
    set(selectedDateAtom, newSelectedDate);
  },
);
