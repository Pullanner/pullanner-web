import { useAtomValue } from 'jotai';
import { Link, useLocation } from 'react-router-dom';

import { BackButton } from '@/components/buttons/BackButton';
import { ROUTE_PATH } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

import { ProfileImageDropdown } from './ProfileImageDropdown';

const BACK_BUTTON_VISIBILITY = {
  true: 'invisible',
  false: 'visible',
} as const;

export const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === ROUTE_PATH.roadmap.index ? 'true' : 'false';
  const isLogin = useAtomValue(loginStateAtom) as boolean;

  return (
    <header className="flex items-center justify-between bg-black p-5">
      <BackButton classNames={`${BACK_BUTTON_VISIBILITY[isMainPage]}`}>
        <img src="/assets/images/back-button.svg" alt="backButton" />
      </BackButton>
      <Link to={ROUTE_PATH.roadmap.index}>
        <img src="/assets/images/logo.svg" alt="Logo" />
      </Link>
      {isLogin ? (
        <ProfileImageDropdown />
      ) : (
        <Link to={ROUTE_PATH.login}>
          <img src="/assets/images/user-icon.svg" alt="userIcon" />
        </Link>
      )}
    </header>
  );
};
