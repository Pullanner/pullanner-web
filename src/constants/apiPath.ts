export const API_PATH = {
  users: '/api/users',
  userNicknameValidation: '/api/users/duplicate',
  userEmail: '/api/users/mail',
  userWorkouts: '/api/users/workouts',
  tokens: '/api/tokens',
  plans: '/api/plans',
  summaryTotalWorkoutCount: '/api/summary/total-workout-count',
  summaryMonthWorkoutCount: '/api/summary/month-workout-count',
  summaryCompletedPlanCount: '/api/summary/completed-plan-count',
  articles: '/api/articles',
} as const;

export type ApiPathType = (typeof API_PATH)[keyof typeof API_PATH] | `/api/plans/${string}`;
