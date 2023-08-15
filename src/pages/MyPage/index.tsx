import { useSetAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DimmedButton } from '@/components/buttons/DimmedButton';
import { Modal } from '@/components/Modal';
import { ModalButton } from '@/components/Modal/ModalButton';
import { SubText } from '@/components/Modal/ModalText';
import { API_PATH, ROUTE_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { ProgressSection } from './ProgressSection';
import { TabSection } from './TabSection';
import { UserSection } from './UserSection';

const MODAL_TEXT = '정말 로그아웃하시겠습니까?';

export const MyPage = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogoutButtonClick = () => {
    setShowModal(true);
  };

  const handleOkButtonClick = () => {
    if (import.meta.env.PROD) {
      axiosInstance.delete(API_PATH.token);
    }
    setLoginState(false);
    setAccessToken('');
    setUserData(null);
    navigate(ROUTE_PATH.root);
  };

  const handleCancleButtonClick = () => {
    setShowModal(false);
  };

  // TODO: 추후에 로딩페이지로 교체하기
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { profileImage, nickname, email, journalCount, level } = userData;

  return (
    <div>
      <UserSection profileImage={profileImage} nickname={nickname} email={email} />
      <ProgressSection journalCount={journalCount} level={level} />
      <TabSection />
      <div className="flex justify-center">
        <DimmedButton name="로그아웃" handler={handleLogoutButtonClick} />
      </div>
      {showModal && (
        <Modal>
          <SubText textStyle="p-5">{MODAL_TEXT}</SubText>
          <div className="mb-5 flex w-full justify-around">
            <ModalButton text="네" handler={handleOkButtonClick} />
            <ModalButton text="아니오" handler={handleCancleButtonClick} isPrimary />
          </div>
        </Modal>
      )}
    </div>
  );
};
