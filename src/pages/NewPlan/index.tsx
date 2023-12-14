import { message } from 'antd';
import dayjs from 'dayjs';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SaveButton } from '@/components/buttons/SaveButton';
import {
  NEW_PLAN_DESCRIPTION,
  PLAN_MESSAGE,
  PLAN_TYPE,
  ROUTE_PATH,
  WARNING_MESSAGE_OPTION,
} from '@/constants';
import { usePostPlan } from '@/lib/react-query/usePlans';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { impossiblePullUpAtom, possiblePullUpAtom } from '@/stores/atoms/workoutDataAtom';
import { planCompleteAtom, workoutPlanAtom } from '@/stores/atoms/workoutPlanAtom';
import { checkPastDateTime, convertToUTCDate } from '@/utils/date';

import { PlanNameSection } from './PlanNameSection';
import { WorkoutTableSection } from './WorkoutTableSection';
import { WorkoutTimeSection } from './WorkoutTimeSection';

import type { Dayjs } from 'dayjs';

type PlanType = keyof typeof NEW_PLAN_DESCRIPTION;

type LocationStateType = {
  state: {
    planType: PlanType;
    date: string;
  };
};

export const NewPlan = () => {
  const { state: locationState }: LocationStateType = useLocation();
  const planType = locationState?.planType;
  const planDate = locationState?.date;
  const navigate = useNavigate();
  const userPossiblePullUps = useAtomValue(possiblePullUpAtom);
  const userImpossiblePullUps = useAtomValue(impossiblePullUpAtom);
  const pullUpList = planType === PLAN_TYPE.strength ? userPossiblePullUps : userImpossiblePullUps;
  const [planName, setPlanName] = useState('');
  const [planDateTime, setPlanDateTime] = useState('');
  const [workoutPlan, setWorkoutPlan] = useAtom(workoutPlanAtom);
  const [messageApi, contextHolder] = message.useMessage();
  const [isPlanComplete, setIsPlanComplete] = useAtom(planCompleteAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { mutate: postPlan } = usePostPlan(accessToken, setAccessToken, setModalType);

  useEffect(() => {
    return () => {
      setWorkoutPlan([]);
      setIsPlanComplete(false);
    };
  }, []);

  if (!planType) {
    navigate(ROUTE_PATH.plan.index);

    return null;
  }

  const handlePlanInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPlanName(value);
  };

  const handlePlanSaveClick = () => {
    const userWorkoutPlan = {
      planType,
      planName,
      planDateTime,
      workouts: workoutPlan,
    };
    postPlan(userWorkoutPlan);
    setWorkoutPlan([]);
    setIsPlanComplete(false);
    navigate(ROUTE_PATH.plan.index);
  };

  const handleTimePickerChange = (_: Dayjs | null, selectedTime: string) => {
    if (!selectedTime) {
      setPlanDateTime('');

      return;
    }
    const planDateTimeUtc = convertToUTCDate(planDate, selectedTime);
    setPlanDateTime(planDateTimeUtc);
    const isPast = checkPastDateTime(planDate, selectedTime);
    if (isPast) {
      messageApi.open({ ...WARNING_MESSAGE_OPTION, content: PLAN_MESSAGE.past });
      setPlanDateTime('');
    }
  };

  return (
    <div>
      <img src={`/assets/images/banner/${planType}.jpg`} alt={planType} />
      <div
        className="p-5"
        style={{
          backgroundColor: planType === PLAN_TYPE.master ? '#8BB3FF85' : '#F1B55B',
          color: planType === PLAN_TYPE.master ? 'white' : 'black',
        }}
      >
        <p>{NEW_PLAN_DESCRIPTION[planType]}</p>
      </div>
      <div className="border-b-2 border-white p-4 text-center font-bold">
        {dayjs(planDate).format('dddd, MMMM DD, YYYY')}
      </div>
      <div className="p-5">
        <form className="flex flex-col gap-5">
          <PlanNameSection planName={planName} handlePlanInputChange={handlePlanInputChange} />
          <WorkoutTimeSection
            planDateTime={planDateTime}
            handleTimePickerChange={handleTimePickerChange}
          />
          <WorkoutTableSection planType={planType} pullUpList={pullUpList} />
          <SaveButton
            isActive={!!(planName && planDateTime) && isPlanComplete}
            width="100%"
            height="44px"
            handleButtonClick={handlePlanSaveClick}
            isDisabled={!planName || !planDateTime || !isPlanComplete}
          />
        </form>
      </div>

      {contextHolder}
    </div>
  );
};
