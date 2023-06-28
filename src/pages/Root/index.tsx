import { Outlet } from 'react-router-dom';

import { BottomNavigationBar } from '@/components/BottomNavigationBar';
import { Header } from '@/components/Header';

export const Root = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <div className="relative w-[100%] sm:w-96 h-[100%] sm:h-[50rem] sm:max-h-[90vh] bg-black">
        <Header />
        <Outlet />
        <BottomNavigationBar />
      </div>
    </div>
  );
};
