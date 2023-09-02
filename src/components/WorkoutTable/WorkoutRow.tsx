import { NumericInput } from '@/components/inputs/NumericInput';
import { Workout } from '@/types/plan';

import { useWorkout } from './useWorkout';

type WorkoutRowProps = Pick<Workout, 'id' | 'name' | 'color'>;

export const WorkoutRow = ({ id, color, name }: WorkoutRowProps) => {
  const { count, set, total, handleWorkoutCountChange, handleWorkoutSetChange } = useWorkout(id);

  return (
    <tr key={id}>
      <td style={{ color }}>{name}</td>
      <td>
        <NumericInput
          inputName="workoutCount"
          onChange={handleWorkoutCountChange}
          value={count}
          maxLength={3}
        />
      </td>
      <td>
        <NumericInput
          inputName="workoutSet"
          onChange={handleWorkoutSetChange}
          value={set}
          maxLength={3}
        />
      </td>
      <td>{total}</td>
    </tr>
  );
};
