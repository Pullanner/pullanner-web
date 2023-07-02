import { Banner } from '@/components/Banner';
import { RoadmapCard } from '@/components/RoadmapCard';
import { BANNER_TEXT } from '@/constants/bannerText';
import { ROADMAP_DATA } from '@/constants/roadmap';

export const Roadmap = () => {
  return (
    <>
      <Banner
        title={BANNER_TEXT.roadmap.title}
        description={BANNER_TEXT.roadmap.description}
        src="/assets/images/roadmap-banner.svg"
      />
      <div className="grid grid-cols-2 gap-3 m-3">
        {ROADMAP_DATA.map(({ color, imageSrc, id, description }) => {
          return (
            <RoadmapCard color={color} imageSrc={imageSrc} id={id} description={description} />
          );
        })}
      </div>
    </>
  );
};