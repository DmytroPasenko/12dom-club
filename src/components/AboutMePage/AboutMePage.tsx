import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
// import { PageProps } from "gatsby";
// import Layout from "../Layout/Layout";
// import { PropertyType } from "../../types/common"
import AboutMeHeader from "./about-me-page-components/AboutMeHeader/AboutMeHeader";
import AboutMePostContainer from "./about-me-page-components/AboutMePostContainer/AboutMePostContainer";

import { siteContainer, postContainer } from "./AboutMePage.module.scss";

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

const AboutMePage: FunctionComponent = () => {
  const { t } = useTranslation(["site", "about-me-page"]);

  return (
    <>
      <div className="aboutMeContainer">
        <AboutMeHeader />
      </div>

      <div className={classNames(siteContainer, "mx-auto")}>
        <section className={postContainer}>
          <AboutMePostContainer />
        </section>
      </div>
    </>
  );
};

export default AboutMePage;
