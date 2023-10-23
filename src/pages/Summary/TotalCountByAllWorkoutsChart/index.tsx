import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

const RADAR_CHART_DATA = [
  { workout: 'Hanging', totalCount: 600 },
  { workout: 'Jumping Pull-Up', totalCount: 500 },
  { workout: 'Band Pull-Up', totalCount: 300 },
  { workout: 'Chin-Up', totalCount: 200 },
  { workout: 'Pull-Up', totalCount: 100 },
  { workout: 'Chest to Bar', totalCount: 50 },
  { workout: 'Archer Pull-Up', totalCount: 0 },
  { workout: 'Muscle Up', totalCount: 0 },
];

const MOST_WORKOUT_NAME = RADAR_CHART_DATA.reduce((prevWorkoutData, workoutData) => {
  return prevWorkoutData.totalCount >= workoutData.totalCount ? prevWorkoutData : workoutData;
}).workout;

export const TotalCountByAllWorkoutsChart = () => {
  return (
    <section className="flex w-full flex-col items-center bg-gray-6 py-4">
      <p className="text-center text-xs">
        <span className="text-primary">{MOST_WORKOUT_NAME}</span>을 가장 많이 하셨어요!
      </p>
      <RadarChart outerRadius={70} width={350} height={230} data={RADAR_CHART_DATA}>
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
