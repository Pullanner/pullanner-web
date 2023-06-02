import { accessTokenAtom } from '@/stores/accessTokenAtom';
import { getCookie } from '@/utils/cookie';
import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const LoginLoading = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-2);
  }, [navigate]);

  useEffect(() => {
    const accessTokenValue = getCookie('auth');
    if (accessTokenValue) {
      setAccessToken(accessTokenValue);
    }
  }, [setAccessToken]);

  return (
    <>
      <div className="font-sans text-xl text-white">Loading...</div>
      {accessToken && (
        <button
          type="button"
          onClick={goBack}
          className="font-sans text-sm mt-5 px-5 py-2.5 bg-teal-300 rounded"
        >
          이전 페이지로 이동하기
        </button>
      )}
    </>
  );
};
