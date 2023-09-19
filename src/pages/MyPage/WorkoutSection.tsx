import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { WorkoutCard } from '@/components/cards/WorkoutCard';
import { ROADMAP_DATA, ROUTE_PATH } from '@/constants';
import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';

const TEXT_CONTENTS = '나의 풀업 현황';

export const WorkoutSection = () => {
  const workoutData = useAtomValue(workoutDataAtom);

  if (!workoutData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full bg-gray-6 p-5 text-center">
      <div className="flex justify-between pb-2">
        <span className="font-extrabold">{TEXT_CONTENTS}</span>
        <Link to={ROUTE_PATH.editWorkout}>
          <img src="/assets/images/edit-icon.svg" alt="editIcon" />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-x-3.5 gap-y-5">
        {ROADMAP_DATA.map(({ id, name, imageSrc, color }) => {
          const isCardSelected = workoutData.has(id);

          return (
            <WorkoutCard
              key={id}
              id={id}
              name={name}
              imageSrc={imageSrc}
              color={color}
              additionalStyle={{ opacity: isCardSelected ? '1' : '0.5' }}
              width="4.75rem"
              height="6.375rem"
            />
          );
        })}
      </div>
    </section>
  );
};
