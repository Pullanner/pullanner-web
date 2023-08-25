export const API_PATH = {
  users: '/api/users',
  userNicknameValidation: '/api/users/duplicate',
  userEmail: '/api/users/mail',
  userWorkouts: '/api/users/workouts',
  token: '/api/tokens',
  plans: '/api/plans',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH];
