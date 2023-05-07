import { useEffect } from "react";
import Comment from "../../component/Comment/Comment";
import FullComment from "../../component/FullComment/FullComment";
import NewComment from "../../component/NewComment/NewComment";
import style from "./discussion.module.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectId, setSelectId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
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
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          body={c.body}
          onClick={() => seletCommentHandler(c.id)}
        />
      ));
    }

    return renderValue;
  };

  return (
    <main>
      <section className={style.section}>{renderComments()}</section>
      <section className={style.section}>
        <FullComment commentId={selectId} setComments={setComments} setSelectId={setSelectId}/>
      </section>
      <section className={style.section}>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
