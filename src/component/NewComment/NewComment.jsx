import { useState } from "react";
import style from "./newComment.module.css";
import axios from "axios";

const NewComment = () => {
  const [comments, setComments] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("http://localhost:3001/comments", {
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
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div className={style.formControl}>
        <label>email : </label>
        <input type="text" onChange={changeHandler} name="email" />
      </div>
      <div className={style.formControl}>
        <label>body : </label>
        <textarea type="text" onChange={changeHandler} name="content" />
      </div>
      <button onClick={postCommentHandler}>add new Comment</button>
    </div>
  );
};

export default NewComment;
