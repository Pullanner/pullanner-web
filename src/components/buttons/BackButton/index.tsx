import { usePreviousPage } from '@/hooks/usePreviousPage';

import type { ReactNode } from 'react';

type BackButtonProps = {
  classNames: string;
  children: ReactNode;
};

export const BackButton = ({ classNames, children }: BackButtonProps) => {
  const handleBackButtonClick = usePreviousPage();

  return (
    <button type="button" className={`${classNames}`} onClick={handleBackButtonClick}>
      {children}
    </button>
  );
};
