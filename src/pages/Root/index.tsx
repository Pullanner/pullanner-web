import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <div className="w-96 h-mobileHeight flex flex-col justify-center items-center bg-black">
        <Outlet />
      </div>
    </div>
  );
};
