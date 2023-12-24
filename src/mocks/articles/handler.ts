import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { rest } from 'msw';

import { API_PATH } from '@/constants';
import type { FilterName } from '@/types/article';

import { ARTICLES_DATA } from './data';

import type { DefaultBodyType, ResponseComposition, RestContext, RestRequest } from 'msw';

dayjs.extend(isSameOrBefore);

type ArticleRequestBody = {
  category?: 'articles' | 'studies';
  sort?: 'latest' | 'likes' | 'views';
};

const ARTICLE_COUNT_PER_PAGE = 10;

const getAllArticles = (
  req: RestRequest<ArticleRequestBody>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const params = req.url.searchParams;
  const category = params.get('category');
  const filterName = params.get('sort') as FilterName;
  const pageNumber = params.get('page');
  const searchWord = params.get('search');
  let articleData = ARTICLES_DATA.articles;

  if (category) {
    articleData = articleData.filter((article) => {
      return article.category === category;
    });
  }

  if (filterName) {
    if (filterName === 'latest') {
      articleData.sort((a, b) => {
        return dayjs(a.createdAt).isSameOrBefore(b.createdAt, 's') ? 1 : -1;
      });
    } else {
      articleData.sort((a, b) => {
        return b[filterName] - a[filterName];
      });
    }
  }

  if (pageNumber) {
    const startIndex = (Number(pageNumber) - 1) * ARTICLE_COUNT_PER_PAGE;
    articleData = articleData.slice(startIndex, startIndex + ARTICLE_COUNT_PER_PAGE);
  }

  if (searchWord) {
    articleData = articleData.filter((article) => {
      return article.title.includes(searchWord);
    });
  }

  return res(
    ctx.status(200),
    ctx.json({
      totalArticles: ARTICLES_DATA.totalArticles,
      articles: articleData,
    }),
  );
};

const articleHandler = [rest.get(API_PATH.articles, getAllArticles)];

export default articleHandler;
