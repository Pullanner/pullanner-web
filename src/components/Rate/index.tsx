type RateProps = {
  rateValue: number;
  color: string;
};

export const Rate = ({ rateValue, color }: RateProps) => {
  const MAX_RATING = 5;

  return (
    <ul className="flex items-center">
      {Array.from({ length: MAX_RATING }).map((_, index) => {
        const filled = index < rateValue;
        return (
          <li
            className="rounded-full mr-1 w-2 h-2"
            style={{
              backgroundColor: `${filled ? color : 'white'}`,
            }}
          />
        );
      })}
    </ul>
  );
};
