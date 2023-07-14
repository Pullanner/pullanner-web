import axios from 'axios';

import { API_PATH } from '@/constants';
// import { getAuthRequest } from '@/lib/axios/useAuthApi';

// import type { Dispatch, SetStateAction } from 'react';

const SUCCESS_RESPONSE_CODE = 'U04';

export const validateNickname = async (nickname: string) => {
  try {
    const params = new URLSearchParams();
    params.append('nickname', nickname);
    const { data } = await axios.get(API_PATH.nicknameValidation, { params });
    return data.code === SUCCESS_RESPONSE_CODE;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// 실제 API 요청 (with Access Token)
// export const validateNickname = async (
//   nickname: string,
//   accessToken: string,
//   setAccessToken: Dispatch<SetStateAction<string>>,
// ) => {
//   try {
//     const params = new URLSearchParams();
//     params.append('nickname', nickname);
//     const data = await getAuthRequest(API_PATH.nicknameValidation, accessToken, setAccessToken, {
//       params,
//     });
//     console.log(data);
//     return data.code === SUCCESS_RESPONSE_CODE;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };
