import { Link } from 'react-router-dom';

type RoadmapCardProps = {
  color: string;
  id: number;
  imageSrc: string;
  description: string;
  name: string;
};

export const RoadmapCard = ({ color, id, imageSrc, description, name }: RoadmapCardProps) => {
  return (
    <div className="rounded-xl" style={{ backgroundColor: color }}>
      <Link to={`/roadmap/${id}`} className="relative">
        <img src={imageSrc} alt={description} />
        <p
          className="absolute bottom-2 right-2 rounded-full px-1 font-annie text-base tracking-widest text-black"
          style={{
            textShadow: '0.5px 0.5px 0.5px black',
            backgroundColor: color,
          }}
        >
          {name}
        </p>
      </Link>
    </div>
  );
};
