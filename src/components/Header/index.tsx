import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ROUTE_PATH } from '@/constants/routePath';
import { usePreviousPage } from '@/hooks/usePreviuosPage';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

const BACK_BUTTON_VISIBILITY = {
  true: 'invisible',
  false: 'visible',
} as const;

export const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/' ? 'true' : 'false';
  const isLogin = useRecoilValue(loginStateAtom);
  const handleBackButtonClick = usePreviousPage();
  return (
    <header className="flex justify-between h-12 p-5 bg-black">
      <button
        type="button"
        className={`${BACK_BUTTON_VISIBILITY[isMainPage]}`}
        onClick={handleBackButtonClick}
      >
        <img src="/assets/images/back-button.svg" alt="backButton" />
      </button>
      <Link to={ROUTE_PATH.root}>
        <img src="/assets/images/logo.svg" alt="Logo" />
      </Link>
      {isLogin ? (
        <Link to={ROUTE_PATH.myPage}>
          <img src="/assets/images/user-icon.svg" alt="userIcon" />
        </Link>
      ) : (
        <Link to={ROUTE_PATH.login}>
          <img src="/assets/images/user-icon.svg" alt="userIcon" />
        </Link>
      )}
    </header>
  );
};
