import { Outlet } from 'react-router-dom';

import { BottomNavigationBar } from '@/components/BottomNavigationBar';
import { Header } from '@/components/Header';
import { ScrollTopButton } from '@/components/ScrollTopButton';

export const Root = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <div className="w-[100%] sm:w-96 h-[100%] sm:h-[50rem] sm:max-h-[90vh] bg-black">
        <Header />
        <div className="flex flex-col items-center h-[calc(100%-8rem)]">
          <div className="overflow-y-auto relative" id="outlet-container">
            <Outlet />
            <ScrollTopButton />
          </div>
        </div>
        <BottomNavigationBar />
      </div>
    </div>
  );
};
