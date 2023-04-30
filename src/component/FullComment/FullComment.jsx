import { useEffect, useState } from "react";
import style from "./fullComment.module.css";
import axios from "axios";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetial = <p>please select a comment</p>;

  if (commentId) commentDetial = <p>loading...</p>;

  if (comment) {
    commentDetial = (
      <div className={style.fullComment}>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    );
  }
  return commentDetial;
};

export default FullComment;
