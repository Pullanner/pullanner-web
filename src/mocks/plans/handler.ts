import { rest } from 'msw';

import { API_PATH } from '@/constants';

import { SAMPLE_PLAN_DATA } from './data';

import type { DefaultBodyType, ResponseComposition, RestContext, RestRequest } from 'msw';

const getPlans = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(SAMPLE_PLAN_DATA));
};

const planHandler = [rest.get(API_PATH.plans, getPlans)];

export default planHandler;
