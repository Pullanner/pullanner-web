import { useAtomValue } from 'jotai';

import { SelectableWorkoutCard } from '@/components/cards/SelectableWorkoutCard';
import { ROADMAP_DATA } from '@/constants';
import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';

export const SelectableWorkoutDashboard = () => {
  const workoutData = useAtomValue(workoutDataAtom);

  if (!workoutData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#1E1E1E] px-5 py-4">
      <div className="flex w-full justify-center">
        <p className="pb-5 font-bold text-primary">{`현재 가능한 풀업 동작 수 : ${workoutData.size}`}</p>
      </div>
      <div className="grid grid-cols-4 gap-x-3.5 gap-y-6">
        {ROADMAP_DATA.map(({ id, name, imageSrc, color }) => {
          const isCardSelected = workoutData.has(id);

          return (
            <SelectableWorkoutCard
              key={id}
              id={id}
              name={name}
              imageSrc={imageSrc}
              color={color}
              width="4.75rem"
              height="6.375rem"
              isActive={isCardSelected}
            />
          );
        })}
      </div>
    </section>
  );
};
