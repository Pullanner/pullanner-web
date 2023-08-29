import { useState } from 'react';

import { NumericInput } from '@/components/NumericInput';
import { Workout } from '@/types/plan';

type WorkoutRowProps = Pick<Workout, 'id' | 'name' | 'color'>;

export const WorkoutRow = ({ id, color, name }: WorkoutRowProps) => {
  const [total, setTotal] = useState(0);
  const [workoutCount, setWorkoutCount] = useState('');
  const [workoutSet, setWorkoutSet] = useState('');

  const handleWorkoutCountChange = (value: string) => {
    setWorkoutCount(value);
    setTotal(Number(value) * Number(workoutSet));
  };

  const handleWorkoutSetChange = (value: string) => {
    setWorkoutSet(value);
    setTotal(Number(workoutCount) * Number(value));
  };

  return (
    <tr key={id}>
      <td style={{ color }}>{name}</td>
      <td>
        <NumericInput
          inputName="workoutCount"
          onChange={handleWorkoutCountChange}
          value={workoutCount}
          maxLength={3}
        />
      </td>
      <td>
        <NumericInput
          inputName="workoutSet"
          onChange={handleWorkoutSetChange}
          value={workoutSet}
          maxLength={3}
        />
      </td>
      <td>{total}</td>
    </tr>
  );
};
