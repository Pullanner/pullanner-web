import { useAtom, useSetAtom } from 'jotai';
import { Bar, BarChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import { TIME_NAME_IN_KOREAN } from '@/constants';
import { useGetCompletedPlanCount } from '@/lib/react-query/useCompletedPlanCount';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

export const CompletedPlanCountByTimeChart = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { data } = useGetCompletedPlanCount(accessToken, setAccessToken, setModalType);

  if (!data) {
    return null;
  }

  const { completedPlanCountByTime: completedPlanCountData } = data;

  const MOST_WORKOUT_TIME = completedPlanCountData.reduce((prevWorkout, workout) => {
    return prevWorkout.thisMonth >= workout.thisMonth ? prevWorkout : workout;
  }).time;

  const completedPlanCountByTimeData = completedPlanCountData.map(
    ({ time, thisMonth, prevMonth }) => {
      return {
        시간대: TIME_NAME_IN_KOREAN[time],
        '이번달 플랜수': thisMonth,
        '저번달 플랜수': prevMonth,
      };
    },
  );

  return (
    <section className="flex w-full flex-col items-center bg-gray-6 py-4">
      <p className="pb-4 text-center text-xs">
        주로 <span className="text-primary">{TIME_NAME_IN_KOREAN[MOST_WORKOUT_TIME]}</span>에
        운동하시네요!
      </p>
      <BarChart width={330} height={300} data={completedPlanCountByTimeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="시간대" />
        <YAxis />
        <Tooltip
          labelFormatter={(value) => {
            return `시간대 : ${value}`;
          }}
          labelStyle={{ color: 'black' }}
        />
        <Legend />
        <Bar dataKey="저번달 플랜수" fill="#8D8D8D" />
        <Bar dataKey="이번달 플랜수" fill="#60EBD1" />
      </BarChart>
    </section>
  );
};
