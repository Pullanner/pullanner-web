import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { getUserDataTest } from '@/apis/user/getUserData';
import { API_PATH } from '@/constants/apiPath';

import { queryKeys } from './queryKeys';

const postUserDataTest = async (nickname: string) => {
  try {
    const { data } = await axios.post(API_PATH.user, { nickname });
    return data;
  } catch (error) {
    console.log(error);
  }
};

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
