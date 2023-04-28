import style from "./fullComment.module.css";

const FullComment = ({commentId}) => {
  return (
    <div className={style.fullComment}>
      <p>name</p>
      <p>email</p>
      <p>body</p>
    </div>
  );
};

export default FullComment;
