import { Banner } from '@/components/Banner';
import { BANNER_DATA, ROADMAP_DATA } from '@/constants';

import { RoadmapCard } from './RoadmapCard';

export const Roadmap = () => {
  return (
    <>
      <Banner data={BANNER_DATA.roadmap} />
      <div className="m-3 grid grid-cols-2 gap-3">
        {ROADMAP_DATA.map(({ color, imageSrc, id, description, name }) => {
          return (
            <RoadmapCard
              key={id}
              color={color}
              imageSrc={imageSrc}
              id={id}
              description={description}
              name={name}
            />
          );
        })}
      </div>
    </>
  );
};
