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
      <div className="p-3 flex flex-col items-center">
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
              <div className="text-center text-zinc-200 text-sm bg-zinc-800 rounded-md p-2">
                이 날에는 풀업 저널을 기록하지 않았어요.
              </div>
            )}
          </div>
        </div>
        <Link
          to="/journal/new"
          className="bg-primary flex p-2 px-4 rounded-lg sticky w-fit bottom-4 z-10"
        >
          <img src="/assets/images/plus.svg" alt="+" />
          <span className="text-black ml-2">풀업 운동 기록하기</span>
        </Link>
      </div>
    </>
  );
};
