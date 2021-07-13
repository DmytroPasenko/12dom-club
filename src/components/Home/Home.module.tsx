import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
// import { PageProps } from "gatsby";
// import Layout from "../Layout/Layout";
// import { PropertyType } from "../../types/common"
import Slider from "../Home/home-components/Slider/Slider.module";
import TopGridNews from "./home-components/TopGridNews/TopGridNews.module";
import NewsSmartBox from "./home-components/LeftColumn/NewsSmartBox/NewsSmartBox.module";
import DoubleSmartBox from "./home-components/LeftColumn/DoubleSmartBox/DoubleSmartBox.module";
import PaginationContent from "./home-components/LeftColumn/PaginationContent/PaginationContent.module";

import {
  siteContainer,
  slider,
  topGridNews,
  newsContainer,
  leftColumn,
  newsSmartBox,
  doubleSmartBox,
  paginationContent
} from "./Home.module.scss";

// interface DataRecord {
//   Property: string;
//   Type: PropertyType;
//   Value: string;
// }

// interface IndexPageProps extends PageProps {
//   data: {
//     cmsApi: {
//       page: DataRecord[];
//     };
//   };
// }

const Home: FunctionComponent = () => {
  const { t } = useTranslation(["site", "home"]);

  return (
    <div className={classNames(siteContainer, "mx-auto")}>
      <section className={classNames(slider, "text-white uppercase")}>
        {<Slider />}
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
          "grid lg:grid-cols-3 grid-cols-1 uppercase flex text-white",
        )}
      >
        <div className={classNames(leftColumn, "col-span-2")}>
          <div className={classNames(newsSmartBox, "grid grid-cols-2")}>
            <NewsSmartBox />
          </div>

          <div className={doubleSmartBox}>
            <DoubleSmartBox />
          </div>

          <div className={classNames(paginationContent,"flex col-span-2 flex-col")}>
            <PaginationContent />
          </div>
        </div>

        <div className="side-bar normal-case text-black">
          <div className="side-bar-block">
            <div className="about-block">AboutMe</div>
          </div>

          <div className="side-bar-block">
            <div className="latest-posts-block">LatestPost</div>
          </div>

          <div className="side-bar-block">
            <h5 className="uppercase">Custom Posts</h5>
            <div
              className="
                custom-posts-block
                grid
                lg:grid-cols-1
                sm:grid-cols-2
                grid-cols-1
                flex
                lg:flex-col
                flex-row
              "
            >
              CustomPosts
            </div>
          </div>

          <div className="side-bar-block">
            <div className="tags-block flex">
              <div className="tags">Tags</div>
            </div>
          </div>

          <div className="side-bar-block text-black">
            <div className="follow-block">FollowAndSubscribe</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
