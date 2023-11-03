import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Banner } from '@/components/Banner';
import { ROUTE_PATH, BANNER_DATA } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';
import { getDaysSinceSpecificDate } from '@/utils/date';

import { CompletedPlanCountByTimeChart } from './CompletedPlanCountByTimeChart';
import { MonthlyTotalCountByEachWorkoutChart } from './MonthlyTotalCountByEachWorkoutChart';
import { TotalCountByAllWorkoutsChart } from './TotalCountByAllWorkoutsChart';

export const Summary = () => {
  const loginState = useAtomValue(loginStateAtom) as boolean;
  const userData = useAtomValue(userDataAtom) as UserData;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      navigate(ROUTE_PATH.login);
    }
  }, [loginState, navigate]);

  // TODO: 추후에 로딩페이지로 교체하기
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { joinDate } = userData;
  const daysSinceJoinDate = getDaysSinceSpecificDate(joinDate);

  return (
    <>
      <Banner data={BANNER_DATA.summary} />
      <div className="flex flex-col items-center">
        <p className="py-5 text-base">
          Pullanner와 <span className="text-primary">{daysSinceJoinDate}</span>일째 성장 중!
        </p>
        <TotalCountByAllWorkoutsChart />
        <MonthlyTotalCountByEachWorkoutChart />
        <CompletedPlanCountByTimeChart />
      </div>
    </>
  );
};
