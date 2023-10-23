import { Bar, BarChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const BAR_CHART_DATA = [
  {
    time: 'morning',
    thisMonth: 40,
    prevMonth: 24,
  },
  {
    time: 'afternoon',
    thisMonth: 30,
    prevMonth: 13,
  },
  {
    time: 'evening',
    thisMonth: 20,
    prevMonth: 98,
  },
];

const MOST_WORKOUT_TIME = BAR_CHART_DATA.reduce((prevWorkoutData, workoutData) => {
  return prevWorkoutData.thisMonth >= workoutData.thisMonth ? prevWorkoutData : workoutData;
}).time;

export const CompletedPlanCountByTimeChart = () => {
  return (
    <section className="flex w-full flex-col items-center bg-gray-6 py-4">
      <p className="pb-4 text-center text-xs">
        주로 <span className="text-primary">{MOST_WORKOUT_TIME}</span>에 운동하시네요!
      </p>
      <BarChart width={350} height={300} data={BAR_CHART_DATA}>
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
