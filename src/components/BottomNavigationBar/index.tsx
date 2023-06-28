import { NavLink } from 'react-router-dom';

const NAVLINK_CLASS_VARIANTS = {
  active: 'flex flex-col justify-center items-center text-primary',
  inactive: 'flex flex-col justify-center items-center text-white',
} as const;

const ICON_LINK_DATA = [
  {
    name: 'Roadmap',
    linkPath: '/',
    iconClass: 'icon-roadmap-icon',
  },
  {
    name: 'Jounal',
    linkPath: '/journal',
    iconClass: 'icon-journal-icon',
  },
  {
    name: 'Dashboard',
    linkPath: '/dashboard',
    iconClass: 'icon-dashboard-icon',
  },
  {
    name: 'Community',
    linkPath: '/community',
    iconClass: 'icon-community-icon',
  },
] as const;

type IconLinkData = {
  name: string;
  linkPath: string;
  iconClass: string;
};

type IconLinkProps = {
  iconLinkProps: IconLinkData;
};

const IconLink = ({ iconLinkProps }: IconLinkProps) => {
  const { name, linkPath, iconClass } = iconLinkProps;

  return (
    <NavLink
      to={linkPath}
      className={({ isActive }) => {
        return isActive ? NAVLINK_CLASS_VARIANTS.active : NAVLINK_CLASS_VARIANTS.inactive;
      }}
    >
      <i className={iconClass} />
      <span className="mt-1.5 text-xs font-medium">{name}</span>
    </NavLink>
  );
};

export const BottomNavigationBar = () => {
  return (
    <nav className="flex justify-around w-[100%] h-20 border border-white rounded-t-[20px] bg-black">
      {ICON_LINK_DATA.map((iconLinkData: IconLinkData) => {
        return <IconLink key={iconLinkData.name} iconLinkProps={iconLinkData} />;
      })}
    </nav>
  );
};
