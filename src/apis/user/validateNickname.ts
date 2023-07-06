import axios from 'axios';

import { API_PATH } from '@/constants';

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
