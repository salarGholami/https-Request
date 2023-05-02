import { useState } from "react";
import style from "./newComment.module.css";
import axios from "axios";

const NewComment = () => {
  const [comments, setComments] = useState({ name: "", email: "", content: "" });

  const nameHandler = (e) => {
    setComments({ ...comments, name: e.target.value });
  };

  const emailHandler = (e) => {
    setComments({ ...comments, email: e.target.value });
  };

  const contentHandler = (e) => {
    setComments({ ...comments, content: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", {
        ...comments,
        postId: 10,
      })
      .then((res) => console.log(res.data))
      .catch();
  };

  return (
    <div className={style.newComment}>
      <h2>Add a new comments</h2>
      <div className={style.formControl}>
        <label>name :</label>
        <input type="text" onChange={nameHandler} />
      </div>
      <div className={style.formControl}>
        <label>email : </label>
        <input type="text" onChange={emailHandler} />
      </div>
      <div className={style.formControl}>
        <label>body : </label>
        <textarea type="text" onChange={contentHandler} />
      </div>
      <button onClick={postCommentHandler}>add new Comment</button>
    </div>
  );
};

export default NewComment;
