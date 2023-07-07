import { NavLink } from 'react-router-dom';

import { ROADMAP_DATA } from '@/constants';

const activeStyle = {
  border: '3px solid white',
} as const;

export const RoadmapNav = () => {
  return (
    <div className="flex items-center gap-4 p-2 mb-1">
      {ROADMAP_DATA.map(({ color: linkColor, id }) => {
        return (
          <NavLink
            to={`/roadmap/${id}`}
            className="rounded-full"
            style={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: linkColor }} />
          </NavLink>
        );
      })}
    </div>
  );
};
