import { ProgressBar } from '@/components/ProgressBar';
import { MAX_JOURNAL_COUNT_BY_LEVEL } from '@/constants';
import { getPercent } from '@/utils/percent';

type ProgressSectionProps = {
  experiencePoint: number;
  level: keyof typeof MAX_JOURNAL_COUNT_BY_LEVEL;
};

export const ProgressSection = ({ experiencePoint, level }: ProgressSectionProps) => {
  const percent = getPercent(experiencePoint, MAX_JOURNAL_COUNT_BY_LEVEL[level]);

  return (
    <section className="w-full px-5 pb-10">
      <div className="flex justify-between pb-2">
        <span className="text-sm font-semibold text-primary">{`LEVEL ${level}`}</span>
        <span className="text-xs">{`${experiencePoint} / ${MAX_JOURNAL_COUNT_BY_LEVEL[level]} Exp`}</span>
      </div>
      <ProgressBar percent={percent} />
    </section>
  );
};
