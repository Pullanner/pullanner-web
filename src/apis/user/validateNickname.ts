import { API_PATH } from '@/constants';
import { excuteAuthRequestWithErrorHandling } from '@/lib/axios/executeAuthRequestWithErrorHandling';
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
    const data = await excuteAuthRequestWithErrorHandling({
      authRequest: (token) => {
        return getAuthRequest(API_PATH.userNicknameValidation, token, {
          params,
        });
      },
      accessToken,
      setAccessToken,
    });

    return data.code === SUCCESS_RESPONSE_CODE;
  } catch (error) {
    console.log(error);

    return false;
  }
};
