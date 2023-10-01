import { atom } from 'jotai';

const initialProfileImageData = new FormData();

export const profileImageDataAtom = atom<FormData>(initialProfileImageData);

export const readWriteAtom = atom(
  (get) => {
    return get(profileImageDataAtom);
  },
  (get, set, uploadedProfileImageData: typeof initialProfileImageData) => {
    set(profileImageDataAtom, uploadedProfileImageData);
  },
);
