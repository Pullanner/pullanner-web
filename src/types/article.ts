type Comment = {
  id: number;
  commenter: string;
  commenterProfileImage: string;
  createdAt: string;
  likes: number;
  replies?: Omit<Comment, 'reply'>[];
};

export type Article = {
  id: number;
  author: string;
  authorProfileImage: string;
  createdAt: string;
  category: 'articles' | 'studies';
  title: string;
  content: string;
  imageUrl: string;
  likes: number;
  views: number;
  comments: Comment[];
};

export type ArticleData = {
  totalArticles: number;
  articles: Article[];
};

export type Category = 'total' | 'articles' | 'studies';

export type FilterName = 'latest' | 'likes' | 'views';
