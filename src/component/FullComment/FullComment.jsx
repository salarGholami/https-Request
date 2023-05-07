import { useEffect, useState } from "react";
import style from "./fullComment.module.css";
import http from "../../services/httpService";

const FullComment = ({ commentId, setComments, setSelectId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      http
        .get(`/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await http.delete(`/comments/${commentId}`);
      const { data } = await http.get("/comments");
      setComments(data);
      setSelectId(null);
      setComment(null);
    } catch (error) {}
  };

  let commentDetial = <p>please select a comment</p>;

  if (commentId) commentDetial = <p>loading...</p>;

  if (comment) {
    commentDetial = (
      <div className={style.fullComment}>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button className={style.buttonDelete} onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );
  }
  return commentDetial;
};

export default FullComment;
