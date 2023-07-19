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
            className="mr-1.5 h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: `${filled ? color : 'white'}`,
            }}
          />
        );
      })}
    </ul>
  );
};
