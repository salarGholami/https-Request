import { useEffect, useState } from "react";
import style from "./fullComment.module.css";
import axios from "axios";

const FullComment = ({ commentId, setComments, setSelectId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = await axios.get("http://localhost:3001/comments");
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
