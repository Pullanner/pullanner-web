import { useAtom } from 'jotai';

import { SelectablePullUpCard } from '@/components/cards/SelectablePullupCard';
import { WorkoutTable } from '@/components/WorkoutTable';
import { usePlanComplete } from '@/components/WorkoutTable/hooks/usePlanComplete';
import { PLAN_TYPE, ROADMAP_DATA } from '@/constants';
import { workoutPlanAtom } from '@/stores/atoms/workoutPlanAtom';
import type { PlanType, PullUpSteps } from '@/types/plan';
import { StepIdForWorkout } from '@/types/workout';

type WorkoutTableSectionProps = {
  planType: PlanType;
  pullUpList: StepIdForWorkout[];
};

export const WorkoutTableSection = ({ planType, pullUpList }: WorkoutTableSectionProps) => {
  const [workoutPlan, setWorkoutPlan] = useAtom(workoutPlanAtom);
  const { checkPlanComplete } = usePlanComplete();

  const addWorkoutRow = (step: PullUpSteps) => {
    setWorkoutPlan((prev) => {
      const updatedWorkoutPlan = [...prev, { step, count: 0, set: 0, done: false }];
      checkPlanComplete(updatedWorkoutPlan);

      return updatedWorkoutPlan;
    });
  };

  const deleteWorkoutRow = (step: PullUpSteps) => {
    setWorkoutPlan((prev) => {
      const updatedWorkoutPlan = prev.filter((w) => {
        return w.step !== step;
      });
      checkPlanComplete(updatedWorkoutPlan);

      return updatedWorkoutPlan;
    });
  };

  return (
    <section>
      <div>
        <p className="py-2">💪 어떤 풀업 운동을 해볼까요?</p>
        <p className="mb-2 text-sm ">
          연습할 풀업 운동을 선택 후, 횟수(Count)와 세트(Set)를 입력해주세요.
        </p>
        {planType === PLAN_TYPE.strength && (
          <p className="mb-2 text-sm">Hanging은 횟수 대신 초(Second) 단위로 입력해주세요.</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
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
              width="100px"
              height=""
              imageSrc={imageSrc}
              color={color}
              onAdd={addWorkoutRow}
              onDelete={deleteWorkoutRow}
            />
          );
        })}
      </div>
      <div className="py-5">{workoutPlan.length > 0 && <WorkoutTable />}</div>
    </section>
  );
};
