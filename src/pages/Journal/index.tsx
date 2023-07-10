import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';

import { JournalCalendar } from './JournalCalendar';
import { JournalCard } from './JournalCard';
import { SAMPLE_JOURNAL_DATA } from './mockData';

export const Journal = () => {
  const selectedDate = useAtomValue(selectedDateAtom);

  return (
    <>
      <Banner data={BANNER_DATA.journal} />
      <div className="flex flex-col items-center p-3">
        <div className="mb-5">
          <JournalCalendar />
          <div className="mt-3">
            {SAMPLE_JOURNAL_DATA[selectedDate] ? (
              SAMPLE_JOURNAL_DATA[selectedDate].map(
                ({ id, name, count, time, color, description, emotion }) => {
                  return (
                    <JournalCard
                      key={id}
                      name={name}
                      count={count}
                      time={time}
                      color={color}
                      description={description}
                      emotion={emotion}
                    />
                  );
                },
              )
            ) : (
              <div className="rounded-md bg-zinc-800 p-2 text-center text-sm text-zinc-200">
                이 날에는 풀업 저널을 기록하지 않았어요.
              </div>
            )}
          </div>
        </div>
        <Link
          to="/journal/new"
          className="sticky bottom-4 z-10 flex w-fit rounded-lg bg-primary p-2 px-4"
        >
          <img src="/assets/images/plus.svg" alt="+" />
          <span className="ml-2 text-black">풀업 운동 기록하기</span>
        </Link>
      </div>
    </>
  );
};
