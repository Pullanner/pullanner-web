import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';

import { WorkoutCard, WorkoutCardProps } from './WorkoutCard';

import type { MouseEvent } from 'react';

type SelectableWorkoutCardProps = Omit<WorkoutCardProps, 'additionalStyle' | 'children'> & {
  isActive?: boolean;
};

export const SelecteableWorkoutCard = ({
  id,
  title,
  imageSrc,
  color,
  width,
  height,
  isActive,
}: SelectableWorkoutCardProps) => {
  const [isCardSelected, setCardSelected] = useState(false);
  const setWorkoutData = useSetAtom(workoutDataAtom);

  const handleCardClick = ({ target }: MouseEvent<HTMLElement>) => {
    const cardName = (target as HTMLElement).closest('button')?.name;
    setWorkoutData((prevWorkoutList) => {
      const newWorkout = prevWorkoutList.map((workout) => {
        const { name: workoutName, selected: workoutStatus } = workout;
        if (workoutName === cardName) {
          return { name: workoutName, selected: !workoutStatus };
        }

        return workout;
      });

      return newWorkout;
    });
    setCardSelected(!isCardSelected);
  };

  if (isActive) {
    return (
      <WorkoutCard
        id={id}
        title={title}
        imageSrc={imageSrc}
        color={color}
        width={width}
        height={height}
        additionalStyle={{
          borderWidth: '3px',
          borderColor: 'white',
        }}
      >
        <img
          className="absolute left-2 top-2"
          src="/assets/images/check-icon.png"
          alt="check-icon"
        />
      </WorkoutCard>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <button
        id={`${id}`}
        name={title}
        type="button"
        className="relative cursor-default rounded-md"
        style={{
          backgroundColor: color,
          width,
          height,
          opacity: isCardSelected ? '1' : '0.5',
          borderWidth: isCardSelected ? '3px' : '',
          borderColor: isCardSelected ? 'white' : '',
        }}
        onClick={handleCardClick}
      >
        <img src={imageSrc} alt={title} />
        {isCardSelected && (
          <img
            className="absolute left-2 top-2"
            src="/assets/images/check-icon.png"
            alt="check-icon"
          />
        )}
      </button>
      <p className="inline-block break-words pt-1 text-center text-xs tracking-tight">{title}</p>
    </div>
  );
};
