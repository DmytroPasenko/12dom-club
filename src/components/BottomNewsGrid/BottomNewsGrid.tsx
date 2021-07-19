import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  bottomNewsGrid,
  bottomNewsGridWrapper,
  bottomNews,
  bottomNewsContent,
  bottomNewsMeta,
  entryP,
  entryButton,
  entryIcon,
  thumbnailImg,
} from "./BottomNewsGrid.module.scss";
import buttonIcon from "../../../static/svg/other/arrow.svg";
import IndexPageContext from "../Context/IndexContext";
import { getPropertyAsStr } from "../../utils/getPropertyAsStr";
import AppLink from "../AppLink";

const BottomNewsGrid: FunctionComponent = () => {
  const { t } = useTranslation(["site", "bottom-news-grid"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <section className={classNames(bottomNewsGrid, "text-white")}>
      <div
        className={classNames(
          bottomNewsGridWrapper,
          "grid md:grid-cols-4 grid-cols-2 flex",
        )}
      >
        {posts?.slice(0, 4).map((item) => {
          const title = getPropertyAsStr(item, "title");
          const text = getPropertyAsStr(item, "text");
          const image = getPropertyAsStr(item, "image");
          const date = getPropertyAsStr(item, "date");
          const formattedDate = date
            ? formatDate(parseInt(date, 10), locale)
            : "";
          const author = getPropertyAsStr(item, "author");

          return (
            <div className={bottomNews} key={item.slug}>
              <div className={bottomNewsContent}>
                <AppLink to={`news/${item.slug}`}>
                  <div className={bottomNewsMeta}>
                    <h5 className="uppercase">{title}</h5>
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
                      <img src={buttonIcon} alt="arrow" className={entryIcon} />
                    </button>
                  </div>
                  <img
                    className={thumbnailImg}
                    src={image}
                    alt="thumbnail-img"
                  />
                </AppLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BottomNewsGrid;
