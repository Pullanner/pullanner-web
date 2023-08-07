import planHandler from '@/mocks/plans/handler';
import userHandler from '@/mocks/user/handler';
import workoutHandler from '@/mocks/workouts/handler';

const handlers = [...userHandler, ...planHandler, ...workoutHandler];

export default handlers;
