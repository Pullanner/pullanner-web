import { StepIdForWorkout } from '@/types/workout';

export const getImpossiblePullUps = (possiblePullUps: StepIdForWorkout[]) => {
  const allPullUps: StepIdForWorkout[] = [1, 2, 3, 4, 5, 6, 7, 8];

  return allPullUps.filter((pullUp) => {
    return !possiblePullUps.includes(pullUp);
  });
};
