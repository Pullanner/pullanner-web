import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import { rest } from 'msw';

import { API_PATH } from '@/constants';
import { NewPlan, Plan, Plans, PullUpSteps } from '@/types/plan';
import { getDateAddedByDays, getDateSubtractedByDays, getEndDateOfMonth } from '@/utils/date';

import { SAMPLE_PLAN_DATA } from './data';

import type { DefaultBodyType, ResponseComposition, RestContext, RestRequest } from 'msw';

dayjs.extend(utc);
dayjs.extend(isBetween);

type AllPlansReqBody = {
  params: {
    year: string;
    month: string;
  };
};

const getAllPlans = (
  req: RestRequest<AllPlansReqBody>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const params = req.url.searchParams;
  const year = params.get('year');
  const month = params.get('month');

  const startOfMonth = `${year}-${month}-01`;
  const startOfData = getDateSubtractedByDays(startOfMonth, 14);
  const endOfMonth = getEndDateOfMonth(startOfMonth);
  const endOfData = getDateAddedByDays(endOfMonth, 14);

  const { data: allPlanData } = SAMPLE_PLAN_DATA;
  const daysOfData = Object.keys(allPlanData).filter((date) => {
    return dayjs(date).isBetween(startOfData, endOfData, 'day');
  });
  const planDataByDay = daysOfData.reduce((obj, date) => {
    const copiedObj = obj;
    copiedObj[date] = allPlanData[date];

    return copiedObj;
  }, {} as Plans);
  const planData = {
    data: planDataByDay,
  };

  return res(ctx.status(200), ctx.json(planData));
};

const postPlan = async (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const newPlan: NewPlan = await req.json();
  const id = Math.random();
  const planDate = newPlan.planDateTime.split('T')[0];
  const createdAt = dayjs.utc().format();
  const progress = 0;
  const note = '';
  let mainWorkoutStep: PullUpSteps = 1;

  let largestTotal = 0;
  newPlan.workouts.forEach((workout) => {
    const total = workout.count * workout.set;
    if (total > largestTotal) {
      largestTotal = total;
      mainWorkoutStep = workout.step;
    }
  });

  const newPlanData: Plan = {
    ...newPlan,
    id,
    createdAt,
    updatedAt: createdAt,
    progress,
    note,
    mainWorkoutStep,
  };

  SAMPLE_PLAN_DATA.data[planDate] = SAMPLE_PLAN_DATA.data[planDate]
    ? [...SAMPLE_PLAN_DATA.data[planDate], newPlanData]
    : [newPlanData];

  return res(ctx.status(200));
};

const planHandler = [rest.get(API_PATH.plans, getAllPlans), rest.post(API_PATH.plans, postPlan)];

export default planHandler;
