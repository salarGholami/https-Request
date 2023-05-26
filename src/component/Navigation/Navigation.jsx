import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "New-comment-page", to: "/New-comment-page" },
  ];

  return (
    <nav>
      <div className={style.blurNav}></div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) =>
                  navData.isActive ? style.activeLink : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
