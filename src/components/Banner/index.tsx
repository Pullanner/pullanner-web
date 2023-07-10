type BannerProps = {
  data: {
    title: string;
    description: string;
    backgroundImgSrc: string;
  };
};

export const Banner = ({ data }: BannerProps) => {
  const { title, description, backgroundImgSrc } = data;

  return (
    <div
      className="relative flex h-44 flex-col items-center justify-center p-5 before:absolute before:inset-0 before:bg-black before:opacity-30 before:content-['']"
      style={{
        backgroundImage: `url(${backgroundImgSrc})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative text-lg font-bold">{title}</div>
      <div className="relative p-5 text-sm">{description}</div>
    </div>
  );
};
