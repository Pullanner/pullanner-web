import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { API_PATH } from '@/constants';
import { excuteAuthRequestWithErrorHandling } from '@/lib/axios/executeAuthRequestWithErrorHandling';
import { getAuthRequest, postAuthRequest } from '@/lib/axios/useAuthApi';
import { Workouts } from '@/mocks/users/workouts/data';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useGetWorkoutData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  return useQuery({
    queryKey: [queryKeys.workouts, accessToken, setAccessToken],
    queryFn: () => {
      return excuteAuthRequestWithErrorHandling({
        authRequest: (token) => {
          return getAuthRequest(API_PATH.userWorkouts, token);
        },
        accessToken,
        setAccessToken,
      });
    },
    enabled: !!accessToken.length,
  });
};

export const usePostWorkoutData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (workouts: Workouts) => {
      return postAuthRequest(API_PATH.userWorkouts, { workouts }, accessToken, setAccessToken);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.userData] });
    },
  });
};
