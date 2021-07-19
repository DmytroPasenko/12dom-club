import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import {
  aboutBlock,
  aboutBlockContent,
  aboutText,
  postButton,
  arrowIcon,
} from "./AboutMe.module.scss";

import authorImg from "../../../../../../static/img/home/side-bar/about-me/author.jpg";
import arrow from "../../../../../../static/svg/other/arrow.svg";

const AboutMe: FunctionComponent = () => {
  const { t } = useTranslation(["site", "about-me"]);

  return (
    <>
      <div className={aboutBlock}>
        <div className={aboutBlockContent}>
          <h5 className="uppercase">About me</h5>
          <img src={authorImg} alt="author-img" />
          <p className={aboutText}>
            Hello, my dear readers! I’d like to tell you more about myself, my
            fashion tastes and the origins of my inspiration for all things
            lifestyle and beauty. I’ve been working for almost 15 years in
            different, nationwide fashion and lifestyle magazines, such as
            Vogue; Elle; Pink.
          </p>
          <button
            type="button"
            className={classNames(postButton, "flex uppercase")}
          >
            Read More
            <div className={arrowIcon}>
              <img src={arrow} alt="arrow" className="entry-icon-white" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
