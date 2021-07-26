import { FunctionComponent } from "react";
import classNames from "classnames";
import AboutMePostContainer from "./about-me-page-components/AboutMePostContainer/AboutMePostContainer";
import {
  aboutMeHeader,
  siteContainer,
  postContainer,
} from "./AboutMePage.module.scss";

const AboutMePage: FunctionComponent = () => (
  <>
    <div id="about-me-header">
      <div className={aboutMeHeader} />
    </div>

    <div className={classNames(siteContainer, "mx-auto")}>
      <section className={postContainer}>
        <AboutMePostContainer />
      </section>
    </div>
  </>
);

export default AboutMePage;
