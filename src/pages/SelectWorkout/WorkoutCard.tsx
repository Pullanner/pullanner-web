import type { ReactNode } from 'react';

export type WorkoutCardProps = {
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  title: string;
  imageSrc: string;
  color: string;
  width: string;
  height: string;
  additionalStyle?: { [key: string]: string };
  children?: ReactNode;
};

export const WorkoutCard = ({
  id,
  title,
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
        name={title}
        type="button"
        className="relative cursor-default rounded-md"
        style={{
          backgroundColor: color,
          width,
          height,
          ...additionalStyle,
        }}
      >
        <img src={imageSrc} alt={title} />
        {children}
      </button>
      <p className="inline-block break-words pt-1 text-center text-xs tracking-tight">{title}</p>
    </div>
  );
};