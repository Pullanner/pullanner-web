import { API_PATH } from '@/constants';
import { getAuthRequest } from '@/lib/axios/useAuthApi';

import type { Dispatch, SetStateAction } from 'react';

const SUCCESS_RESPONSE_CODE = 'U04';

export const validateNickname = async (
  nickname: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  try {
    const params = new URLSearchParams();
    params.append('nickname', nickname);
    const data = await getAuthRequest(API_PATH.nicknameValidation, accessToken, setAccessToken, {
      params,
    });

    return data.code === SUCCESS_RESPONSE_CODE;
  } catch (error) {
    console.log(error);

    return false;
  }
};
