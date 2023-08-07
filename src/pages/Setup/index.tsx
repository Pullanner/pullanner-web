import { Outlet } from 'react-router-dom';

import { ScrollTopButton } from '@/components/buttons/ScrollTopButton';

export const Setup = () => {
  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center">
      <div className="h-full w-full bg-black sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
        <div className="flex h-full flex-col items-center">
          <div className="relative overflow-y-auto" id="outlet-container">
            <Outlet />
            <ScrollTopButton />
          </div>
        </div>
      </div>
    </div>
  );
};
