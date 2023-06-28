import { atom } from 'jotai';

export const accessTokenAtom = atom('');

export const readWriteAtom = atom(
  (get) => {
    return get(accessTokenAtom);
  },
  (get, set, newAccessToken: string) => {
    set(accessTokenAtom, newAccessToken);
  },
);
