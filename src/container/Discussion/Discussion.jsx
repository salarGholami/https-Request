import { useEffect } from "react";
import Comment from "../../component/Comment/Comment";
import style from "./discussion.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { getAllComemnts } from "../../services/getAllCommentsServices";
import { Link } from "react-router-dom";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectId, setSelectId] = useState(null);
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

  const seletCommentHandler = (id) => {
    setSelectId(id);
  };

  const renderComments = () => {
    let renderValue = <p>Loading....</p>;

    if (error) {
      renderValue = <p>data is not fetching</p>;
      toast.error("add data is failed");
    }

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment
            key={c.id}
            name={c.name}
            email={c.email}
            body={c.body}
            onClick={() => seletCommentHandler(c.id)}
          />
        </Link>
      ));
    }

    return renderValue;
  };

  return (
    <main>
      <section className={style.section}>{renderComments()}</section>
    </main>
  );
};

export default Discussion;
