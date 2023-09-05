import { API_PATH } from '@/constants';
import {
  getAuthRequest,
  postAuthRequest,
  deleteAuthRequest,
  patchAuthRequest,
} from '@/lib/axios/useAuthApi';
import type { Plans, Plan, NewPlan, CheckedPlan } from '@/types/plan';

import type { Dispatch, SetStateAction } from 'react';

type ServerResponse = {
  code: string;
  message: string;
};

export const getAllPlans = async (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
): Promise<Plans | undefined> => {
  try {
    const response = await getAuthRequest(API_PATH.plans, accessToken, setAccessToken);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPlanById = async (
  planId: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
): Promise<Plan | undefined> => {
  try {
    const response = await getAuthRequest(
      `${API_PATH.plans}/${planId}`,
      accessToken,
      setAccessToken,
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postPlan = async (
  newPlan: NewPlan,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await postAuthRequest(API_PATH.plans, newPlan, accessToken, setAccessToken);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePlan = async (
  planId: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await deleteAuthRequest(
      `${API_PATH.plans}/${planId}`,
      accessToken,
      setAccessToken,
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchPlan = async (
  planId: string,
  updatedPlan: NewPlan,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await patchAuthRequest(
      `${API_PATH.plans}/${planId}`,
      updatedPlan,
      accessToken,
      setAccessToken,
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const checkPlan = async (
  planId: string,
  checkedPlan: CheckedPlan,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await patchAuthRequest(
      `${API_PATH.plans}/${planId}`,
      checkedPlan,
      accessToken,
      setAccessToken,
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
