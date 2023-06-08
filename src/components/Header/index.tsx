import { usePreviousPage } from '@/hooks/usePreviuosPage';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

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
      <Link to="/">
        <img src="/assets/images/logo.svg" alt="Logo" />
      </Link>
      {isLogin ? (
        <Link to="/mypage">
          <img src="/assets/images/user-icon.svg" alt="userIcon" />
        </Link>
      ) : (
        <Link to="/login">
          <img src="/assets/images/user-icon.svg" alt="userIcon" />
        </Link>
      )}
    </header>
  );
};
