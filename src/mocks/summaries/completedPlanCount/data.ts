export type CompletedPlanCount = {
  completedPlanCountByTime: {
    time: 'morning' | 'afternoon' | 'evening' | 'night';
    thisMonth: number;
    prevMonth: number;
  }[];
};

export const COMPLETED_PLAN_COUNT_DATA = {
  completedPlanCountByTime: [
    {
      time: 'night',
      thisMonth: 40,
      prevMonth: 45,
    },
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
