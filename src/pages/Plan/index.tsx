import { useAtomValue } from 'jotai';

import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants';
import { useGetPlans } from '@/lib/react-query/useGetPlan';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';

import { PlanButtons } from './PlanButtons';
import { PlanCalendar } from './PlanCalendar';
import { PlanCard } from './PlanCard';

export const Plan = () => {
  const selectedDate = useAtomValue(selectedDateAtom);
  const { data: plans, isSuccess } = useGetPlans();

  return (
    <>
      <Banner data={BANNER_DATA.plan} />
      <div className="flex flex-col items-center p-3">
        <div className="mb-5">
          <PlanButtons />
          <PlanCalendar planData={plans} />
          <div className="mt-3">
            {isSuccess &&
              plans &&
              plans[selectedDate]?.map(({ id, planType, planName, progress }) => {
                return (
                  <PlanCard
                    key={id}
                    id={id}
                    planType={planType}
                    planName={planName}
                    progress={progress}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
