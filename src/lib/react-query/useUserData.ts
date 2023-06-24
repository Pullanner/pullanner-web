import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { Dispatch, SetStateAction } from 'react';

import { API_PATH } from '@/constants/apiPath';
// import { getAuthRequest } from '@/lib/axios/useAuthApi';

import { queryKeys } from './queryKeys';

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

// 실제 API 요청에 대한 useQuery
// export const useUserData = (
//   accessToken: string,
//   setAccessToken: Dispatch<SetStateAction<string>>,
// ) => {
//   return useQuery([queryKeys.userData, accessToken, setAccessToken], () => {
//     return getAuthRequest(API_PATH.user, accessToken, setAccessToken);
//   });
// };
