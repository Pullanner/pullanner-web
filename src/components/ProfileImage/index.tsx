type ProfileImageProps = {
  url: string;
  size: string;
};

export const ProfileImage = ({ url, size }: ProfileImageProps) => {
  return (
    <img
      className="mb-[1.938rem] rounded-full"
      src={url}
      alt="profileImage"
      style={{ width: size, height: size }}
    />
  );
};
