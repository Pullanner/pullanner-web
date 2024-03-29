import { ProfileImage } from '@/components/ProfileImage';
import { parseDateIntoYearMonthDay } from '@/utils/date';

type UserSectionProps = {
  profileImage: string;
  nickname: string;
  email: string;
  joinDate: string;
};

export const UserSection = ({ profileImage, nickname, email, joinDate }: UserSectionProps) => {
  const { year, month, day } = parseDateIntoYearMonthDay(joinDate);

  return (
    <section className="flex items-center py-10 pl-5">
      <ProfileImage imageUrl={profileImage} imageSize="6rem" />
      <div className="ml-6 flex flex-col gap-y-3">
        <span className="inline-block text-base font-extrabold">{nickname}</span>
        <span className="inline-block text-sm text-gray-400">{email}</span>
        <span className="text-sm text-gray-3">{`${year}.${month}.${day} 가입`}</span>
      </div>
    </section>
  );
};
