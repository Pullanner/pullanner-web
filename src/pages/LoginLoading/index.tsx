import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { usePreviousPage } from '@/hooks/usePreviuosPage';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'auth';
const PREVIOUS_PAGE_NUMBER = -2;

export const LoginLoading = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const setLoginState = useSetRecoilState(loginStateAtom);
  const handleBackButtonClick = usePreviousPage(PREVIOUS_PAGE_NUMBER);

  useEffect(() => {
    const accessTokenValue = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessTokenValue?.length) {
      setAccessToken(accessTokenValue);
      setLoginState(true);
    }
  }, [setAccessToken, setLoginState]);

  return (
    <>
      <div className="font-sans text-xl text-white">Loading...</div>
      {accessToken && (
        <button
          type="button"
          onClick={handleBackButtonClick}
          className="font-sans text-sm mt-5 px-5 py-2.5 bg-teal-300 rounded"
        >
          이전 페이지로 이동하기
        </button>
      )}
    </>
  );
};
