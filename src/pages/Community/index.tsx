import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants';

import { CommunityBoard } from './CommunityBoard';
import { CommunityTabs } from './CommunityTabs';
import { SearchBar } from './SearchBar';

export const Community = () => {
  return (
    <>
      <Banner data={BANNER_DATA.community} />
      <div className="px-4 pt-5">
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center justify-between pt-5">
          <CommunityTabs />
          <img
            className="h-5 w-5"
            src="/assets/images/article-edit-icon.png"
            alt="article-edit-icon"
          />
        </div>
        <CommunityBoard />
      </div>
    </>
  );
};
