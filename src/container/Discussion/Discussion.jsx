import { useEffect } from "react";
import Comment from "../../component/Comment/Comment";
import FullComment from "../../component/FullComment/FullComment";
import NewComment from "../../component/NewComment/NewComment";
import style from "./discussion.module.css";
import axios from "axios";
import { useState } from "react";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectId, setSelectId] = useState(null);

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);

  const seletCommentHandler = (id) => {
    setSelectId(id);
  };

  return (
    <main>
      <section className={style.section}>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              body={c.body}
              onClick={() => seletCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
      <section className={style.section}>
        <FullComment commentId={selectId} />
      </section>
      <section className={style.section}>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
