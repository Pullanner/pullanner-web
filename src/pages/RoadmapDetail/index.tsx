import { Link, useParams } from 'react-router-dom';

import { Rate } from '@/components/Rate';
import { ROADMAP_DATA } from '@/constants';

import { RoadmapNav } from './RoadmapNav';

export const RoadmapDetail = () => {
  const { step } = useParams();
  const stepData = ROADMAP_DATA.find((v) => {
    return v.id === Number(step);
  });

  if (!stepData) {
    return null;
  }

  const { title, imageSrc, description, color, difficulty, link } = stepData;

  return (
    <div className="flex flex-col items-center px-3">
      <RoadmapNav />
      <div className="mb-5 rounded-xl" style={{ backgroundColor: color }}>
        <img src={imageSrc} alt={description} />
      </div>
      <h1 className="mb-1.5 text-xl font-bold">{title}</h1>
      <div className="mb-2 flex">
        <span className="mr-2">난이도</span>
        <Rate rateValue={difficulty} color={color} />
      </div>
      <Link to={link} target="_blank" className="underline decoration-white">
        👀 영상 보러 가기
      </Link>
      <p className="p-2">{description}</p>
    </div>
  );
};
