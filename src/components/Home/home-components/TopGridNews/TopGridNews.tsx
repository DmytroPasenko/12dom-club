import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  post,
  postContent,
  postMeta,
  entryP,
  entryButton,
  entryIcon,
  postImg,
} from "./TopGridNews.module.scss";
import IndexPageContext from "../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../utils/getPropertyAsStr";
import AppLink from "../../../AppLink";

const TopGridNews: FunctionComponent = () => {
  const { t } = useTranslation(["site", "top-grid-news"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      {posts?.slice(4, 6).map((item) => {
        const title = getPropertyAsStr(item, "title");
        const text = getPropertyAsStr(item, "text");
        const image = getPropertyAsStr(item, "image");
        const date = getPropertyAsStr(item, "date");
        const formattedDate = date
          ? formatDate(parseInt(date, 10), locale)
          : "";
        const author = getPropertyAsStr(item, "author");

        return (
          <div className={post} key={item.slug}>
            <div className={postContent}>
              <AppLink to={`news/${item.slug}`}>
                <div className={postMeta}>
                  <h5 className="uppercase">
                    <p>{title}</p>
                  </h5>
                  <div className="flex">
                    <p>{formattedDate}</p>
                    <span>- by</span>
                    <p>{author}</p>
                  </div>
                  <p className={entryP}>{text}</p>
                  <button
                    type="button"
                    className={classNames(entryButton, "flex uppercase")}
                  >
                    Read More
                    <img
                      src="../../../../../svg/other/arrow.svg"
                      alt="arrow"
                      className={entryIcon}
                    />
                  </button>
                </div>
                <img className={postImg} src={image} alt="post-img" />
              </AppLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopGridNews;
