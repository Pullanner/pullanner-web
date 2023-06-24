import { MAX_JOURNAL_COUNT_BY_LEVEL } from '@/constants';
import { getPercent, getPercentWidth } from '@/utils/percent';

type ProgressSectionProps = {
  journalCount: number;
  level: keyof typeof MAX_JOURNAL_COUNT_BY_LEVEL;
};

export const ProgressSection = ({ journalCount, level }: ProgressSectionProps) => {
  const percent = getPercent(journalCount, MAX_JOURNAL_COUNT_BY_LEVEL[level]);
  const progressWidth = getPercentWidth(percent);
  return (
    <section className="w-full px-6 ">
      <div className="h-2.5 bg-gray-200 rounded-full">
        <div className={`${progressWidth} h-2.5 bg-primary rounded-full`} />
      </div>
      <div className="flex mt-2 justify-between text-xs text-white">
        <span>저널 {MAX_JOURNAL_COUNT_BY_LEVEL[level] - journalCount}개만 더 작성하면 레벨업</span>
        <span>{`${journalCount} / ${MAX_JOURNAL_COUNT_BY_LEVEL[level]}`}</span>
      </div>
    </section>
  );
};
