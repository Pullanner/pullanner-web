export const API_PATH = {
  user: '/api/users',
  nicknameValidation: '/api/users/duplicate',
  token: '/api/tokens',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH];
