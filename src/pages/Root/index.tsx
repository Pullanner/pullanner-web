import { Outlet } from 'react-router-dom';

import { BottomNavigationBar } from '@/components/BottomNavigationBar';
import { Header } from '@/components/Header';

export const Root = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <div className="relative w-96 h-mobileHeight bg-black">
        <Header />
        <Outlet />
        <BottomNavigationBar />
      </div>
    </div>
  );
};
