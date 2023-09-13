import { ProfileImage } from '@/components/ProfileImage';

type UserSectionProps = {
  profileImage: string;
  nickname: string;
  email: string;
};

export const UserSection = ({ profileImage, nickname, email }: UserSectionProps) => {
  return (
    <section className="flex items-center py-10 pl-5">
      <ProfileImage imageUrl={profileImage} imageSize="6rem" />
      <div className="ml-6 flex flex-col gap-y-3">
        <span className="inline-block text-base font-extrabold">{nickname}</span>
        <span className="inline-block text-sm text-gray-400">{email}</span>
        <span className="text-sm text-[#666666]">2023.08.11 가입</span>
      </div>
    </section>
  );
};
