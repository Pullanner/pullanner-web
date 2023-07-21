import { ReactNode } from 'react';

type TextProps = {
  children: ReactNode;
  textStyle?: string;
};

export const PromptText = ({ children, textStyle = '' }: TextProps) => {
  return <div className={`${textStyle}`}>{children}</div>;
};

export const MainText = ({ children, textStyle }: TextProps) => {
  return <p className={`${textStyle} mb-4 text-base font-extrabold`}>{children}</p>;
};

export const SubText = ({ children, textStyle }: TextProps) => {
  return <p className={`${textStyle} mb-0.5 text-sm`}>{children}</p>;
};
