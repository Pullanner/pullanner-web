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
      className="flex flex-col justify-center items-center h-44 p-5 relative before:content-[''] before:bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-30"
      style={{
        backgroundImage: `url(${backgroundImgSrc})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="font-bold text-lg relative">{title}</div>
      <div className="text-sm p-5 relative">{description}</div>
    </div>
  );
};
