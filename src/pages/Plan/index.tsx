import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants';
import { useGetAllPlans } from '@/lib/react-query/usePlans';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';

import { PlanButtons } from './PlanButtons';
import { PlanCalendar } from './PlanCalendar';
import { PlanCard } from './PlanCard';

export const Plan = () => {
  const selectedDate = useAtomValue(selectedDateAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { data: plans, isSuccess } = useGetAllPlans(accessToken, setAccessToken, setModalType);

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
