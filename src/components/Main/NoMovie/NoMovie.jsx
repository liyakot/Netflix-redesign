import styles from "./NoMovie.module.scss";

const NoMovie = () => {
  return (
    <div className={styles.no_movie}>
      <i className="bx bx-error-circle"></i>
      <p>
        Oops, no movie added to <span className={styles.my_list}> My List</span>
      </p>
    </div>
  );
};

export default NoMovie;
