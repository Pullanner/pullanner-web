import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { usePreviousPage } from '@/hooks/usePreviousPage';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'auth';
const PREVIOUS_PAGE_NUMBER = -2;

export const LoginLoading = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
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
      <div className="text-xl">Loading...</div>
      {accessToken && (
        <button
          type="button"
          onClick={handleBackButtonClick}
          className="mt-5 rounded bg-teal-300 px-5 py-2.5 text-sm"
        >
          이전 페이지로 이동하기
        </button>
      )}
    </>
  );
};
