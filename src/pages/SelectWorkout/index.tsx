import { useAtom, useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/components/buttons/BackButton';
import { SaveButton } from '@/components/buttons/SaveButton';
import { Headline } from '@/components/Headline';
import { ROADMAP_DATA, ROUTE_PATH } from '@/constants';
import { usePostWorkoutData } from '@/lib/react-query/useWorkoutData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';
import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';

import { SelectableWorkoutCard } from './SelectableWorkoutCard';

const TEXT_CONTENTS = {
  headline: '가능한 풀업 동작을 알려주세요',
  description: 'Hanging(매달리기) 동작은 기본적으로 선택되어 있어요.',
} as const;

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
        <span className="font-extrabold">{nickname}</span>님,
      </Headline>
      <p className="pb-10 text-xs text-[#D9D9D9]">{TEXT_CONTENTS.description}</p>
      <section className="bg-[#1E1E1E] py-4">
        <div className="flex w-full justify-center">
          <p className="pb-6 font-bold text-primary">{`현재 가능한 풀업 동작 : ${
            workoutData.filter((workout) => {
              return workout.selected;
            }).length
          }`}</p>
        </div>
        <div className="grid grid-cols-4 gap-x-3.5 gap-y-6 px-5 pb-5">
          {ROADMAP_DATA.map(({ id, name, imageSrc, color }) => {
            const workout = workoutData.find(({ name: workoutName }) => {
              return name === workoutName;
            });

            return (
              <SelectableWorkoutCard
                key={id}
                id={id}
                name={name}
                imageSrc={imageSrc}
                color={color}
                width="4.75rem"
                height="6.375rem"
                isActive={workout?.selected}
              />
            );
          })}
        </div>
      </section>
      <div className="flex justify-center gap-x-4 px-5 pt-12">
        <BackButton classNames="h-[2.75rem] w-[9.375rem] bg-[#CFCFCF] rounded-[0.313rem] text-sm text-black">
          이전으로 가기
        </BackButton>
        <SaveButton
          isActive
          handleButtonClick={handleSaveButtonClick}
          width="9.375rem"
          height="2.75rem"
          text="다음으로 가기"
          className="text-sm"
        />
      </div>
    </div>
  );
};
