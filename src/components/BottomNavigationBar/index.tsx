import { Link } from 'react-router-dom';

export const BottomNavigationBar = () => {
  return (
    <nav className="absolute bottom-0 flex justify-around w-96 h-20 border border-white rounded-t-[20px] bg-black">
      <Link to="/" className="flex flex-col justify-center items-center">
        <img className="mb-1.5" src="/assets/roadmap-icon.svg" alt="roadmap" />
        <span className="font-sans text-xs font-medium text-white">Roadmap</span>
      </Link>
      <Link to="/journal" className="flex flex-col justify-center items-center">
        <img className="mb-1.5" src="/assets/journal-icon.svg" alt="journal" />
        <span className="font-sans text-xs font-medium text-white">Journal</span>
      </Link>
      <Link to="/dashboard" className="flex flex-col justify-center items-center">
        <img className="mb-1.5" src="/assets/dashboard-icon.svg" alt="dashboard" />
        <span className="font-sans text-xs font-medium text-white">Dashboard</span>
      </Link>
      <Link to="/community" className="flex flex-col justify-center items-center">
        <img className="mb-1.5" src="/assets/community-icon.svg" alt="community" />
        <span className="font-sans text-xs font-medium text-white">Community</span>
      </Link>
    </nav>
  );
};
