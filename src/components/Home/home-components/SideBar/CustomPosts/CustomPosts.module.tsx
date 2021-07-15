import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

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

import customPostBg1 from "../../../../../../static/img/home/side-bar/custom-posts/custom-post-1.jpg";
import customPostBg2 from "../../../../../../static/img/home/side-bar/custom-posts/custom-post-2.jpg";
import customPostBg3 from "../../../../../../static/img/home/side-bar/custom-posts/custom-post-3.jpg";

const CustomPosts: FunctionComponent = () => {
  const { t } = useTranslation(["site", "custom-posts"]);

  return (
    <>
      <h5 className="uppercase">Custom Posts</h5>
      <div
        className={classNames(
          customPostsBlock,
          "grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 flex lg:flex-col flex-row",
        )}
      >
        <div className={classNames(customPost, leftBox, "text-black")}>
          <div className={classNames(customPostContent, "flex")}>
            <a href="http://localhost:8000/blogPost">
              <img src={customPostBg1} alt="news-bg" />
            </a>
            <div className={classNames(customPostTextContent, "flex flex-col")}>
              <p className={customPostDate}>
                <a className={aDate} href="http://localhost:8000/blogPost">
                  Oct. 26, 2016
                </a>
                <span>- by</span>
                <a href="http://localhost:8000/blogPost">admin</a>
              </p>
              <a href="http://localhost:8000/blogPost">
                <h5>You have a power</h5>
              </a>
            </div>
          </div>
        </div>

        <div className={classNames(customPost, rightBox, "text-black")}>
          <div className={classNames(customPostContent, "flex")}>
            <a href="http://localhost:8000/blogPost">
              <img src={customPostBg2} alt="news-bg" />
            </a>
            <div className={classNames(customPostTextContent, "flex flex-col")}>
              <p className={customPostDate}>
                <a className={aDate} href="http://localhost:8000/blogPost">
                  Oct. 25, 2016
                </a>
                <span>- by</span>
                <a href="http://localhost:8000/blogPost">admin</a>
              </p>
              <a href="http://localhost:8000/blogPost">
                <h5>We are energy</h5>
              </a>
            </div>
          </div>
        </div>

        <div className={classNames(customPost, leftBox, "text-black")}>
          <div className={classNames(customPostContent, "flex")}>
            <a href="http://localhost:8000/blogPost">
              <img src={customPostBg3} alt="news-bg" />
            </a>
            <div className={classNames(customPostTextContent, "flex flex-col")}>
              <p className={customPostDate}>
                <a className={aDate} href="http://localhost:8000/blogPost">
                  Oct. 25, 2016
                </a>
                <span>- by</span>
                <a href="http://localhost:8000/blogPost">admin</a>
              </p>
              <a href="http://localhost:8000/blogPost">
                <h5>Forks in the road of life</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPosts;
