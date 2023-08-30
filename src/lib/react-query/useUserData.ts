import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { API_PATH } from '@/constants';
import { excuteAuthRequestWithErrorHandling } from '@/lib/axios/executeAuthRequestWithErrorHandling';
import { getAuthRequest, postAuthRequest } from '@/lib/axios/useAuthApi';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useUserData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  return useQuery({
    queryKey: [queryKeys.userData, accessToken, setAccessToken],
    queryFn: () => {
      return excuteAuthRequestWithErrorHandling({
        authRequest: (token) => {
          return getAuthRequest(API_PATH.users, token);
        },
        accessToken,
        setAccessToken,
      });
    },
    enabled: !!accessToken.length,
  });
};

export const useMutateNickname = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nickname: string) => {
      return postAuthRequest(API_PATH.users, { nickname }, accessToken, setAccessToken);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.userData] });
    },
  });
};
