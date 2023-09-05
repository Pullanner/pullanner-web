import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { API_PATH } from '@/constants';
import { handleAuthRequest } from '@/lib/axios/executeAuthRequestWithErrorHandling';
import { getAuthRequest, postAuthRequest } from '@/lib/axios/useAuthApi';
import { Workouts } from '@/mocks/users/workouts/data';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useGetWorkoutData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  return useQuery({
    queryKey: [queryKeys.workouts, accessToken, setAccessToken],
    queryFn: () => {
      return handleAuthRequest({
        authRequest: (token) => {
          return getAuthRequest(API_PATH.userWorkouts, token);
        },
        accessToken,
        setAccessToken,
        setModalType,
      });
    },
    enabled: !!accessToken.length,
  });
};

export const usePostWorkoutData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (workouts: Workouts) => {
      return handleAuthRequest({
        authRequest: (token) => {
          return postAuthRequest(API_PATH.userWorkouts, { workouts }, token);
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
