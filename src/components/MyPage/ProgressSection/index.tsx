import { MAX_JOURNAL_COUNT_BY_LEVEL } from '@/constants';
import { getPercent, getPercentWidth } from '@/utils/percent';

type ProgressSectionProps = {
  journalCount: number | null;
  level: keyof typeof MAX_JOURNAL_COUNT_BY_LEVEL | null;
};

export const ProgressSection = ({ journalCount, level }: ProgressSectionProps) => {
  const currentJournalCount = journalCount || 0;
  const currentLevel = level || 1;
  const percent = getPercent(currentJournalCount, MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel]);
  const progressWidth = getPercentWidth(percent);
  return (
    <section className="w-full px-6 ">
      <div className="h-2.5 bg-gray-200 rounded-full">
        <div className={`${progressWidth} h-2.5 bg-primary rounded-full`} />
      </div>
      <div className="flex mt-2 justify-between text-xs text-white">
        <span>
          저널 {MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel] - currentJournalCount}개만 더 작성하면
          레벨업
        </span>
        <span>{`${currentJournalCount} / ${MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel]}`}</span>
      </div>
    </section>
  );
};
