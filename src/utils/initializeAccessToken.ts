import { reissueAccessToken } from './reissueAccessToken';

import type { Dispatch, SetStateAction } from 'react';

export const initializeAccessToken = async (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  if (!accessToken.length) {
    const newAccessToken = await reissueAccessToken();
    setAccessToken(newAccessToken);
  }
};
