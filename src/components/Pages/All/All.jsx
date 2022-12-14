import styles from "./All.module.scss";
import { DATA } from "../../../data";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

const All = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  /* id is a specify, not a number */
  const { id } = useParams();
  let filteredData = DATA.filter((item) =>
    id === "myList"
      ? JSON.parse(localStorage.getItem(item.name)) === true
      : item.category.includes(id)
  );

  return (
    <div>
      <Header />
    <div className={styles.full_page}>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div
        className={styles.all}
        style={{
          width: isSidebarShow ? "80%" : "88%",
        }}
      >
        <ul className={styles.list} /* style={{
          width: isSidebarShow ? "100%" : "100%",
        }} */>
          {filteredData.map((movie, key) => (
            <li key={key} className={styles.list_item}>
              <Link to={`/${id}/${key}`}>
                <img src={movie.keyImage} alt={movie.name} />
                <p className={styles.caption}>{movie.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default All;
