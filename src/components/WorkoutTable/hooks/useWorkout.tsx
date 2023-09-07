import { useAtom } from 'jotai';
import { useState } from 'react';

import { workoutPlanAtom } from '@/stores/atoms/workoutPlanAtom';
import { PullUpSteps } from '@/types/plan';

import { usePlanComplete } from './usePlanComplete';

export const useWorkout = (step: PullUpSteps) => {
  const [workoutCountSet, setWorkoutCountSet] = useState({ step, count: 0, set: 0, done: false });
  const [workoutPlan, setWorkoutPlan] = useAtom(workoutPlanAtom);
  const { checkPlanComplete } = usePlanComplete();

  const updateWorkoutPlan = () => {
    const updatedWorkoutPlan = [...workoutPlan];
    const workoutIndex = updatedWorkoutPlan.findIndex((workout) => {
      return workout.step === step;
    });
    updatedWorkoutPlan[workoutIndex] = workoutCountSet;

    setWorkoutPlan(updatedWorkoutPlan);
    checkPlanComplete(updatedWorkoutPlan);
  };

  const handleWorkoutCountChange = (value: string) => {
    const count = Number(value);
    setWorkoutCountSet((prev) => {
      return { ...prev, count };
    });
    updateWorkoutPlan();
  };

  const handleWorkoutSetChange = (value: string) => {
    const set = Number(value);
    setWorkoutCountSet((prev) => {
      return { ...prev, set };
    });
    updateWorkoutPlan();
  };

  return {
    count: workoutCountSet.count,
    set: workoutCountSet.set,
    handleWorkoutCountChange,
    handleWorkoutSetChange,
  };
};
