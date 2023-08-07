import { useAtom, useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { SaveButton } from '@/components/buttons/SaveButton';
import { Headline } from '@/components/Headline';
import { ROADMAP_DATA, ROUTE_PATH } from '@/constants';
import { usePostWorkoutData } from '@/lib/react-query/useWorkoutData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';
import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';

import { SelecteableWorkoutCard } from './SelectableWorkoutCard';

const TEXT_CONTENTS = {
  headline: '가능한 풀업 동작을 알려주세요',
  description: 'Hanging(매달리기) 동작은 기본적으로 선택되어 있어요.',
} as const;

const HANGING = 'Hanging';

export const SelectWorkout = () => {
  const [workoutData, setWorkoutData] = useAtom(workoutDataAtom);
  const { nickname } = useAtomValue(userDataAtom) as UserData;
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const { mutate } = usePostWorkoutData(accessToken, setAccessToken);
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    setWorkoutData(workoutData);
    mutate(workoutData);
    navigate(ROUTE_PATH.setup.result);
  };

  return (
    <div className="flex flex-col items-center">
      <Headline descriptions={TEXT_CONTENTS.headline} classNames="pb-9 pt-[6.25rem]">
        <p>
          <span className="font-extrabold">{nickname}</span>님,
        </p>
      </Headline>
      <p className="pb-16 text-xs text-[#D9D9D9]">{TEXT_CONTENTS.description}</p>
      <div className="grid grid-cols-4 gap-x-3.5 gap-y-6 px-5 pb-5">
        {ROADMAP_DATA.map(({ id, title, imageSrc, color }) => {
          return (
            <SelecteableWorkoutCard
              key={id}
              id={id}
              title={title}
              imageSrc={imageSrc}
              color={color}
              width="4.75rem"
              height="6.375rem"
              isActive={title === HANGING}
            />
          );
        })}
      </div>
      <div className="flex w-full flex-row-reverse px-7">
        <p>{`${
          workoutData.filter((workout) => {
            return workout.selected;
          }).length
        } / ${workoutData.length}`}</p>
      </div>
      <div className="flex justify-center pt-20">
        <SaveButton
          isActive
          handleButtonClick={handleSaveButtonClick}
          width="21.875rem"
          height="2.75rem"
          text="다음으로 가기"
          className="font-extrabold"
        />
      </div>
    </div>
  );
};
