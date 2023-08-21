import { API_PATH } from '@/constants';
import { postAuthRequest } from '@/lib/axios/useAuthApi';

import type { Dispatch, SetStateAction } from 'react';

const SUCCESS_RESPONSE_CODE = 'U06';

export const sendAuthenticationCode = async (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  try {
    const data = await postAuthRequest(API_PATH.userEmail, {}, accessToken, setAccessToken);

    return data.code === SUCCESS_RESPONSE_CODE;
  } catch (error) {
    console.log(error);

    return false;
  }
};
