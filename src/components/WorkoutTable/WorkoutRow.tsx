import { NumericInput } from '@/components/inputs/NumericInput';
import { WORKOUT_NAME_COLOR } from '@/constants';
import { PullUpSteps } from '@/types/plan';

import { useWorkout } from './hooks/useWorkout';

export const WorkoutRow = ({ step }: { step: PullUpSteps }) => {
  const { count, set, total, handleWorkoutCountChange, handleWorkoutSetChange } = useWorkout(step);

  const { color, name } = WORKOUT_NAME_COLOR[step];

  return (
    <tr>
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
