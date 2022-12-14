import styles from "./Header.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.notification}>
        <i className="bx bxs-bell"></i>
        <span></span>
      </div>
      <div className={styles.profile}>
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            alt="avatar icon"
          />
        </div>
        <i className="bx bx-caret-down"></i>
      </div>
    </div>
  );
};

export default Profile;
