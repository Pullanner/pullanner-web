import axios from 'axios';
// import { Dispatch, SetStateAction } from 'react';

import { API_PATH } from '@/constants';
// import { getAuthRequest } from '@/lib/axios/useAuthApi';

export const getUserDataTest = async () => {
  try {
    const response = await axios.get(API_PATH.user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
