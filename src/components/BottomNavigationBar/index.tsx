import { NavLink } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';

const NAVLINK_CLASS_VARIANTS = {
  active: 'flex flex-col justify-center items-center text-primary min-w-[70px]',
  inactive: 'flex flex-col justify-center items-center min-w-[70px]',
} as const;

const ICON_LINK_DATA = [
  {
    name: 'Roadmap',
    linkPath: ROUTE_PATH.roadmap.index,
    iconClass: 'icon-roadmap-icon',
  },
  {
    name: 'Plan',
    linkPath: ROUTE_PATH.plan.index,
    iconClass: 'icon-journal-icon',
  },
  {
    name: 'Summary',
    linkPath: ROUTE_PATH.summary,
    iconClass: 'icon-dashboard-icon',
  },
  {
    name: 'Community',
    linkPath: ROUTE_PATH.community,
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
    <nav className="flex h-16 w-[100%] justify-evenly rounded-t-[20px] border-t-[1px] border-gray-500 bg-black">
      {ICON_LINK_DATA.map((iconLinkData: IconLinkData) => {
        return <IconLink key={iconLinkData.name} iconLinkProps={iconLinkData} />;
      })}
    </nav>
  );
};
