import { API_PATH } from '@/constants';
import { handleAuthRequest } from '@/lib/axios/handleAuthRequest';
import {
  getAuthRequest,
  postAuthRequest,
  deleteAuthRequest,
  patchAuthRequest,
} from '@/lib/axios/useAuthApi';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';
import type { Plans, Plan, NewPlan, CheckedPlan } from '@/types/plan';

import type { Dispatch, SetStateAction } from 'react';

type ServerResponse = {
  code: string;
  message: string;
};

export const getAllPlans = async (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
): Promise<Plans | undefined> => {
  try {
    const response = await handleAuthRequest({
      authRequest: (token) => {
        return getAuthRequest(API_PATH.plans, token);
      },
      accessToken,
      setAccessToken,
      setModalType,
    });

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
  setModalType: SetModalType,
): Promise<Plan | undefined> => {
  try {
    const response = await handleAuthRequest({
      authRequest: (token) => {
        return getAuthRequest(`${API_PATH.plans}/${planId}`, token);
      },
      accessToken,
      setAccessToken,
      setModalType,
    });

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
  setModalType: SetModalType,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await handleAuthRequest({
      authRequest: (token) => {
        return postAuthRequest(API_PATH.plans, newPlan, token);
      },
      accessToken,
      setAccessToken,
      setModalType,
    });

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
  setModalType: SetModalType,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await handleAuthRequest({
      authRequest: (token) => {
        return deleteAuthRequest(`${API_PATH.plans}/${planId}`, token);
      },
      accessToken,
      setAccessToken,
      setModalType,
    });

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
  setModalType: SetModalType,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await handleAuthRequest({
      authRequest: (token) => {
        return patchAuthRequest(`${API_PATH.plans}/${planId}`, updatedPlan, token);
      },
      accessToken,
      setAccessToken,
      setModalType,
    });

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
  setModalType: SetModalType,
): Promise<ServerResponse | undefined> => {
  try {
    const response = await handleAuthRequest({
      authRequest: (token) => {
        return patchAuthRequest(`${API_PATH.plans}/${planId}`, checkedPlan, token);
      },
      accessToken,
      setAccessToken,
      setModalType,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
