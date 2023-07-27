import { useAtomValue } from 'jotai';

import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';

import { SAMPLE_JOURNAL_DATA } from './mockData';
import { PlanButtons } from './PlanButtons';
import { PlanCalendar } from './PlanCalendar';
import { PlanCard } from './PlanCard';

export const Plan = () => {
  const selectedDate = useAtomValue(selectedDateAtom);

  return (
    <>
      <Banner data={BANNER_DATA.plan} />
      <div className="flex flex-col items-center p-3">
        <div className="mb-5">
          <PlanButtons />
          <PlanCalendar />
          <div className="mt-3">
            {SAMPLE_JOURNAL_DATA[selectedDate]?.map(
              ({ id, name, count, time, color, description }) => {
                return (
                  <PlanCard
                    key={id}
                    name={name}
                    count={count}
                    time={time}
                    color={color}
                    description={description}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </>
  );
};
