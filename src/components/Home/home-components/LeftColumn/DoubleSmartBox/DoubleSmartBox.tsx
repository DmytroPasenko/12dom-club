import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  doubleSmartBoxContent,
  doubleSmartBoxImg,
  doubleSmartBoxText,
  postDate,
  entryP,
  postButton,
  arrowIcon,
} from "./DoubleSmartBox.module.scss";
import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import AppLink from "../../../../AppLink";
import arrow from "../../../../../../static/svg/other/arrow.svg";

const DoubleSmartBox: FunctionComponent = () => {
  const { t } = useTranslation(["site"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      {posts?.slice(12, 13).map((item) => {
        const title = getPropertyAsStr(item, "title");
        const text = getPropertyAsStr(item, "text");
        const image = getPropertyAsStr(item, "image");
        const date = getPropertyAsStr(item, "date");
        const formattedDate = date
          ? formatDate(parseInt(date, 10), locale)
          : "";
        const author = getPropertyAsStr(item, "author");

        return (
          <div className={doubleSmartBoxContent} key={item.slug}>
            <AppLink to={`/post/${item.slug}`}>
              <img
                src={image}
                alt="smart-box-bg"
                className={doubleSmartBoxImg}
              />
              <div className={classNames(doubleSmartBoxText, "normal-case")}>
                <h5 className="uppercase">{title}</h5>
                <div className={classNames(postDate, "flex")}>
                  <p>{formattedDate}</p>
                  <span>- {t("site:by")}</span>
                  <p>{author}</p>
                  <p>No comment(s)</p>
                </div>
                <p className={entryP}>{text}</p>
                <button
                  type="button"
                  className={classNames(postButton, "flex uppercase")}
                >
                  {t("site:readMore")}
                  <div className={arrowIcon}>
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </AppLink>
          </div>
        );
      })}
    </>
  );
};

export default DoubleSmartBox;
