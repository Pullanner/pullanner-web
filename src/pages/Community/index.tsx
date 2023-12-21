import { Banner } from '@/components/Banner';
import { BANNER_DATA } from '@/constants';

import { CommunityBoard } from './CommunityBoard';

export const Community = () => {
  return (
    <>
      <Banner data={BANNER_DATA.community} />
      <div className="px-4 pt-5">
        <CommunityBoard />
      </div>
    </>
  );
};
