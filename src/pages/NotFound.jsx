import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>this page not found</p>
      <Link to="/">go to Home page</Link>
    </>
  );
};

export default NotFound;
