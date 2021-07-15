import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
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

interface CustomRecord {
  class: string;
  image: string;
  date: number;
  author: string;
  title: string;
}

const CustomPosts: FunctionComponent = () => {
  const { t } = useTranslation(["site", "custom-posts"]);
  const { locale } = useLocalization();

  const getPosts = (): CustomRecord[] => [
    {
      class: classNames(customPost, leftBox, "text-black"),
      image: "/img/home/side-bar/custom-posts/custom-post-1.jpg",
      date: new Date().getTime(),
      author: "admin",
      title: "You have a power",
    },
    {
      class: classNames(customPost, rightBox, "text-black"),
      image: "/img/home/side-bar/custom-posts/custom-post-2.jpg",
      date: new Date().getTime(),
      author: "admin",
      title: "We are energy",
    },
    {
      class: classNames(customPost, leftBox, "text-black"),
      image: "/img/home/side-bar/custom-posts/custom-post-3.jpg",
      date: new Date().getTime(),
      author: "admin",
      title: "Forks int the road of life",
    },
  ];

  const posts = getPosts();

  return (
    <>
      <h5 className="uppercase">Custom Posts</h5>
      <div
        className={classNames(
          customPostsBlock,
          "grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 flex lg:flex-col flex-row",
        )}
      >
        {posts.map((item) => (
          <div className={item.class}>
            <div className={classNames(customPostContent, "flex")}>
              <a
                href="http://localhost:8000/blogPost"
                className="flex flex-row"
              >
                <img src={item.image} alt="news-bg" />
                <div
                  className={classNames(customPostTextContent, "flex flex-col")}
                >
                  <div className={classNames(customPostDate, "flex flex-row")}>
                    <p className={aDate}>{formatDate(item.date, locale)}</p>
                    <span>- by</span>
                    <p>{item.author}</p>
                  </div>
                  <h5>{item.title}</h5>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomPosts;
