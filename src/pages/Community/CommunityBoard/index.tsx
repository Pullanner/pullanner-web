import { useAtom, useSetAtom } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { useGetAllArticles } from '@/lib/react-query/useArticles';
import { ArticleList } from '@/pages/Community/ArticleList';
import { FilterDropdown } from '@/pages/Community/FilterDropdown';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

export const CommunityBoard = () => {
  const [searchParams, _] = useSearchParams();
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { data: articleData } = useGetAllArticles(
    accessToken,
    setAccessToken,
    setModalType,
    searchParams,
  );

  if (!articleData) {
    return null;
  }

  const { articles } = articleData;

  return (
    <section>
      <div className="flex justify-end">
        <FilterDropdown />
      </div>
      <ul className="border-t-2 border-gray-4">
        {articles.map((article) => {
          return <ArticleList key={article.id} article={article} />;
        })}
      </ul>
    </section>
  );
};
