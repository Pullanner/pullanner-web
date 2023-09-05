import { isAxiosError } from 'axios';

import { API_PATH } from '@/constants';
import { excuteAuthRequestWithErrorHandling } from '@/lib/axios/executeAuthRequestWithErrorHandling';
import { deleteAuthRequest } from '@/lib/axios/useAuthApi';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

import type { Dispatch, SetStateAction } from 'react';

const VALID_CODE = 'U08';

export const deleteAccountWithAuthenticationCode = async (
  code: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  try {
    const params = new URLSearchParams();
    params.append('code', code);
    const data = await excuteAuthRequestWithErrorHandling({
      authRequest: (token) => {
        return deleteAuthRequest(API_PATH.users, token, {
          params,
        });
      },
      accessToken,
      setAccessToken,
      setModalType,
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
