export const API_PATH = {
  user: '/api/users',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH];
