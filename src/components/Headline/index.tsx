import type { ReactNode } from 'react';

type HeadlineProps = {
  descriptions: readonly string[] | string;
  children?: ReactNode;
  classNames?: string;
};

export const Headline = ({ descriptions, children, classNames }: HeadlineProps) => {
  if (typeof descriptions === 'string') {
    return (
      <div className={`${classNames} text-center text-xl`}>
        {children}
        <p>{descriptions}</p>
      </div>
    );
  }

  return (
    <div className={`${classNames} text-center text-xl`}>
      {children}
      {descriptions.map((text) => {
        return <p key={text}>{text}</p>;
      })}
    </div>
  );
};
