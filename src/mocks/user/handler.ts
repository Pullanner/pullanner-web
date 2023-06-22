import { DefaultBodyType, ResponseComposition, rest, RestContext, RestRequest } from 'msw';

import { API_PATH } from '@/constants/apiPath';

import { USER_DATA } from './data';

const getUserData = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(USER_DATA));
};

const userHandler = [rest.get(API_PATH.user, getUserData)];

export default userHandler;
