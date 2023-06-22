import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { API_PATH } from '@/constants/apiPath';
// import { useAuthGetApi } from '@/lib/axios/useAuthApi';

import { queryKeys } from './queryKeys';

// const useGetUserData = () => {
//   return useAuthGetApi(API_PATH.user);
// };

const getUserDataTest = async () => {
  try {
    const response = await axios.get(API_PATH.user);
    return response.data;
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
