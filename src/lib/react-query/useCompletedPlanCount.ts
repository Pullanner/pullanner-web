import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { API_PATH } from '@/constants';
import { handleAuthRequest } from '@/lib/axios/handleAuthRequest';
import { getAuthRequest } from '@/lib/axios/useAuthApi';
import type { CompletedPlanCount } from '@/mocks/summaries/completedPlanCount/data';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';

export const useGetCompletedPlanCount = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
): UseQueryResult<CompletedPlanCount> => {
  return useQuery({
    queryKey: [queryKeys.completedPlanCount, accessToken, setAccessToken],
    queryFn: () => {
      return handleAuthRequest({
        authRequest: (token) => {
          return getAuthRequest(API_PATH.summaryCompletedPlanCount, token);
        },
        accessToken,
        setAccessToken,
        setModalType,
      });
    },
    enabled: !!accessToken.length,
  });
};
