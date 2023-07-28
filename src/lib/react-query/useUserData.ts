import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { postUserDataTest } from '@/apis/user';
import { API_PATH } from '@/constants';
import { getAuthRequest } from '@/lib/axios/useAuthApi';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useMutateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postUserDataTest,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.userData] });
    },
  });
};

export const useUserData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  return useQuery({
    queryKey: [queryKeys.userData, accessToken, setAccessToken],
    queryFn: () => {
      return getAuthRequest(API_PATH.user, accessToken, setAccessToken);
    },
    enabled: !!accessToken.length,
  });
};

// 실제 API 요청에 대한 useMutateNickname
// export const useMutateNickname = (
//   accessToken: string,
//   setAccessToken: Dispatch<SetStateAction<string>>,
// ) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (nickname: string) => {
//       return postAuthRequest(API_PATH.user, { nickname }, accessToken, setAccessToken);
//     },
//     onSuccess: () => {
//       return queryClient.invalidateQueries({ queryKey: [queryKeys.userData] });
//     },
//   });
// };
