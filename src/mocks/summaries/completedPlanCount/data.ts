export const COMPLETED_PLAN_COUNT_DATA = {
  completedPlanCountByTime: [
    {
      time: 'morning',
      thisMonth: 20,
      prevMonth: 10,
    },
    {
      time: 'afternoon',
      thisMonth: 30,
      prevMonth: 35,
    },
    {
      time: 'evening',
      thisMonth: 70,
      prevMonth: 55,
    },
  ],
};

export type CompletedPlanCount = typeof COMPLETED_PLAN_COUNT_DATA;
