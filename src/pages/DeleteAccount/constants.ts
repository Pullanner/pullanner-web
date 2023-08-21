export const MAX_INPUT_LENGTH = 6;

export const TEXT_CONTENTS = {
  invalidAuthenticationCodeDescription: '유효하지 않은 인증번호입니다.',
  modal: {
    main: '회원 탈퇴',
    sub: [
      'pullanner 회원 탈퇴가 완료되었습니다.',
      '그동안 Pullanner 서비스를 이용해주셔서 감사합니다.',
    ],
  },
} as const;

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
