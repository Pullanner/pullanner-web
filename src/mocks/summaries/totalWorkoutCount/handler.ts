import { rest } from 'msw';

import { API_PATH } from '@/constants';

import { TOTAL_WORKOUT_COUNT_DATA } from './data';

import type { DefaultBodyType, ResponseComposition, RestContext, RestRequest } from 'msw';

const getTotalWorkoutCount = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(TOTAL_WORKOUT_COUNT_DATA));
};

const totalWorkoutCountHandler = [
  rest.get(API_PATH.summaryTotalWorkoutCount, getTotalWorkoutCount),
];

export default totalWorkoutCountHandler;
