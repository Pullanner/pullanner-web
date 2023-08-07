import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import {
  Root,
  ErrorPage,
  Login,
  LoginLoading,
  MyPage,
  Roadmap,
  RoadmapDetail,
  EditMyPage,
  Plan,
  rootLoader,
  Summary,
  Community,
  Setup,
  SetNickname,
} from '@/pages';
import { MyPostList, MyCommentList } from '@/pages/MyPage/TabSection';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.root,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: rootLoader,
      },
      {
        path: ROUTE_PATH.login,
        element: <Login />,
      },
      {
        path: ROUTE_PATH.callback,
        element: <LoginLoading />,
      },
      {
        path: ROUTE_PATH.myPage.index,
        element: <MyPage />,
        children: [
          {
            index: true,
            element: <MyPostList />,
          },
          {
            path: ROUTE_PATH.myPage.comment,
            element: <MyCommentList />,
          },
        ],
      },
      {
        path: ROUTE_PATH.roadmap.index,
        element: <Roadmap />,
      },
      {
        path: ROUTE_PATH.roadmap.detail,
        element: <RoadmapDetail />,
      },
      {
        path: ROUTE_PATH.myPage.edit,
        element: <EditMyPage />,
      },
      {
        path: ROUTE_PATH.plan.index,
        element: <Plan />,
      },
      {
        path: ROUTE_PATH.summary,
        element: <Summary />,
      },
      {
        path: ROUTE_PATH.community,
        element: <Community />,
      },
    ],
  },
  {
    path: ROUTE_PATH.setup.index,
    element: <Setup />,
    children: [
      {
        path: ROUTE_PATH.setup.setNickname,
        element: <SetNickname />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
