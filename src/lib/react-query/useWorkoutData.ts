import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { API_PATH } from '@/constants';
import { getAuthRequest, postAuthRequest } from '@/lib/axios/useAuthApi';
import { WorkoutData } from '@/stores/atoms/workoutDataAtom';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useGetWorkoutData = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  return useQuery({
    queryKey: [queryKeys.workouts, accessToken, setAccessToken],
    queryFn: () => {
      return getAuthRequest(API_PATH.userWorkouts, accessToken, setAccessToken);
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
    mutationFn: (workoutData: WorkoutData) => {
      return postAuthRequest(API_PATH.userWorkouts, { workoutData }, accessToken, setAccessToken);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.userData] });
    },
  });
};
