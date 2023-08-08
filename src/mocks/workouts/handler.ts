import { rest } from 'msw';

import { API_PATH } from '@/constants';

import { WORKOUTS_DATA } from './data';

import type {
  DefaultBodyType,
  ResponseComposition,
  RestContext,
  RestRequest,
  PathParams,
} from 'msw';

const getWorkoutData = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(WORKOUTS_DATA));
};

const postWorkoutData = async (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const data = await req.json();

  return res(ctx.status(200), ctx.json(data));
};

const workoutHandler = [
  rest.get(API_PATH.workouts, getWorkoutData),
  rest.post(API_PATH.workouts, postWorkoutData),
];

export default workoutHandler;
