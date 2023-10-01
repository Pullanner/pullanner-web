import { useAtomValue } from 'jotai';

import { workoutPlanAtom } from '@/stores/atoms/workoutPlanAtom';

import { WorkoutRow } from './WorkoutRow';

export const WorkoutTable = () => {
  const workouts = useAtomValue(workoutPlanAtom);

  return (
    <table className="w-full">
      <thead className="bg-gray-4">
        <tr>
          <th>Workout</th>
          <th>Count</th>
          <th>Set</th>
          <th className="p-2">Total</th>
        </tr>
      </thead>
      <tbody className="before:block before:leading-[4px] before:text-transparent before:content-['-']">
        {workouts.map(({ step }) => {
          return <WorkoutRow key={step} step={step} />;
        })}
      </tbody>
    </table>
  );
};
