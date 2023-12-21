import { Article } from '@/types/article';
import { getTimeDiff } from '@/utils/date';

type ArticleListProps = {
  article: Article;
};

export const ArticleList = ({ article }: ArticleListProps) => {
  const { id, author, authorProfileImage, createdAt, category, title, likes, views, comments } =
    article;
  const categoryBorderColor = category === 'articles' ? 'border-[#168FFF]' : 'border-[#F5D946]';
  const categoryName = category === 'articles' ? '자유게시판' : '스터디모집';

  return (
    <li id={`${id}`} className="border-b-2 border-gray-4 py-2.5">
      <div className="flex items-center gap-x-2.5 text-xs">
        <img className="h-6 w-6 rounded-full" src={authorProfileImage} alt="profile" />
        <span>{author}</span>
        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#D9D9D9" />
        </svg>
        <span>{getTimeDiff(createdAt)}</span>
      </div>
      <p className="py-2.5 font-extrabold">{title}</p>
      <div className="flex justify-between text-xs">
        <div
          className={`${categoryBorderColor} flex h-6 w-20 items-center justify-center rounded-sm border-[0.063rem] bg-gray-3 px-1 py-2.5`}
        >
          {categoryName}
        </div>
        <div className="flex items-center gap-x-2.5">
          <div className="flex gap-x-1">
            <img
              className="h-[1.063rem] w-[1.063rem]"
              src="/assets/images/heart-icon.png"
              alt="heart-icon"
            />
            <span>{likes}</span>
          </div>
          <div className="flex gap-x-1">
            <img
              className="h-[1.063rem] w-[1.063rem]"
              src="/assets/images/comment-icon.png"
              alt="comment-icon"
            />
            <span>{comments.length}</span>
          </div>
          <div className="flex gap-x-1">
            <span>조회</span>
            <span>{views}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
