import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      This page doesn't exist. Go to{" "}
      <Link to={"/popular/0"} aria-label="Go to Popular">
        Popular
      </Link>
    </div>
  );
};

export default NotFoundPage;
