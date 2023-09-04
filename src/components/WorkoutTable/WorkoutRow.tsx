import { NumericInput } from '@/components/inputs/NumericInput';
import { SelectedWorkoutType } from '@/types/plan';

import { useWorkout } from './useWorkout';

type WorkoutRowProps = Pick<SelectedWorkoutType, 'id' | 'name' | 'color'>;

export const WorkoutRow = ({ id, color, name }: WorkoutRowProps) => {
  const { count, set, total, handleWorkoutCountChange, handleWorkoutSetChange } = useWorkout(id);

  return (
    <tr key={id}>
      <td style={{ color }} className="p-2" align="center">
        {name}
      </td>
      <td align="center">
        <NumericInput
          inputName="workoutCount"
          onChange={handleWorkoutCountChange}
          value={count}
          maxLength={3}
        />
      </td>
      <td align="center">
        <NumericInput
          inputName="workoutSet"
          onChange={handleWorkoutSetChange}
          value={set}
          maxLength={3}
        />
      </td>
      <td align="center">{total}</td>
    </tr>
  );
};
