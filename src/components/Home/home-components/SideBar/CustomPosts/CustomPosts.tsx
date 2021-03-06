import { FunctionComponent, useContext } from "react";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import {
  customPostsBlock,
  customPost,
  customPostContent,
  customPostTextContent,
  customPostDate,
  aDate,
  leftBox,
  rightBox,
} from "./CustomPosts.module.scss";
import { isEven } from "../../../../../utils/isEven";
import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import AppLink from "../../../../AppLink";

const CustomPosts: FunctionComponent = () => {
  const { t } = useTranslation();
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      <h5 className="uppercase">{t("site:customPosts")}</h5>
      <div
        className={classNames(
          customPostsBlock,
          "grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 lg:flex-col flex-row",
        )}
      >
        {posts?.slice(6, 9).map((item, index) => {
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
                customPost,
                `box ${isEven(index) ? leftBox : rightBox}`,
                "flex flex-row",
              )}
              key={item.slug}
            >
              <div className={classNames(customPostContent, "flex flex-row")}>
                <AppLink to={`/post/${item.slug}`} className="flex">
                  <img src={image} alt="news-bg" />
                  <div
                    className={classNames(
                      customPostTextContent,
                      "flex flex-col",
                    )}
                  >
                    <div
                      className={classNames(customPostDate, "flex flex-row")}
                    >
                      <p className={aDate}>{formattedDate}</p>
                      <span>- {t("site:by")}</span>
                      <p>{author}</p>
                    </div>
                    <h5>{title}</h5>
                  </div>
                </AppLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CustomPosts;
