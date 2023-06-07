import { usePreviousPage } from '@/hooks/usePreviuosPage';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const PREVIOUS_PAGE_NUMBER = -1;
const backButtonVisibility = {
  true: 'invisible',
  false: 'visible',
};

export const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/' ? 'true' : 'false';
  const isLogin = useRecoilValue(loginStateAtom);
  const handleBackButtonClick = usePreviousPage(PREVIOUS_PAGE_NUMBER);
  return (
    <header className="flex justify-between h-12 p-5 bg-black">
      <button
        type="button"
        className={`${backButtonVisibility[isMainPage]}`}
        onClick={handleBackButtonClick}
      >
        <img src="/assets/back-button.svg" alt="backButton" />
      </button>
      <Link to="/">
        <img src="/assets/logo.svg" alt="Logo" />
      </Link>
      {isLogin ? (
        <Link to="/myPage">
          <img src="/assets/user-icon.svg" alt="userIcon" />
        </Link>
      ) : (
        <Link to="/login">
          <img src="/assets/user-icon.svg" alt="userIcon" />
        </Link>
      )}
    </header>
  );
};
