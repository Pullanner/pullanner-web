export type TotalWorkoutCount = {
  totalCountByWorkout: {
    step: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    totalCount: number;
  }[];
};

export const TOTAL_WORKOUT_COUNT_DATA: TotalWorkoutCount = {
  totalCountByWorkout: [
    { step: 1, totalCount: 600 },
    { step: 2, totalCount: 500 },
    { step: 3, totalCount: 300 },
    { step: 4, totalCount: 200 },
    { step: 5, totalCount: 100 },
    { step: 6, totalCount: 50 },
    { step: 7, totalCount: 0 },
    { step: 8, totalCount: 0 },
  ],
};
