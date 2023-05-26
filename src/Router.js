import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage";
import NotFound from "./pages/NotFound";

const routers = [
  { path: "/", element: <HomePage /> },
  { path: "/New-comment-page", element: <NewCommentPage /> },
  { path: "/*", element: <NotFound /> },
];

export default routers;
