import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import {
  aboutBlock,
  aboutBlockContent,
  aboutText,
  postButton,
  arrowIcon,
} from "./AboutMe.module.scss";
import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import arrow from "../../../../../../static/svg/other/arrow.svg";

const AboutMe: FunctionComponent = () => {
  const { t } = useTranslation(["site"]);
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      {posts?.slice(19, 20).map((item) => {
        const text = getPropertyAsStr(item, "text");
        const image = getPropertyAsStr(item, "image");

        return (
          <div className={aboutBlock} key={item.slug}>
            <div className={aboutBlockContent}>
              <h5 className="uppercase">{t("site:about")}</h5>
              <img src={image} alt="author-img" />
              <p className={aboutText}>{text}</p>
              <button
                type="button"
                className={classNames(postButton, "flex uppercase")}
              >
                {t("site:readMore")}
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
