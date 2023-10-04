import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useMemo } from 'react';

import { uploadProfileImage } from '@/apis/user';
import { ProfileImage } from '@/components/ProfileImage';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { profileImageDataAtom } from '@/stores/atoms/profileImageDataAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

const MODAL_TITLE_TEXT = '이 프로필 이미지로 변경하시겠습니까?';

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
    <AlertDialogPrimitive.Root defaultOpen>
      <AlertDialogPrimitive.Portal>
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
          <AlertDialogPrimitive.Overlay className="flex h-[100%] w-[100%] items-center justify-center bg-black/50 sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
            <AlertDialogPrimitive.Content className="z-50 mx-5 flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-gray-5 text-center">
              <AlertDialogPrimitive.Title className="w-full py-5 text-base font-extrabold">
                {MODAL_TITLE_TEXT}
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="flex justify-center pb-7">
                <ProfileImage imageUrl={profileImage} imageSize="9rem" />
              </AlertDialogPrimitive.Description>
              <div className="flex w-full">
                <AlertDialogPrimitive.Action
                  aria-label="Close"
                  className="flex h-[3.125rem] w-full items-center justify-center gap-y-0.5 bg-gray-4 p-2 text-white"
                  onClick={handleOkButtonClick}
                >
                  <span className="text-sm">네</span>
                </AlertDialogPrimitive.Action>
                <AlertDialogPrimitive.Cancel
                  aria-label="Close"
                  className="flex h-[3.125rem] w-full items-center justify-center gap-y-0.5 bg-primary p-2 text-black"
                  onClick={handleCancelButtonClick}
                >
                  <span className="text-sm">아니오</span>
                </AlertDialogPrimitive.Cancel>
              </div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Overlay>
        </div>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};
