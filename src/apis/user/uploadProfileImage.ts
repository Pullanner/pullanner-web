import { API_PATH } from '@/constants';
import { handleAuthRequest } from '@/lib/axios/handleAuthRequest';
import { patchAuthRequest } from '@/lib/axios/useAuthApi';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

import type { Dispatch, SetStateAction } from 'react';

export const uploadProfileImage = async (
  formData: FormData,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  const data = await handleAuthRequest({
    authRequest: (token) => {
      return patchAuthRequest(API_PATH.users, formData, token, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    accessToken,
    setAccessToken,
    setModalType,
  });

  return data;
};
