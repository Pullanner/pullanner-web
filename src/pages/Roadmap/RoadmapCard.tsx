import { Link } from 'react-router-dom';

type RoadmapCardProps = {
  color: string;
  id: number;
  imageSrc: string;
  description: string;
  title: string;
};

export const RoadmapCard = ({ color, id, imageSrc, description, title }: RoadmapCardProps) => {
  return (
    <div className="rounded-xl" style={{ backgroundColor: color }}>
      <Link to={`/roadmap/${id}`} className="relative">
        <img src={imageSrc} alt={description} />
        <p
          className="absolute bottom-2 right-2 rounded-full bg-[#ffffffb3] px-1 text-base tracking-widest text-black drop-shadow-lg"
          style={{
            fontFamily: 'Annie Use Your Telescope, cursive',
            textShadow: '0.5px 0.5px 0.5px black',
          }}
        >
          {title}
        </p>
      </Link>
    </div>
  );
};
