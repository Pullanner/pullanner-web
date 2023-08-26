import { rest } from 'msw';

import { API_PATH } from '@/constants';

import { WORKOUT_DATA } from './data';

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
  return res(ctx.status(200), ctx.json(WORKOUT_DATA));
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
  rest.get(API_PATH.userWorkouts, getWorkoutData),
  rest.post(API_PATH.userWorkouts, postWorkoutData),
];

export default workoutHandler;
