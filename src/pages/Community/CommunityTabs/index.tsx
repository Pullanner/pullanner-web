import { useSearchParams, NavLink } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { COMMUNITY_TABS, COMMUNITY_TAB_STYLE } from '@/pages/Community/constant';

export const CommunityTabs = () => {
  const [searchParams, _] = useSearchParams();

  return (
    <div>
      {COMMUNITY_TABS.map(({ name, category }) => {
        const categoryParams = searchParams.get('category') || 'total';

        return (
          <NavLink
            key={name}
            id={category}
            to={
              category === 'total'
                ? ROUTE_PATH.community
                : `${ROUTE_PATH.community}?category=${category}`
            }
            className={({ isActive }) => {
              return isActive && categoryParams === category
                ? COMMUNITY_TAB_STYLE.active
                : COMMUNITY_TAB_STYLE.inActive;
            }}
          >
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};
