import { SelectedWorkoutType } from '@/types/plan';

import { WorkoutRow } from './WorkoutRow';

export const WorkoutTable = ({ workouts }: { workouts: SelectedWorkoutType[] }) => {
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
        {workouts.map(({ id, name, color }) => {
          return <WorkoutRow id={id} key={id} name={name} color={color} />;
        })}
      </tbody>
    </table>
  );
};
