import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useMemo } from 'react';

import { uploadProfileImage } from '@/apis/user/uploadProfileImage';
import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, ModalText } from '@/components/modals/Modal/ModalText';
import { ProfileImage } from '@/components/ProfileImage';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { profileImageDataAtom } from '@/stores/atoms/profileImageDataAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

const MODAL_TEXT = '이 프로필 이미지로 변경하시겠습니까?';

export const UploadProfileImageModal = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const profileImageData = useAtomValue(profileImageDataAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const profileImage = useMemo(() => {
    const imageFile = profileImageData.get('profileImage') as File;
    const imageUrl = URL.createObjectURL(imageFile);

    return imageUrl;
  }, [profileImageData]);

  const handleOkButtonClick = () => {
    uploadProfileImage(profileImageData, accessToken, setAccessToken, setModalType);
    setUserData({ ...userData, profileImage });
    setModalType(null);
  };

  const handleCancelButtonClick = () => {
    setModalType(null);
  };

  return (
    <Modal>
      <ModalText textStyle="py-7">
        <MainText>{MODAL_TEXT}</MainText>
      </ModalText>
      <div className="flex justify-center pb-7">
        <ProfileImage imageUrl={profileImage} imageSize="9rem" />
      </div>

      <div className="flex w-full">
        <ModalButton text="네" handler={handleOkButtonClick} />
        <ModalButton text="아니오" handler={handleCancelButtonClick} isPrimary />
      </div>
    </Modal>
  );
};
