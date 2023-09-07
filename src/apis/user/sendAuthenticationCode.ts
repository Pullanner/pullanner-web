import { API_PATH } from '@/constants';
import { handleAuthRequest } from '@/lib/axios/handleAuthRequest';
import { postAuthRequest } from '@/lib/axios/useAuthApi';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

import type { Dispatch, SetStateAction } from 'react';

const SUCCESS_RESPONSE_CODE = 'U06';

export const sendAuthenticationCode = async (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  try {
    const data = await handleAuthRequest({
      authRequest: (token) => {
        return postAuthRequest(API_PATH.userEmail, {}, token);
      },
      accessToken,
      setAccessToken,
      setModalType,
    });

    return data.code === SUCCESS_RESPONSE_CODE;
  } catch (error) {
    console.log(error);

    return false;
  }
};
