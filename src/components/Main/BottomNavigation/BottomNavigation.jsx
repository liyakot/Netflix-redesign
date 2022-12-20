import styles from "./BottomNavigation.module.scss";

const tabsSerial = [
  {
    _id: 1,
    name: "Overview",
  },
  {
    _id: 2,
    name: "Episodes",
  },
  {
    _id: 3,
    name: "Details",
  },
];

const tabsNoSerial = [
  {
    _id: 1,
    name: "Overview",
  },
  {
    _id: 3,
    name: "Details",
  },
];

const BottomNavigation = ({ isActiveTab, setIsActiveTab, movie }) => {
  return (
    <nav className={styles.nav} id="nav">
      {(movie.serial === true ? tabsSerial : tabsNoSerial).map((tab) => (
        <button
          onClick={() => setIsActiveTab(tab._id)}
          key={tab._id}
          className={isActiveTab === tab._id ? styles.active : ""}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;
