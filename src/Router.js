import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage";
import NotFound from "./pages/NotFound";
import FullComponent from "../src/component/FullComment/FullComment";

const routers = [
  { path: "/", element: <HomePage /> },
  { path: "/comment/:id", element: <FullComponent /> },
  { path: "/New-comment-page", element: <NewCommentPage /> },
  { path: "/*", element: <NotFound /> },
];

export default routers;
