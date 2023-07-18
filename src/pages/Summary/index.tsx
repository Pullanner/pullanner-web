import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants';

export const Summary = () => {
  return (
    <>
      <Banner data={BANNER_DATA.summary} />
      <div className="mt-12 flex flex-col items-center p-5 text-lg">
        <p>Summary 페이지는 현재 준비중입니다.</p>
        <p>조금만 기다려 주세요!</p>
      </div>
    </>
  );
};
