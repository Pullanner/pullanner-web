import { ReactNode } from 'react';

type TextProps = {
  children: ReactNode;
  textStyle?: string;
};

export const ModalText = ({ children, textStyle = '' }: TextProps) => {
  return <div className={`${textStyle} text-center`}>{children}</div>;
};

export const MainText = ({ children, textStyle }: TextProps) => {
  return <p className={`${textStyle} text-base font-extrabold`}>{children}</p>;
};

export const SubText = ({ children, textStyle }: TextProps) => {
  return <p className={`${textStyle} px-5 text-sm leading-6`}>{children}</p>;
};
