import { isAxiosError } from 'axios';

import { API_PATH } from '@/constants';
import { deleteAuthRequest } from '@/lib/axios/useAuthApi';

import type { Dispatch, SetStateAction } from 'react';

const VALID_CODE = 'U08';

export const deleteAccountWithAuthenticationCode = async (
  code: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  try {
    const params = new URLSearchParams();
    params.append('code', code);
    const data = await deleteAuthRequest(API_PATH.user, accessToken, setAccessToken, {
      params,
    });

    return data.code === VALID_CODE;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      if (error.status === 401) {
        return false;
      }
    }
  }
};
