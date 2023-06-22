// TODO: API 명세에 따라 percentageWidth, span 내용들 변경
export const ProgressSection = () => {
  const percentageWidth = 'w-[20%]';
  return (
    <section className="w-full px-6 ">
      <div className="h-2.5 bg-gray-200 rounded-full">
        <div className={`${percentageWidth} h-2.5 bg-primary rounded-full`} />
      </div>
      <div className="flex mt-2 justify-between text-xs text-white">
        <span>저널 80개만 더 작성하면 레벨업</span>
        <span>20/100</span>
      </div>
    </section>
  );
};
