import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { workoutPlanAtom } from '@/stores/atoms/workoutPlanAtom';
import { PullUpSteps } from '@/types/plan';

export const useWorkout = (id: PullUpSteps) => {
  const [total, setTotal] = useState(0);
  const [workoutCountSet, setWorkoutCountSet] = useState({ step: id, count: 0, set: 0 });
  const setWorkoutPlan = useSetAtom(workoutPlanAtom);

  const updateWorkoutPlan = () => {
    setWorkoutPlan((prev) => {
      const filtered = prev.filter((workout) => {
        return workout.step !== id;
      });

      return [...filtered, workoutCountSet];
    });
  };

  const handleWorkoutCountChange = (value: string) => {
    const count = Number(value);
    setWorkoutCountSet((prev) => {
      return { ...prev, count };
    });

    setTotal(count * workoutCountSet.set);
    updateWorkoutPlan();
  };

  const handleWorkoutSetChange = (value: string) => {
    const set = Number(value);
    setWorkoutCountSet((prev) => {
      return { ...prev, set };
    });

    setTotal(workoutCountSet.count * set);
    updateWorkoutPlan();
  };

  return {
    count: workoutCountSet.count.toString(),
    set: workoutCountSet.set.toString(),
    total,
    handleWorkoutCountChange,
    handleWorkoutSetChange,
  };
};
