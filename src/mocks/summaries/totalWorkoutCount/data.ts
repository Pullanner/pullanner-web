export const TOTAL_WORKOUT_COUNT_DATA = {
  totalCountByWorkout: [
    { workout: 'Hanging', totalCount: 600 },
    { workout: 'Jumping Pull-up', totalCount: 500 },
    { workout: 'Band Pull-up', totalCount: 300 },
    { workout: 'Chin-up', totalCount: 200 },
    { workout: 'Pull-up', totalCount: 100 },
    { workout: 'Chest to Bar', totalCount: 50 },
    { workout: 'Archer Pull-up', totalCount: 0 },
    { workout: 'Muscle up', totalCount: 0 },
  ],
};

export type TotalWorkoutCount = typeof TOTAL_WORKOUT_COUNT_DATA;
