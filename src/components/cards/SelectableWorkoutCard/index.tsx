import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';
import { StepIdForWorkout } from '@/types/workout';

import { WorkoutCard, WorkoutCardProps } from '../WorkoutCard';

import type { MouseEvent } from 'react';

type SelectableWorkoutCardProps = Omit<WorkoutCardProps, 'additionalStyle' | 'children'> & {
  isActive?: boolean;
};

const HANGING = 'Hanging';

export const SelectableWorkoutCard = ({
  id,
  name,
  imageSrc,
  color,
  width,
  height,
  isActive,
}: SelectableWorkoutCardProps) => {
  const [isCardSelected, setCardSelected] = useState(isActive);
  const setWorkoutData = useSetAtom(workoutDataAtom);

  const handleCardClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const cardId = Number(currentTarget.id) as StepIdForWorkout;

    setWorkoutData((prevWorkoutData) => {
      const hasCardId = prevWorkoutData.has(cardId);
      const newWorkoutData = new Set<StepIdForWorkout>(prevWorkoutData.values());

      if (hasCardId) {
        newWorkoutData.delete(cardId);
      } else {
        newWorkoutData.add(cardId);
      }

      return newWorkoutData;
    });

    setCardSelected(!isCardSelected);
  };

  if (name === HANGING) {
    return (
      <WorkoutCard
        id={id}
        name={name}
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
          src="/assets/images/check-icon.svg"
          alt="check-icon"
        />
      </WorkoutCard>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <button
        id={`${id}`}
        name={name}
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
        <img src={imageSrc} alt={name} />
        {isCardSelected && (
          <img
            className="absolute left-2 top-2"
            src="/assets/images/check-icon.svg"
            alt="check-icon"
          />
        )}
      </button>
      <p className="inline-block break-words pt-1 text-center text-xs tracking-tight">{name}</p>
    </div>
  );
};
