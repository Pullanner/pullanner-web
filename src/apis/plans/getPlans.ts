import axios from 'axios';

import { API_PATH } from '@/constants';
import type { PlanData } from '@/types/plan';

export const getPlans = async (planId = ''): Promise<PlanData | undefined> => {
  try {
    const response = await axios.get(`${API_PATH.plans}/${planId}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
