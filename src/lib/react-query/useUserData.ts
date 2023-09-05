import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { API_PATH } from '@/constants';
import { handleAuthRequest } from '@/lib/axios/executeAuthRequestWithErrorHandling';
import { getAuthRequest, postAuthRequest } from '@/lib/axios/useAuthApi';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useGetUserData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  return useQuery({
    queryKey: [queryKeys.userData, accessToken, setAccessToken],
    queryFn: () => {
      return handleAuthRequest({
        authRequest: (token) => {
          return getAuthRequest(API_PATH.users, token);
        },
        accessToken,
        setAccessToken,
        setModalType,
      });
    },
    enabled: !!accessToken.length,
  });
};

export const usePostNickname = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nickname: string) => {
      return handleAuthRequest({
        authRequest: (token) => {
          return postAuthRequest(API_PATH.users, { nickname }, token);
        },
        accessToken,
        setAccessToken,
        setModalType,
      });
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.userData] });
    },
  });
};
