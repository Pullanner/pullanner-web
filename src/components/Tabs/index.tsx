import { NavLink } from 'react-router-dom';

type TabData = {
  name: string;
  path: string;
};

type TabState = 'active' | 'inActive';

type TabStyleType = {
  [key in TabState]: string;
};

type TabsProps = {
  tabData: TabData[];
  tabStyle: TabStyleType;
};

export const Tabs = ({ tabData, tabStyle }: TabsProps) => {
  return (
    <>
      {tabData.map(({ name, path }) => {
        return (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) => {
              return isActive ? tabStyle.active : tabStyle.inActive;
            }}
            end
          >
            {name}
          </NavLink>
        );
      })}
    </>
  );
};
