import styles from "./Main.module.scss";
import { DATA } from "../../data";
import Sidebar from "../Sidebar/Sidebar";
import Information from "./Information";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import Episodes from "./Episodes/Episodes";
import Details from "./Details";
import { useState } from "react";
import More from "./More/More";
import { useParams } from "react-router";
import NoMovie from "./NoMovie/NoMovie";

const Main = ({ feature }) => {
  const { id } = useParams();
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [isActiveTab, setIsActiveTab] = useState(1);

  let filteredData = DATA.filter((item) =>
    feature === "myList"
      ? JSON.parse(localStorage.getItem(item.name)) === true
      : item.category.includes(feature)
  );

  return (
    <div className={styles.full_page}>
      <section className={styles.main}>
        <Sidebar
          isSidebarShow={isSidebarShow}
          setIsSidebarShow={setIsSidebarShow}
        />

        {filteredData.length < 1 ? (
          <NoMovie />
        ) : (
          <div
            className={styles.main_movie}
            id="main_movie"
            style={{
              backgroundImage: `url(${filteredData[id ? id : 0].mainImage})`,
              width: isSidebarShow ? "82%" : "90%",
            }}
          >
            {isActiveTab === 1 ? (
              <Information movie={filteredData[id ? id : 0]} />
            ) : isActiveTab === 2 && filteredData[id ? id : 0].serial === true ? (
              <Episodes
                movie={filteredData[id ? id : 0]}
                size={isSidebarShow ? "67%" : "75%"}
              />
            ) : isActiveTab === 2 && filteredData[id ? id : 0].serial !== true ? setIsActiveTab(1) :
              (
                isActiveTab === 3 && <Details movie={filteredData[id ? id : 0]} />
              )}

            <BottomNavigation
              isActiveTab={isActiveTab}
              setIsActiveTab={setIsActiveTab}
              movie={filteredData[id ? id : 0]}
            />
          </div>
        )}
      </section>
      <section
        className={styles.more}
        style={{ display: filteredData.length < 1 ? "none" : "block" }}
      >
        <More movies={filteredData} specify={feature} />
      </section>
    </div>
  );
};

export default Main;
