import { useQuery } from '@tanstack/react-query';

import { getPlans } from '@/apis/plans/getPlans';

import { queryKeys } from './queryKeys';

export const useGetPlans = (planId = '') => {
  return useQuery({
    queryKey: [queryKeys.plans],
    queryFn: () => {
      return getPlans(planId);
    },
  });
};
