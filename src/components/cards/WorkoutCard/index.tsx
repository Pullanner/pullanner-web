import { PullUpSteps } from '@/types/plan';

import type { ReactNode } from 'react';

export type WorkoutCardProps = {
  id: PullUpSteps;
  name: string;
  imageSrc: string;
  color: string;
  width: string;
  height: string;
  additionalStyle?: { [key: string]: string };
  children?: ReactNode;
};

export const WorkoutCard = ({
  id,
  name,
  imageSrc,
  color,
  width,
  height,
  additionalStyle,
  children,
}: WorkoutCardProps) => {
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
          ...additionalStyle,
        }}
      >
        <img src={imageSrc} alt={name} />
        {children}
      </button>
      <p className="inline-block break-words pt-1 text-center text-xs tracking-tight">{name}</p>
    </div>
  );
};
