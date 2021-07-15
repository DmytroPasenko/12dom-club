import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  latestPostsBlock,
  latestPostsBlockContent,
} from "./LatestPosts.module.scss";

interface LatestRecord {
  title: string;
  date: number;
}

const LatestPosts: FunctionComponent = () => {
  const { t } = useTranslation(["site", "latest-posts"]);
  const { locale } = useLocalization();

  const latestNews = (): LatestRecord[] => [
    { title: "Magic Love Ball", date: new Date().getTime() },
    { title: "What 2017 brings you", date: new Date().getTime() },
    { title: "Do you two match up?", date: new Date().getTime() },
  ];

  const news = latestNews();

  return (
    <>
      <div className={latestPostsBlock}>
        <div className={latestPostsBlockContent}>
          <h5 className="uppercase">Latest posts</h5>
          <ul>
            {news.map((item) => (
              <li className="flex flex-col">
                <a className="uppercase" href="http://localhost:8000/blogPost">
                  {item.title}
                </a>
                <span>{formatDate(item.date, locale)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
