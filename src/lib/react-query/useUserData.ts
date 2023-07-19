import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getUserDataTest, postUserDataTest } from '@/apis/user';
// import { API_PATH } from '@/constants';
// import { getAuthRequest, postAuthRequest } from '@/lib/axios/useAuthApi';

import { queryKeys } from './queryKeys';

// import type { Dispatch, SetStateAction } from 'react';

export const useUserData = () => {
  return useQuery({
    queryKey: [queryKeys.userData],
    queryFn: getUserDataTest,
  });
};

export const useMutateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postUserDataTest,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.userData] });
    },
  });
};

// 실제 API 요청에 대한 useQuery
// export const useUserData = (
//   accessToken: string,
//   setAccessToken: Dispatch<SetStateAction<string>>,
// ) => {
//   return useQuery([queryKeys.userData, accessToken, setAccessToken], () => {
//     return getAuthRequest(API_PATH.user, accessToken, setAccessToken);
//   });
// };

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
