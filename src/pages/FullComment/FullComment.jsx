import { useEffect, useState } from "react";
import style from "./fullComment.module.css";
import { deleteComment } from "../../services/deleteCommentServices";
import { getOneComment } from "../../services/getOneCommentServices";
import { useNavigate, useParams } from "react-router-dom";

const FullComment = () => {
  const [comment, setComment] = useState(null);

  const params = useParams();
  const commentId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      navigate("/");
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
