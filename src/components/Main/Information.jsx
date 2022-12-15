import styles from "./Main.module.scss";
import Button from "../Main/Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Information = ({ movie }) => {
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
      className={styles.about_movie}
      id="frame"
      style={{ zIndex: isActiveModal ? 5 : 3 }}
    >
      <img
        src={movie.logo}
        alt={movie.name}
        className={styles.about_movie_logo}
      />
      <div className={styles.additional}>
        <span>{movie.year}</span>
        <span className={styles.limit}>{movie.limitAge}</span>
        <span>{movie.rating}</span>
        <span>{movie.duration}</span>
      </div>

      <div className={styles.description}>{movie.description}</div>

      <div className={styles.buttons}>
        <Button
          func={() => {
            setIsActiveModal(true);
          }}
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
              {" "}
              <i
                className={`bx bx-${
                  JSON.parse(localStorage.getItem(movie.name)) === true
                    ? "check"
                    : "plus"
                }`}
              ></i>{" "}
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

export default Information;
