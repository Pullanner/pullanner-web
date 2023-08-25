import planHandler from '@/mocks/plans/handler';
import userHandler from '@/mocks/users/handler';
import workoutHandler from '@/mocks/users/workouts/handler';

const handlers = [...userHandler, ...planHandler, ...workoutHandler];

export default handlers;
