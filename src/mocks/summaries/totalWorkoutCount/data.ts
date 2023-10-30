export const TOTAL_WORKOUT_COUNT_DATA = {
  totalCountByWorkout: [
    { workout: 'Hanging', totalCount: 600 },
    { workout: 'Jumping Pull-Up', totalCount: 500 },
    { workout: 'Band Pull-Up', totalCount: 300 },
    { workout: 'Chin-Up', totalCount: 200 },
    { workout: 'Pull-Up', totalCount: 100 },
    { workout: 'Chest to Bar', totalCount: 50 },
    { workout: 'Archer Pull-Up', totalCount: 0 },
    { workout: 'Muscle Up', totalCount: 0 },
  ],
};

export type TotalWorkoutCount = typeof TOTAL_WORKOUT_COUNT_DATA;
