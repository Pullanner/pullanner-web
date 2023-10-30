import { rest } from 'msw';

import { API_PATH } from '@/constants';

import { MONTH_WORKOUT_COUNT_DATA } from './data';

import type { DefaultBodyType, ResponseComposition, RestContext, RestRequest } from 'msw';

const getMonthWorkoutCount = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(MONTH_WORKOUT_COUNT_DATA));
};

const monthWorkoutCountHandler = [
  rest.get(API_PATH.summaryMonthWorkoutCount, getMonthWorkoutCount),
];

export default monthWorkoutCountHandler;
