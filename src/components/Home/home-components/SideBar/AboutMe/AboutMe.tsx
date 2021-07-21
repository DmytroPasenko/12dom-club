import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  aboutBlock,
  aboutBlockContent,
  aboutText,
  postButton,
  arrowIcon,
} from "./AboutMe.module.scss";

import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import AppLink from "../../../../AppLink";
import arrow from "../../../../../../static/svg/other/arrow.svg";

const AboutMe: FunctionComponent = () => {
  const { t } = useTranslation(["site", "about-me"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      {posts?.slice(0, 1).map((item) => {
        const title = getPropertyAsStr(item, "title");
        const text = getPropertyAsStr(item, "text");
        const image = getPropertyAsStr(item, "image");

        return (
          <div className={aboutBlock} key={item.slug}>
            <div className={aboutBlockContent}>
              <h5 className="uppercase">{title}</h5>
              <img src={image} alt="author-img" />
              <p className={aboutText}>{text}</p>
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
        );
      })}
    </>
  );
};

export default AboutMe;
