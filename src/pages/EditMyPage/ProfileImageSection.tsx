import { useSetAtom } from 'jotai';
import { useState, useRef, type ChangeEvent } from 'react';

import { ProfileImage } from '@/components/ProfileImage';
import { profileImageDataAtom } from '@/stores/atoms/profileImageDataAtom';

type ProfileImageSectionProps = {
  originalProfileImage: string;
};

export const ProfileImageSection = ({ originalProfileImage }: ProfileImageSectionProps) => {
  const [profileImageUrl, setProfileImageUrl] = useState(originalProfileImage);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const setProfileImageData = useSetAtom(profileImageDataAtom);

  const handleProfileImageEditButtonClick = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    if (currentTarget.files) {
      const [file] = currentTarget.files;
      const formData = new FormData();
      formData.append('profileImage', file);
      setProfileImageData(formData);
      const imageUrl = URL.createObjectURL(file);
      setProfileImageUrl(imageUrl);
    }
  };

  return (
    <section className="flex justify-center py-14">
      <div className="relative">
        <ProfileImage imageUrl={profileImageUrl} imageSize="9rem" />
        <button
          type="button"
          className="absolute -bottom-1.5 right-4 h-9 w-9"
          onClick={handleProfileImageEditButtonClick}
        >
          <img src="/assets/images/profile_image_edit_icon.svg" alt="profileImageEditIcon" />
        </button>
      </div>
      <input
        type="file"
        id="profile_image_uploads"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />
    </section>
  );
};
