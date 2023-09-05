import { useAtomValue } from 'jotai';

import { workoutPlanAtom } from '@/stores/atoms/workoutPlanAtom';

import { WorkoutRow } from './WorkoutRow';

export const WorkoutTable = () => {
  const workouts = useAtomValue(workoutPlanAtom);

  return (
    <table className="w-full">
      <thead className="bg-[#414141]">
        <tr>
          <th>Workout</th>
          <th>Count</th>
          <th>Set</th>
          <th className="p-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map(({ step }) => {
          return <WorkoutRow key={step} step={step} />;
        })}
      </tbody>
    </table>
  );
};
