import styles from "./Search.module.scss";
import { DATA } from "../../../data";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showMovieList, setShowMovieList] = useState(false);
  let listRef = useRef();

  useEffect(() => {
    let closeDropDown = (e) => {
      if (!listRef.current.contains(e.target)) {
        setShowMovieList(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  });

  return (
    <div className={styles.search} ref={listRef}>
      <div className={styles.query}>
        <input id="input"
          type="text"
          placeholder="I`m searching for..."
          onChange={(e) => {
            setQuery(e.target.value);
            setShowMovieList(true);
          }}
        />
        <i className="bx bx-search"></i>
      </div>
      <ul
        className={styles.list}
        style={{ display: showMovieList ? "block" : "none" }}
        onClick={() => {
          setShowMovieList(false);
          console.log(document.querySelector('#input').value = '')
        }}
      >
        {DATA.filter((movie) => movie.name.toLowerCase().includes(query)).map(
          (movie, id) => (
            <Link key={id}
              to={`/popular/${DATA.findIndex(
                (item) => item.name === movie.name
              )}`}
            ><li className={styles.list_item}>
                <img className={styles.image} src={movie.keyImage} alt={movie.name} />
                <span>{movie.name}</span>
              </li>
            </Link>

          )
        )}
      </ul>


    </div>
  );
};

export default Search;
