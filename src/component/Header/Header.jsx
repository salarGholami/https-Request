import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header> 
        <Navigation />
        <div className={style.headerContainer}>
          <h2>This is header</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
