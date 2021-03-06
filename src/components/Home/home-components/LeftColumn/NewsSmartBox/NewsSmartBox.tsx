import { FunctionComponent, useContext } from "react";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import {
  newsBoxContainer,
  mainNews,
  newsImg,
  softNews,
  softNewsImg,
  newsTextContent,
  aDate,
  leftBox,
  rightBox,
} from "./NewsSmartBox.module.scss";
import { isEven } from "../../../../../utils/isEven";
import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import AppLink from "../../../../AppLink";

const NewsSmartBox: FunctionComponent = () => {
  const { t } = useTranslation();
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      {posts?.slice(6, 8).map((item) => {
        const title = getPropertyAsStr(item, "title");
        const image = getPropertyAsStr(item, "image");
        const date = getPropertyAsStr(item, "date");
        const formattedDate = date
          ? formatDate(parseInt(date, 10), locale)
          : "";
        const author = getPropertyAsStr(item, "author");

        return (
          <div
            className={classNames(newsBoxContainer, "lg:col-span-1 col-span-2")}
            key={item.slug}
          >
            <div className={mainNews}>
              <AppLink to={`/post/${item.slug}`}>
                <div className={newsTextContent}>
                  <h5>{title}</h5>
                  <div className="normal-case flex">
                    <p>{formattedDate}</p>
                    <span>- {t("site:by")}</span>
                    <p>{author}</p>
                    <p>No comment(s)</p>
                  </div>
                </div>
                <img className={newsImg} src={image} alt="news-bg" />
              </AppLink>
            </div>
          </div>
        );
      })}
      {posts?.slice(8, 12).map((item, index) => {
        const title = getPropertyAsStr(item, "title");
        const image = getPropertyAsStr(item, "image");
        const date = getPropertyAsStr(item, "date");
        const formattedDate = date
          ? formatDate(parseInt(date, 10), locale)
          : "";
        const author = getPropertyAsStr(item, "author");

        return (
          <div
            className={classNames(
              newsBoxContainer,
              `box ${isEven(index) ? leftBox : rightBox}`,
              "sm:col-span-1 col-span-2",
            )}
            key={item.slug}
          >
            <div className={classNames(softNews, "text-black")}>
              <AppLink className="flex flex-row" to={`/post/${item.slug}`}>
                <img className={softNewsImg} src={image} alt="news-bg" />
                <div className={classNames(newsTextContent, "flex flex-col")}>
                  <h5>{title}</h5>
                  <div className="normal-case flex items-center">
                    <p className={aDate}>{formattedDate}</p>
                    <span>- {t("site:by")}</span>
                    <p>{author}</p>
                  </div>
                </div>
              </AppLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsSmartBox;
