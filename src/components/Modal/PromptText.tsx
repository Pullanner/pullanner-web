import { ReactNode } from 'react';

type PromptTextProps = {
  children: ReactNode;
};

export const PromptText = ({ children }: PromptTextProps) => {
  return <span className="text-center">{children}</span>;
};
