import { Link, useParams } from 'react-router-dom';

import { Rate } from '@/components/Rate';
import { ROADMAP_DATA } from '@/constants/roadmap';

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
    <div className="p-3 w-88 flex flex-col items-center">
      <div className="rounded-xl mb-5" style={{ backgroundColor: color }}>
        <img src={imageSrc} alt={description} />
      </div>
      <h1 className="text-xl font-bold mb-1.5">{title}</h1>
      <div className="flex mb-2">
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
