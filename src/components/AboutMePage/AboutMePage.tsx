import { FunctionComponent } from "react";
import classNames from "classnames";
import AboutMeHeader from "./about-me-page-components/AboutMeHeader/AboutMeHeader";
import AboutMePostContainer from "./about-me-page-components/AboutMePostContainer/AboutMePostContainer";
import { siteContainer, postContainer } from "./AboutMePage.module.scss";

const AboutMePage: FunctionComponent = () => (
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

export default AboutMePage;
