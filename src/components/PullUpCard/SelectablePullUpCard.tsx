import { useState } from 'react';

import { PullUpSteps } from '@/types/plan';

import { WorkoutCardProps } from './index';

type SelectableWorkoutCardProps = Omit<WorkoutCardProps, 'additionalStyle' | 'children'> & {
  isSelected?: boolean;
  onClick: ({
    isCardSelected,
    id,
    name,
    color,
  }: {
    isCardSelected: boolean;
    id: PullUpSteps;
    name: string;
    color: string;
  }) => void;
};

export const SelectablePullUpCard = ({
  id,
  name,
  imageSrc,
  color,
  width = '',
  height = '',
  isSelected = false,
  onClick,
}: SelectableWorkoutCardProps) => {
  const [isCardSelected, setCardSelected] = useState(isSelected);

  const handleCardClick = () => {
    setCardSelected(!isCardSelected);
    onClick({ isCardSelected, id, name, color });
  };

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
