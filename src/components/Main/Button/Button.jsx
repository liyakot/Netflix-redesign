import styles from "../Button/Button.module.scss";

const Button = ({ func, content, feature, id }) => {
  return (
    <button
      id={id}
      className={
        feature === "episode"
          ? `${styles.button} ${styles.button_episode}`
          : feature === "subs"
          ? `${styles.button} ${styles.button_subs}`
          : feature === "form"
          ? `${styles.button} ${styles.button_form}`
          : styles.button
      }
      onClick={func}
    >
      {content}
    </button>
  );
};

export default Button;
