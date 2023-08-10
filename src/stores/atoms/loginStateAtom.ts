import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => {
  return sessionStorage;
});

export const loginStateAtom = atomWithStorage('loginState', false, storage);
