import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  page,
  paginationNews,
  quote,
  quoteText,
  quoteAuthor,
  linkPost,
  linkPostContent,
  imagePost,
  imageHover,
  newsDate,
  aDate,
  newsButton,
  arrowIcon,
  pagination,
  paginator,
  pageButton,
  currentPage,
  leftNews,
  rightNews,
} from "./PaginationContent.module.scss";
import { isEven } from "../../../../../utils/isEven";
import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import AppLink from "../../../../AppLink";
import arrow from "../../../../../../static/svg/other/arrow.svg";

const PaginationContent: FunctionComponent = () => {
  const { t } = useTranslation(["site", "pagination-content"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      <div className={classNames(page, "grid grid-cols-2 text-black")}>
        {posts?.slice(13, 19).map((item, index) => {
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
                paginationNews,
                { leftBox: isEven(index) },
                { rightBox: !isEven(index) },
                "sm:col-span-1 col-span-2",
              )}
              data-num={index}
            >
              <a href="http://localhost:8000/blogPost">
                <img src={image} alt="pagination content bg" />
                <h5>{title}</h5>
                <div className={classNames(newsDate, "normal-case flex")}>
                  <p className={aDate}>{formattedDate}</p>
                  <span>- by</span>
                  <p>{author}</p>
                </div>
                <button
                  type="button"
                  className={classNames(newsButton, "flex uppercase")}
                >
                  Read More
                  <div className={arrowIcon}>
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PaginationContent;
