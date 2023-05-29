import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import FullComponent from "./pages/FullComment/FullComment";
import NewComment from "./pages/NewComment/NewComment";

const routers = [
  { path: "/", element: <HomePage /> },
  { path: "/comment/:id", element: <FullComponent /> },
  { path: "/New-comment-page", element: <NewComment /> },
  { path: "/*", element: <NotFound /> },
];

export default routers;
