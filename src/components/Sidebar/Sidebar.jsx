import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const menu = [
  {
    title: "Popular",
    link: "/popular/0",
  },
  {
    title: "Films",
    link: "/films/0",
  },
  {
    title: "Cartoons",
    link: "/cartoons/0",
  },
  {
    title: "My list",
    link: "/myList/0",
  },
];

const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
  return (
    <div
      className={styles.sidebar}
      style={{ width: isSidebarShow ? "18%" : "10%" }}
    >
      <button
        onClick={() => {
          setIsSidebarShow(!isSidebarShow);
        }}
        aria-label="Show or hide Sidebar"
      >
        <i className={`bx bx-${isSidebarShow ? "x" : "menu-alt-left"}`}></i>
      </button>
      <ul className={isSidebarShow ? styles.show : ""}>
        {menu.map((item) => (
          <li key={item.title}>
            <Link to={item.link} aria-label={item.title}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
