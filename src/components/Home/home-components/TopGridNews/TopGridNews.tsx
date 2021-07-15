import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { useLocalization } from "gatsby-theme-i18n";
import { formatDate } from "@miran-soft/common";

import {
  post,
  postContent,
  postMeta,
  entryP,
  entryButton,
  entryIcon,
  postImg,
} from "./TopGridNews.module.scss";

interface NewsRecord {
  header: string;
  date: number;
  author: string;
  text: string;
  image: string;
}

const TopGridNews: FunctionComponent = () => {
  const { t } = useTranslation(["site", "top-grid-news"]);

  const getNews = (): NewsRecord[] => [
    {
      header: "Use your Jupiter luck in 2017",
      date: new Date().getTime(),
      author: "admin",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum nisi illo ullam neque est mollitia placeat, quis magni modi itaque distinctio perspiciatis quidem odit qui eveniet exaccusamus!",
      image: "../../../../../img/home/top-grid-news/top-post-bg-1.jpg",
    },
    {
      header: "Your aquarios factors and your...",
      date: new Date().getTime(),
      author: "admin",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eum nisi illo ullam neque est mollitia placeat, quis magni modi itaque distinctio perspiciatis quidem odit qui eveniet exaccusamus!",
      image: "../../../../../img/home/top-grid-news/top-post-bg-2.jpg",
    },
  ];

  const news = getNews();
  const { locale } = useLocalization();

  return (
    <>
      {news.map((item) => (
        <div className={post}>
          <div className={postContent}>
            <a href="http://localhost:8000/blogPost">
              <div className={postMeta}>
                <h5 className="uppercase">
                  <p>{item.header}</p>
                </h5>
                <div className="flex">
                  <p>{formatDate(item.date, locale)}</p>
                  <span>- by</span>
                  <p>{item.author}</p>
                </div>
                <p className={entryP}>{item.text}</p>
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
              <img className={postImg} src={item.image} alt="post-img" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopGridNews;
