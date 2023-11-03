import { useAtom, useSetAtom } from 'jotai';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

import { useGetTotalWorkoutCount } from '@/lib/react-query/useTotalWorkoutCount';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

export const TotalCountByAllWorkoutsChart = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { data } = useGetTotalWorkoutCount(accessToken, setAccessToken, setModalType);

  if (!data) {
    return null;
  }

  const { totalCountByWorkout: totalCountByWorkoutData } = data;

  const MOST_WORKOUT_NAME = totalCountByWorkoutData.reduce((prevWorkoutData, workoutData) => {
    return prevWorkoutData.totalCount >= workoutData.totalCount ? prevWorkoutData : workoutData;
  }).workout;

  return (
    <section className="flex w-full flex-col items-center bg-gray-6 py-4">
      <p className="text-center text-xs">
        <span className="text-primary">{MOST_WORKOUT_NAME}</span>을 가장 많이 하셨어요!
      </p>
      <RadarChart outerRadius={70} width={350} height={230} data={totalCountByWorkoutData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="workout" style={{ fontSize: '14px', color: '#505050' }} />
        <PolarRadiusAxis angle={30} style={{ fontSize: '12px' }} />
        <Radar
          name="봉철이"
          dataKey="totalCount"
          stroke="#60EBD1"
          fill="#60EBD1"
          fillOpacity={0.5}
        />
      </RadarChart>
    </section>
  );
};
