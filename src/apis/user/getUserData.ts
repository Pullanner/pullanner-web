import axios from 'axios';

import { API_PATH } from '@/constants';

export const getUserDataTest = async () => {
  try {
    const response = await axios.get(API_PATH.user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
