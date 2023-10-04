export const VALID_INPUT = {
  status: 'valid',
  description: { text: '사용 가능한 닉네임입니다.', style: 'text-valid' },
} as const;

export const INVALID_INPUT = {
  status: 'invalid',
  description: { text: '이미 존재하는 닉네임입니다.', style: 'text-invalid' },
} as const;

export const DUPLICATION_CHECK_BUTTON_STYLE = {
  active: 'text-primary border border-primary',
  inactive: 'text-gray-500 border border-gray-500',
} as const;
