export const API_PATH = {
  user: '/api/users',
  userNicknameValidation: '/api/users/duplicate',
  userEmail: '/api/users/mail',
  token: '/api/tokens',
  plans: '/api/plans',
  userWorkouts: '/api/users/workouts',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH];
