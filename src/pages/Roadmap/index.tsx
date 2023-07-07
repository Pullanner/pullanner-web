import { Banner } from '@/components/Banner';
import { BANNER_TEXT, ROADMAP_DATA } from '@/constants';

import { RoadmapCard } from './RoadmapCard';

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
