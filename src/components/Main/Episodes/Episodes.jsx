import styles from "./Episodes.module.scss";
import Button from "../Button/Button";
import { useState } from "react";

const Episodes = ({ movie, size }) => {
  const [isSelectedSeason, setIsSelectedSeason] = useState(0);

  let width = 18;
  let count = 3;
  let position = 0;
  

  const scroll = (e) => {
    let list = document.querySelector("#list");
    if (e.target.id === "left" || e.target.id === "leftContent") {
      position += width * count;
      position = Math.min(position, 0);
      list.style.marginLeft = position + "rem";
    } else {
      position -= width * count;
      position = Math.max(
        position,
        -width * (movie.episodes[isSelectedSeason].length - 2.5)
      );
      list.style.marginLeft = position + "rem";
    }
  };

  return (
    <div className={styles.episodes}>
      <select
        className={styles.season}
        onChange={(e) => {
          setIsSelectedSeason(e.target.value);
          document.querySelector("#list").style.marginLeft = 0;
        }}
      >
        {movie.episodes.map((season, key) => (
          <option value={key} className={styles.season_option} key={key}>
            {`Season ${key + 1}`} 
          </option>
        ))}
      </select>

      <div className={styles.episodes_container}>
        <Button
          id="left"
          feature="episode"
          func={scroll}
          content={<i id="leftContent" className="bx bx-chevron-left"></i>}
        />
        <div className={styles.gallery} style={{ width: size }}>
          <ul className={styles.list} id="list">
            {movie.episodes[isSelectedSeason].map((episode, key) => (
              <li id={key} key={key} className={styles.list_item}>
                <img src={episode} alt="Episode " />
                <span className={styles.caption}>
                  {movie.episodesTitle[isSelectedSeason][key]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          id="right"
          feature="episode"
          func={scroll}
          content={<i id="rightContent" className="bx bx-chevron-right"></i>}
        />
      </div>
    </div>
  );
};

export default Episodes;
