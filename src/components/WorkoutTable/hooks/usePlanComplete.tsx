import { useSetAtom } from 'jotai';

import { planCompleteAtom } from '@/stores/atoms/workoutPlanAtom';
import { Workout } from '@/types/plan';

export const usePlanComplete = () => {
  const setPlanComplete = useSetAtom(planCompleteAtom);

  const checkPlanComplete = (updatedWorkoutPlan: Workout[]) => {
    if (!updatedWorkoutPlan.length) {
      setPlanComplete(false);

      return;
    }

    const isFilled = updatedWorkoutPlan.every((workout) => {
      return workout.count * workout.set !== 0;
    });

    setPlanComplete(isFilled);
  };

  return { checkPlanComplete };
};
