import { FunctionComponent } from "react";
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

  const getMainNews = (): MainNewsRecord[] => [
    {
      title: "You have a power",
      date: new Date().getTime(),
      author: "admin",
      comments: "No comment(s)",
      image: "img/home/left-column/news-smart-box/main-news/main-news-bg-1.jpg",
    },
    {
      title: "We are energy",
      date: new Date().getTime(),
      author: "admin",
      comments: "No comment(s)",
      image: "img/home/left-column/news-smart-box/main-news/main-news-bg-2.jpg",
    },
  ];

  const mainNewsContent = getMainNews();

  const getSoftNews = (): SoftNewsRecord[] => [
    {
      class: classNames(newsBoxContainer, leftBox, "sm:col-span-1 col-span-2"),
      image: "img/home/left-column/news-smart-box/soft-news/soft-news-bg-1.jpg",
      title: "Forks in the road of life",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      class: classNames(newsBoxContainer, rightBox, "sm:col-span-1 col-span-2"),
      image: "img/home/left-column/news-smart-box/soft-news/soft-news-bg-2.jpg",
      title: "Open your hole safe",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      class: classNames(newsBoxContainer, leftBox, "sm:col-span-1 col-span-2"),
      image: "img/home/left-column/news-smart-box/soft-news/soft-news-bg-3.jpg",
      title: "I am of you",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      class: classNames(newsBoxContainer, rightBox, "sm:col-span-1 col-span-2"),
      image: "img/home/left-column/news-smart-box/soft-news/soft-news-bg-4.jpg",
      title: "Greet the dawn",
      date: new Date().getTime(),
      author: "admin",
    },
  ];

  const softNewsContent = getSoftNews();

  return (
    <>
      {mainNewsContent.map((item) => (
        <div
          className={classNames(newsBoxContainer, "lg:col-span-1 col-span-2")}
        >
          <div className={mainNews}>
            <a href="http://localhost:8000/blogPost">
              <div className={newsTextContent}>
                <h5>{item.title}</h5>
                <div className="normal-case flex">
                  <p>{formatDate(item.date, locale)}</p>
                  <span>- by</span>
                  <p>{item.author}</p>
                  <p>{item.comments}</p>
                </div>
              </div>
              <img className={newsImg} src={item.image} alt="news-bg" />
            </a>
          </div>
        </div>
      ))}

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
        </div>
      ))}

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
