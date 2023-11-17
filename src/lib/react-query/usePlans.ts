import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAllPlans, getPlanById, postPlan } from '@/apis/plans';
import { SetModalType } from '@/stores/atoms/modalTypeAtom';
import { NewPlan } from '@/types/plan';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useGetAllPlans = (
  selectedDate: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  return useQuery({
    queryKey: [queryKeys.plans, accessToken, setAccessToken],
    queryFn: () => {
      return getAllPlans(selectedDate, accessToken, setAccessToken, setModalType);
    },
    enabled: !!accessToken,
  });
};

export const useGetPlanById = (
  planId: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  return useQuery({
    queryKey: [queryKeys.plans, planId],
    queryFn: () => {
      return getPlanById(planId, accessToken, setAccessToken, setModalType);
    },
    enabled: !!accessToken,
  });
};

export const usePostPlan = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newPlan: NewPlan) => {
      return postPlan(newPlan, accessToken, setAccessToken, setModalType);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.plans] });
    },
  });
};
