import { FunctionComponent } from "react";
import classNames from "classnames";
import Slider from "./home-components/Slider/Slider";
import TopGridNews from "./home-components/TopGridNews/TopGridNews";
import NewsSmartBox from "./home-components/LeftColumn/NewsSmartBox/NewsSmartBox";
import DoubleSmartBox from "./home-components/LeftColumn/DoubleSmartBox/DoubleSmartBox";
import PaginationContent from "./home-components/LeftColumn/PaginationContent/PaginationContent";
import AboutMe from "./home-components/SideBar/AboutMe/AboutMe";
import CustomPosts from "./home-components/SideBar/CustomPosts/CustomPosts";
import LatestPosts from "./home-components/SideBar/LatestPosts/LatestPosts";
import Tags from "./home-components/SideBar/Tags/Tags";
import FollowAndSubscribe from "./home-components/SideBar/FollowAndSubscribe/FollowAndSubscribe";

import {
  siteContainer,
  slider,
  topGridNews,
  newsContainer,
  leftColumn,
  newsSmartBox,
  doubleSmartBox,
  paginationContent,
  sideBar,
  sideBarBlock,
} from "./Home.module.scss";

const Home: FunctionComponent = () => (
  <div className={classNames(siteContainer, "mx-auto")}>
    <section className={classNames(slider, "text-white uppercase")}>
      <Slider />
    </section>

    <section
      className={classNames(
        topGridNews,
        "grid xl:grid-cols-2 grid-cols-1 text-white",
      )}
    >
      <TopGridNews />
    </section>

    <section
      className={classNames(
        newsContainer,
        "grid lg:grid-cols-3 grid-cols-1 uppercase text-white",
      )}
    >
      <div className={classNames(leftColumn, "col-span-2")}>
        <div className={classNames(newsSmartBox, "grid grid-cols-2")}>
          <NewsSmartBox />
        </div>

        <div className={doubleSmartBox}>
          <DoubleSmartBox />
        </div>

        <div
          className={classNames(paginationContent, "flex col-span-2 flex-col")}
        >
          <PaginationContent />
        </div>
      </div>

      <div className={classNames(sideBar, "normal-case text-black")}>
        <div className={sideBarBlock}>
          <AboutMe />
        </div>

        <div className={sideBarBlock}>
          <LatestPosts />
        </div>

        <div className={sideBarBlock}>
          <CustomPosts />
        </div>

        <div className={sideBarBlock}>
          <Tags />
        </div>

        <div className={classNames(sideBarBlock, "text-black")}>
          <FollowAndSubscribe />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
