import { WorkoutCard } from '@/components/cards/WorkoutCard';

type WorkoutInfo = {
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  imageSrc: string;
  name: string;
  difficulty: number;
  description: string;
  color: string;
};

type WorkoutResultProps = {
  workoutData: WorkoutInfo[];
  textContents: {
    title: string;
    plan: string;
    description: string;
  };
};

export const WorkoutResult = ({ workoutData, textContents }: WorkoutResultProps) => {
  return (
    <div>
      <p className="pb-2 text-base font-bold text-primary">{textContents.title}</p>
      <p className="pb-5 text-xs">
        <span className="font-extrabold">{textContents.plan}</span>
        {textContents.description}
      </p>

      <div className="flex flex-row flex-wrap justify-center gap-x-3.5 gap-y-5 pb-7">
        {workoutData.map(({ id, name, imageSrc, color }) => {
          return (
            <WorkoutCard
              key={id}
              id={id}
              name={name}
              imageSrc={imageSrc}
              color={color}
              width="4.75rem"
              height="6.375rem"
            />
          );
        })}
      </div>
    </div>
  );
};
