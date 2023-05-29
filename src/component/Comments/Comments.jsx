import { useEffect } from "react";
import Comment from "./Comment/Comment";
import style from "./comments.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { getAllComemnts } from "../../services/getAllCommentsServices";
import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await getAllComemnts();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComment();
  }, []);

  const renderComments = () => {
    let renderValue = <p>Loading....</p>;

    if (error) {
      renderValue = <p>data is not fetching</p>;
      toast.error("add data is failed");
    }

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment name={c.name} email={c.email} />
        </Link>
      ));
    }

    return renderValue;
  };

  return <section className={style.section}>{renderComments()}</section>;
};

export default CommentsList;
