import axios from 'axios';

import { API_PATH } from '@/constants';

export const postUserDataTest = async (nickname: string) => {
  try {
    const { data } = await axios.post(API_PATH.user, { nickname });

    return data;
  } catch (error) {
    console.log(error);
  }
};
