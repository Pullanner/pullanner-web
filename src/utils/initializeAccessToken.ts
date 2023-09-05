import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

import { reissueAccessToken } from './reissueAccessToken';

import type { Dispatch, SetStateAction } from 'react';

export const initializeAccessToken = async (
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  const newAccessToken = await reissueAccessToken(setModalType);
  setAccessToken(newAccessToken);

  return newAccessToken;
};
