import { Link } from 'react-router-dom';

type RoadmapCardProps = {
  color: string;
  id: number;
  imageSrc: string;
  description: string;
};

export const RoadmapCard = ({ color, id, imageSrc, description }: RoadmapCardProps) => {
  return (
    <div className="rounded-xl" style={{ backgroundColor: color }}>
      <Link to={`/roadmap/${id}`}>
        <img src={imageSrc} alt={description} />
      </Link>
    </div>
  );
};
