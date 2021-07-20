import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
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

interface MainNewsRecord {
  title: string;
  date: number;
  author: string;
  comments: string;
  image: string;
}

interface SoftNewsRecord {
  class: string;
  image: string;
  title: string;
  date: number;
  author: string;
}
 
const NewsSmartBox: FunctionComponent = () => {
  const { t } = useTranslation(["site", "news-smart-box"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      {posts?.slice(5, 7).map((item) => {
        const title = getPropertyAsStr(item, "title");
        const image = getPropertyAsStr(item, "image");
        const date = getPropertyAsStr(item, "date");
        const formattedDate = date
          ? formatDate(parseInt(date, 10), locale)
          : "";
        const author = getPropertyAsStr(item, "author");

      {softNewsContent.map((item, idx) => (
        <div
          className={classNames(
            newsBoxContainer,
            { leftBox: isEven(idx) },
            { rightBox: !isEven(idx) },
            "sm:col-span-1 col-span-2",
          )}
        >
          <div className={classNames(softNews, "text-black flex")}>
            <a href="http://localhost:8000/blogPost" className="flex flex-row">
              <img className={softNewsImg} src={item.image} alt="news-bg" />
              <div className={classNames(newsTextContent, "flex flex-col")}>
                <h5>{item.title}</h5>
                <div className="normal-case flex items-center">
                  <p className={aDate}>{formatDate(item.date, locale)}</p>
                  <span>- by</span>
                  <p>{item.author}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
      {posts?.slice(7, 11).map((item, index) => {
        const title = getPropertyAsStr(item, "title");
        const image = getPropertyAsStr(item, "image");
        const date = getPropertyAsStr(item, "date");
        const formattedDate = date
          ? formatDate(parseInt(date, 10), locale)
          : "";
        const author = getPropertyAsStr(item, "author");

      {/* {softNewsContent.map((item) => (
        <div className={item.class}>
          <div className={classNames(softNews, "text-black flex")}>
            <a href="http://localhost:8000/blogPost" className="flex flex-row">
              <img className={softNewsImg} src={item.image} alt="news-bg" />
              <div className={classNames(newsTextContent, "flex flex-col")}>
                <h5>{item.title}</h5>
                <div className="normal-case flex items-center">
                  <p className={aDate}>{formatDate(item.date, locale)}</p>
                  <span>- by</span>
                  <p>{item.author}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default NewsSmartBox;
