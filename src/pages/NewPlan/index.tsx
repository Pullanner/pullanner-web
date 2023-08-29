import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SaveButton } from '@/components/buttons/SaveButton';
import { SelectablePullUpCard } from '@/components/PullUpCard/SelectablePullUpCard';
import { WorkoutTable } from '@/components/WorkoutTable';
import { ROADMAP_DATA, ROUTE_PATH } from '@/constants';
import { impossiblePullUpAtom, possiblePullUpAtom } from '@/stores/atoms/workoutDataAtom';
import { PullUpSteps, Workout } from '@/types/plan';
import { convertToUTCDate } from '@/utils/date';

import type { Dayjs } from 'dayjs';

const format = 'HH:mm';
const NEW_PLAN_DESCRIPTION = {
  strength: '가능한 풀업 동작을 반복해서 연습하며 근력을 키워보아요.',
  master: '아직 불가능한 풀업 동작을 가능할 때까지 제대로 연습해볼까요?',
};

type PlanType = keyof typeof NEW_PLAN_DESCRIPTION;

type LocationStateType = {
  state: {
    planType: PlanType;
    date: string;
  };
};

export const NewPlan = () => {
  const { state: locationState }: LocationStateType = useLocation();
  const navigate = useNavigate();
  const userPossiblePullUps = useAtomValue(possiblePullUpAtom);
  const userImpossiblePullUps = useAtomValue(impossiblePullUpAtom);
  const pullUpList =
    locationState.planType === 'strength' ? userPossiblePullUps : userImpossiblePullUps;
  const [selectedWorkouts, setSelectedWorkouts] = useState<Workout[]>([]);
  const [planName, setPlanName] = useState('');
  const [planDateTime, setPlanDateTime] = useState('');

  if (!locationState?.planType) {
    navigate(ROUTE_PATH.plan.index);

    return null;
  }

  const handlePlanInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPlanName(value);
  };

  // TODO: POST request
  const handlePlanSaveClick = () => {
    console.log(planDateTime);
    navigate(ROUTE_PATH.plan.index);
  };

  const handleTimePickerChange = (_: Dayjs | null, selectedTime: string) => {
    if (!selectedTime) {
      setPlanDateTime('');

      return;
    }
    const planDateTimeUtc = convertToUTCDate(locationState.date, selectedTime);
    setPlanDateTime(planDateTimeUtc);
  };

  const addWorkoutRow = (id: PullUpSteps, name: string, color: string) => {
    setSelectedWorkouts((prev) => {
      return [...prev, { id, name, color, count: 0, set: 0, total: 0 }];
    });
  };

  const deleteWorkoutRow = (id: PullUpSteps) => {
    setSelectedWorkouts((prev) => {
      const filtered = prev.filter((w) => {
        return w.id !== id;
      });

      return filtered;
    });
  };

  return (
    <div>
      <img
        src={`/assets/images/banner/${locationState.planType}.jpg`}
        alt={locationState.planType}
      />
      <p>{NEW_PLAN_DESCRIPTION[locationState.planType]}</p>
      <div>{locationState.date}</div>
      <form>
        <div>
          <label htmlFor="plan-name">
            풀업 계획의 이름을 입력해주세요.
            <input
              id="plan-name"
              name="planName"
              className="bg-[#2E2E2E] text-base"
              maxLength={20}
              required
              minLength={1}
              value={planName}
              onChange={handlePlanInputChange}
            />
          </label>
        </div>
        <div>
          <p>풀업 운동을 언제 할까요?</p>
          <TimePicker
            defaultValue={dayjs('12:00', format)}
            format={format}
            onChange={handleTimePickerChange}
          />
        </div>
        <div>
          <p>연습할 풀업 운동을 선택하고, 횟수와 세트를 입력해주세요.</p>
          <div className="flex">
            {pullUpList.map((workoutId) => {
              const workoutData = ROADMAP_DATA.find((v) => {
                return v.id === workoutId;
              });

              if (!workoutData) {
                return null;
              }

              const { id, name, imageSrc, color } = workoutData;

              return (
                <SelectablePullUpCard
                  id={id}
                  name={name}
                  width=""
                  height=""
                  imageSrc={imageSrc}
                  color={color}
                  onAdd={addWorkoutRow}
                  onDelete={deleteWorkoutRow}
                />
              );
            })}
          </div>
          <div>{selectedWorkouts.length > 0 && <WorkoutTable workouts={selectedWorkouts} />}</div>
        </div>
        <SaveButton
          isActive={false}
          width="100%"
          height="44px"
          handleButtonClick={handlePlanSaveClick}
        />
      </form>
    </div>
  );
};
