import { reissueAccessToken } from './reissueAccessToken';

import type { Dispatch, SetStateAction } from 'react';

export const initializeAccessToken = async (setAccessToken: Dispatch<SetStateAction<string>>) => {
  const newAccessToken = await reissueAccessToken();
  setAccessToken(newAccessToken);

  return newAccessToken;
};
