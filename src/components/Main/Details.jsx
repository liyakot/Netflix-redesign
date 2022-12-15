import styles from "./Main.module.scss";
import Button from "../Main/Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Details = ({ movie }) => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const [isInMyList, setIsInMyList] = useState(
    JSON.parse(localStorage.getItem(movie.name)) || false
  );

  const addToMyList = () => {
    localStorage.setItem(movie.name, JSON.stringify(!isInMyList));
    setIsInMyList(!isInMyList);
  };
  return (
    <div
      className={`${styles.about_movie} ${styles.details}`}
      style={{ zIndex: isActiveModal ? 5 : 3 }}
    >
      {
        <img
          src={movie.logo}
          alt={movie.name}
          className={styles.about_movie_logo}
        />
      }
      <div className={styles.description}>
        <p>
          <span className={styles.title}>Genres:</span> {movie.genres}
        </p>
        <div>
          <span className={styles.title}>Starring:</span>
          <ul>
            {movie.starring.map((actor, key) => (
              <li key={key}>{actor}</li>
            ))}
          </ul>
        </div>
        {movie.creators ? (
          <p>
            <span className={styles.title}>Creators:</span> {movie.creators}
          </p>
        ) : (
          <p></p>
        )}
      </div>

      <div className={styles.buttons}>
        <Button
          func={() => setIsActiveModal(true)}
          content={
            <span>
              <i className="bx bx-play"></i>
              Play
            </span>
          }
        />
        <Button
          func={() => addToMyList()}
          content={
            <span>
              <i
                className={`bx bx-${isInMyList === true ? "check" : "plus"}`}
              ></i>
              My list
            </span>
          }
        />
      </div>
      <Modal
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
        link={movie.link}
      />
    </div>
  );
};

export default Details;
