import { Banner } from '@/components/Banner';
import { BANNER_TEXT } from '@/constants/bannerText';

export const Roadmap = () => {
  return (
    <>
      <Banner
        title={BANNER_TEXT.roadmap.title}
        description={BANNER_TEXT.roadmap.description}
        src="/assets/images/roadmap-banner.svg"
      />
      <div>Roadmap</div>
    </>
  );
};
