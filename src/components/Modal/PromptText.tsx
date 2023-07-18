import { ReactNode } from 'react';

type PromptTextProps = {
  children: ReactNode;
};

export const PromptText = ({ children }: PromptTextProps) => {
  return <div className="whitespace-normal text-center">{children}</div>;
};
