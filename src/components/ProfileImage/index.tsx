type ProfileImageProps = {
  imageUrl: string;
  imageSize: string;
};

export const ProfileImage = ({ imageUrl, imageSize }: ProfileImageProps) => {
  return (
    <img
      className="rounded-full"
      src={imageUrl}
      alt="profileImage"
      style={{ width: imageSize, height: imageSize }}
    />
  );
};
