import {
  DefaultBodyType,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
  PathParams,
} from 'msw';

import { API_PATH } from '@/constants/apiPath';

import { USER_DATA, USER_NICKNAMES } from './data';

const getUserData = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(USER_DATA));
};

type NicknameValidationReqBody = {
  params: {
    nickname: string;
  };
};

const getNicknameValidation = async (
  req: RestRequest<NicknameValidationReqBody, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const params = req.url.searchParams;
  const nickname = params.get('nickname');
  const isNicknameDuplicated = nickname ? USER_NICKNAMES.includes(nickname) : false;
  if (isNicknameDuplicated) {
    return res(ctx.status(200), ctx.json({ code: 'U03', message: '이미 존재하는 닉네임입니다' }));
  }
  return res(ctx.status(200), ctx.json({ code: 'U04', message: '사용 가능한 닉네임입니다.' }));
};

const userHandler = [
  rest.get(API_PATH.user, getUserData),
  rest.get<NicknameValidationReqBody>(API_PATH.nicknameValidation, getNicknameValidation),
];
export default userHandler;
