import { Workout } from '@/types/plan';

import { WorkoutRow } from './WorkoutRow';

export const WorkoutTable = ({ workouts }: { workouts: Workout[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Workout</th>
          <th>Count</th>
          <th>Set</th>
          <th>Total</th>
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
