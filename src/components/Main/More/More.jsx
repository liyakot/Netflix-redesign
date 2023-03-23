import styles from "./More.module.scss";
import { Link } from "react-router-dom";

const More = ({ movies, specify }) => {
  return (
    <div className={styles.more}>
      <div className={styles.title}>
        <span>More Like This</span>
        <span className={styles.title_all}>
          <Link to={`/All/${specify}`} aria-label="See All">
            See All <i className="bx bx-chevron-right"></i>
          </Link>
        </span>
      </div>
      <ul className={styles.list}>
        {movies.map((movie, id) => (
          <li key={id} className={styles.list_item}>
            <Link to={`/${specify}/${id}`} aria-label={movie.name}>
              <img src={movie.keyImage} alt={movie.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default More;
