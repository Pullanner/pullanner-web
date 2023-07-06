import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getUserDataTest } from '@/apis/user/getUserData';
import { postUserDataTest } from '@/apis/user/postUserData';

import { queryKeys } from './queryKeys';

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
