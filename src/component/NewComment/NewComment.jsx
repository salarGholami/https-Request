import { useState } from "react";
import style from "./newComment.module.css";
import http from "../../services/httpService";


const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await http.post("/comments", {
        ...comment,
        postId: 10,
      });
      const { data } = await http.get("/comments");
      setComments(data);
    } catch (error) {}
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
