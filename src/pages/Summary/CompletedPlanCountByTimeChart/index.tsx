import { useAtom, useSetAtom } from 'jotai';
import { Bar, BarChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

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

  const { completedPlanCountByTime: completedPlanCountByTimeData } = data;

  const MOST_WORKOUT_TIME = completedPlanCountByTimeData.reduce((prevWorkout, workout) => {
    return prevWorkout.thisMonth >= workout.thisMonth ? prevWorkout : workout;
  }).time;

  return (
    <section className="flex w-full flex-col items-center bg-gray-6 py-4">
      <p className="pb-4 text-center text-xs">
        주로 <span className="text-primary">{MOST_WORKOUT_TIME}</span>에 운동하시네요!
      </p>
      <BarChart width={350} height={300} data={completedPlanCountByTimeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip
          labelFormatter={(value) => {
            return `time : ${value}`;
          }}
          labelStyle={{ color: 'black' }}
        />
        <Legend />
        <Bar dataKey="prevMonth" fill="#8D8D8D" />
        <Bar dataKey="thisMonth" fill="#60EBD1" />
      </BarChart>
    </section>
  );
};
