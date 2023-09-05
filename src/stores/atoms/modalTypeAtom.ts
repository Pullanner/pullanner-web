import { atom } from 'jotai';

import type { SetStateAction } from 'react';

type ModalType = 'deleteAccount' | 'deleteAccountSuccess' | 'logout' | null;

type SetAtom<Args extends any[], Result> = (...args: Args) => Result;

export type SetModalType = SetAtom<[SetStateAction<ModalType>], void>;

export const modalTypeAtom = atom<ModalType>(null);

export const readWriteAtom = atom(
  (get) => {
    return get(modalTypeAtom);
  },
  (get, set, newModalType: ModalType) => {
    set(modalTypeAtom, newModalType);
  },
);
