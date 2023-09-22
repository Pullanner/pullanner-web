import { rest } from 'msw';

import { API_PATH } from '@/constants';

import { USER_DATA, USER_NICKNAMES } from './data';

import type {
  DefaultBodyType,
  ResponseComposition,
  RestContext,
  RestRequest,
  PathParams,
} from 'msw';

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

const postUserData = async (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { nickname } = await req.json();
  USER_DATA.nickname = nickname;

  return res(ctx.status(200), ctx.json(USER_DATA));
};

const postAuthenticationCode = async (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(
    ctx.status(200),
    ctx.json({ code: 'U06', message: '사용자의 이메일로 인증 코드가 발송되었습니다.' }),
  );
};

type DeleteAccountReqBody = {
  params: {
    code: string;
  };
};

const VALID_AUTHENTICATION_CODE = '123456';

const deleteAccountWithAuthenticationCode = async (
  req: RestRequest<DeleteAccountReqBody, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const params = req.url.searchParams;
  const authenticationCode = params.get('code');
  const isAuthenticationCodeValid = authenticationCode === VALID_AUTHENTICATION_CODE;
  if (isAuthenticationCodeValid) {
    return res(
      ctx.status(200),
      ctx.json({ code: 'U08', message: '사용자의 회원 정보가 삭제되었습니다.' }),
    );
  }

  return res(ctx.status(401), ctx.json({ code: 'U07', message: '유효하지 않은 인증 코드입니다.' }));
};

type BodyType = {
  profileImage: Blob;
};

const uploadProfileImage = async (
  req: RestRequest<BodyType>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { profileImage } = req.body;
  const imageUrl = URL.createObjectURL(profileImage);
  USER_DATA.profileImage = imageUrl;

  return res(ctx.status(200), ctx.json(USER_DATA));
};

const userHandler = [
  rest.get(API_PATH.users, getUserData),
  rest.get<NicknameValidationReqBody>(API_PATH.userNicknameValidation, getNicknameValidation),
  rest.post(API_PATH.users, postUserData),
  rest.post(API_PATH.userEmail, postAuthenticationCode),
  rest.delete(API_PATH.users, deleteAccountWithAuthenticationCode),
  rest.patch(API_PATH.users, uploadProfileImage),
];

export default userHandler;
