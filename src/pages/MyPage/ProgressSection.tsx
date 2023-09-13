import { ProgressBar } from '@/components/ProgressBar';
import { MAX_JOURNAL_COUNT_BY_LEVEL } from '@/constants';
import { getPercent } from '@/utils/percent';

type ProgressSectionProps = {
  planCount: number | null;
  level: keyof typeof MAX_JOURNAL_COUNT_BY_LEVEL | null;
};

export const ProgressSection = ({ planCount, level }: ProgressSectionProps) => {
  const currentPlanCount = planCount || 0;
  const currentLevel = level || 1;
  const percent = getPercent(currentPlanCount, MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel]);

  return (
    <section className="w-full px-5 pb-10">
      <div className="flex justify-between pb-2">
        <span className="text-sm font-semibold text-primary">{`LEVEL ${currentLevel}`}</span>
        <span className="text-xs">{`${currentPlanCount} / ${MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel]} Exp`}</span>
      </div>
      <ProgressBar percent={percent} />
    </section>
  );
};
