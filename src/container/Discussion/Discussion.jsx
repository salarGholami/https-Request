import Comment from "../../component/Comment/Comment";
import FullComment from "../../component/FullComment/FullComment";
import NewComment from "../../component/NewComment/NewComment";
import style from "./discussion.module.css";

const Discussion = () => {
  return (
    <main>
      <section className={style.section}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </section>
      <section className={style.section}>
        <FullComment />
      </section>
      <section className={style.section}>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
