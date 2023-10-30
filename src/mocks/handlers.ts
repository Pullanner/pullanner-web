import planHandler from '@/mocks/plans/handler';
import monthWorkoutCountHandler from '@/mocks/summaries/monthWorkoutCount/handler';
import totalWorkoutCountsHandler from '@/mocks/summaries/totalWorkoutCount/handler';
import userHandler from '@/mocks/users/handler';
import workoutHandler from '@/mocks/users/workouts/handler';

const handlers = [
  ...userHandler,
  ...planHandler,
  ...workoutHandler,
  ...totalWorkoutCountsHandler,
  ...monthWorkoutCountHandler,
];

export default handlers;
