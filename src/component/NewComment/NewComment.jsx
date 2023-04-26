import style from "./newComment.module.css"; 

const NewComment = () => {
  return (
    <div className={style.newComment}>
      <div>
        <label>name</label>
        <input type="text" />
      </div>
      <div>
        <label>email</label>
        <input type="text" />
      </div>
      <div>
        <label>body</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default NewComment;
