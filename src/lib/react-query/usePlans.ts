import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAllPlans, getPlanById, postPlan } from '@/apis/plans';
import { NewPlan } from '@/types/plan';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useGetAllPlans = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  return useQuery({
    queryKey: [queryKeys.plans, accessToken, setAccessToken],
    queryFn: () => {
      return getAllPlans(accessToken, setAccessToken);
    },
    enabled: !!accessToken,
  });
};

export const useGetPlanById = (
  planId: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  return useQuery({
    queryKey: [queryKeys.plans, planId],
    queryFn: () => {
      return getPlanById(planId, accessToken, setAccessToken);
    },
    enabled: !!accessToken,
  });
};

export const usePostPlan = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newPlan: NewPlan) => {
      return postPlan(newPlan, accessToken, setAccessToken);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.plans] });
    },
  });
};
