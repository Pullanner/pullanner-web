import { ProgressBar } from '@/components/ProgressBar';
import { MAX_JOURNAL_COUNT_BY_LEVEL } from '@/constants';
import { getPercent } from '@/utils/percent';

type ProgressSectionProps = {
  journalCount: number | null;
  level: keyof typeof MAX_JOURNAL_COUNT_BY_LEVEL | null;
};

export const ProgressSection = ({ journalCount, level }: ProgressSectionProps) => {
  const currentJournalCount = journalCount || 0;
  const currentLevel = level || 1;
  const percent = getPercent(currentJournalCount, MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel]);
  const remainingJournalCount = MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel] - currentJournalCount;

  return (
    <section className="w-full px-6 ">
      <ProgressBar percent={percent} />
      <div className="flex mt-2 justify-between text-xs text-white">
        <span>{`저널 ${remainingJournalCount}개만 더 작성하면 레벨업`}</span>
        <span>{`${currentJournalCount} / ${MAX_JOURNAL_COUNT_BY_LEVEL[currentLevel]}`}</span>
      </div>
    </section>
  );
};
