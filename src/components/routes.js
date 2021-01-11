import App from "../app";
import NotFoundPage from "./common/not-found-page";
import Login from "./login/login";
import Register from "./register/register";
import Article from "./article/article";
import ArticleCreate from "./article/article_create";

export default [
  {
    ...App,
    routes: [
      {
        ...Login,
        path: "/",
        exact: true,
      },
      {
        ...Login,
        path: "/login",
        exact: true,
      },
      {
        ...Register,
        path: "/register",
        exact: true,
      },
      {
        ...Article,
        path: "/article",
        exact: true,
      },
      {
        ...ArticleCreate,
        path: "/article/create",
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
