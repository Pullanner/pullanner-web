import { atom } from 'jotai';

const initialValue = import.meta.env.DEV ? 'accessToken' : '';

export const accessTokenAtom = atom(initialValue);

export const readWriteAtom = atom(
  (get) => {
    return get(accessTokenAtom);
  },
  (get, set, newAccessToken: string) => {
    set(accessTokenAtom, newAccessToken);
  },
);
