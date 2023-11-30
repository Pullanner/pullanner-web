export const MAX_INPUT_LENGTH = 6;

export const INVALID_AUTHORIZATION_CODE_DESCRIPTION = '유효하지 않은 인증번호입니다.';

export const BUTTON_STATE = {
  active: 'active',
  inactive: 'inactive',
} as const;

export const VALIDATE_CODE_BUTTON_STYLE = {
  active: 'text-primary border border-primary',
  inactive: 'text-gray-500 border border-gray-500',
} as const;

export const LIMIT_TIME = 3 * 60 * 1000;

export const DECADE = 10;

export const AUTHORIZATION_CODE_SENT_SUCCESSFULLY = '이메일로 인증 코드가 발송되었습니다.';
