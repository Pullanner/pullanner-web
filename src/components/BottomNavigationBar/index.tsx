import { NavLink } from 'react-router-dom';

const NAVLINK_CLASS_VARIANTS = {
  active: 'flex flex-col justify-center items-center text-teal-300',
  inactive: 'flex flex-col justify-center items-center text-white',
} as const;

export const BottomNavigationBar = () => {
  return (
    <nav className="absolute bottom-0 flex justify-around w-96 h-20 border border-white rounded-t-[20px] bg-black">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? NAVLINK_CLASS_VARIANTS.active : NAVLINK_CLASS_VARIANTS.inactive;
        }}
      >
        <i className="icon-roadmap-icon" />
        <span className="mt-1.5 font-sans text-xs font-medium">Roadmap</span>
      </NavLink>
      <NavLink
        to="/journal"
        className={({ isActive }) => {
          return isActive ? NAVLINK_CLASS_VARIANTS.active : NAVLINK_CLASS_VARIANTS.inactive;
        }}
      >
        <i className="icon-journal-icon" />
        <span className="mt-1.5 font-sans text-xs font-medium">Journal</span>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => {
          return isActive ? NAVLINK_CLASS_VARIANTS.active : NAVLINK_CLASS_VARIANTS.inactive;
        }}
      >
        <i className="icon-dashboard-icon" />
        <span className="mt-1.5 font-sans text-xs font-medium">Dashboard</span>
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive }) => {
          return isActive ? NAVLINK_CLASS_VARIANTS.active : NAVLINK_CLASS_VARIANTS.inactive;
        }}
      >
        <i className="icon-community-icon" />
        <span className="mt-1.5 font-sans text-xs font-medium">Community</span>
      </NavLink>
    </nav>
  );
};
