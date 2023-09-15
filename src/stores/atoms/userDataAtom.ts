import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => {
  return sessionStorage;
});

export type UserData = {
  userId: number;
  name: string;
  nickname: string;
  email: string;
  profileImage: string;
  oauthProvider: string;
  level: 1 | 2 | 3 | 4 | 5;
  planCount: number;
};

export const userDataAtom = atomWithStorage('userData', null, storage);
