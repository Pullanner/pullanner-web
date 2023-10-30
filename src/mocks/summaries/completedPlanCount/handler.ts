import { rest } from 'msw';

import { API_PATH } from '@/constants';

import { COMPLETED_PLAN_COUNT_DATA } from './data';

import type { DefaultBodyType, ResponseComposition, RestContext, RestRequest } from 'msw';

const getCompletedPlanCount = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(COMPLETED_PLAN_COUNT_DATA));
};

const completedPlanCountHandler = [
  rest.get(API_PATH.summaryCompletedPlanCount, getCompletedPlanCount),
];

export default completedPlanCountHandler;
