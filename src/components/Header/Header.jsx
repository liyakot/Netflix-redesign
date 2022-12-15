import Search from "../Header/Search/Search";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Button from "../Main/Button/Button";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.header_logo}>
          <img
            src="https://cdn.svgporn.com/logos/netflix.svg"
            alt="Netflix logo"
            height="35"
            width="112"
          />
        </a>
        <Search />
      </div>
      <Link to={'/Form'}>
      <Button feature='subs'
          content={
            <span>
              Subscription request
              <i className="bx bx-send"></i>
            </span>
          }
        />
      </Link>
    </div>
  );
};

export default Header;
