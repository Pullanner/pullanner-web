import { useAtomValue } from 'jotai';
import { Link, useLocation } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { usePreviousPage } from '@/hooks/usePreviousPage';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

const BACK_BUTTON_VISIBILITY = {
  true: 'invisible',
  false: 'visible',
} as const;

export const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === ROUTE_PATH.roadmap.index ? 'true' : 'false';
  const isLogin = useAtomValue(loginStateAtom) as boolean;
  const handleBackButtonClick = usePreviousPage();

  return (
    <header className="flex items-center justify-between bg-black p-5">
      <button
        type="button"
        className={`${BACK_BUTTON_VISIBILITY[isMainPage]}`}
        onClick={handleBackButtonClick}
      >
        <img src="/assets/images/back-button.svg" alt="backButton" />
      </button>
      <Link to={ROUTE_PATH.roadmap.index}>
        <img src="/assets/images/logo.svg" alt="Logo" />
      </Link>
      {isLogin ? (
        <Link to={ROUTE_PATH.myPage.index}>
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
