import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { 
  post,
  postContent,
  postMeta,
  entryP,
  entryButton,
  entryIcon,
  postImg
} from "./TopGridNews.module.scss"

import firstSldieBg from "../../../../../static/img/home/slider/slide-1.jpg"
import secondSldieBg from "../../../../../static/img/home/slider/slide-2.jpg"
import thirdldieBg from "../../../../../static/img/home/slider/slide-3.jpg"

const TopGridNews: FunctionComponent = () => {
  const { t } = useTranslation(["site", "top-grid-news"]);

  return (
    <>
      <div className={post}>
          <div className={postContent}>
            <div className={postMeta}>
              <h5 className="uppercase">
                <a href="#">Use your Jupiter luck in 2017</a>
              </h5>
              <p>
                <a href="#">Nov. 8, 2016</a>
                <span>- by</span>
                <a href="#">admin</a>
              </p>
              <p className={entryP}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                vero eum nisi illo ullam neque est mollitia placeat, quis
                magni modi itaque distinctio perspiciatis quidem odit qui
                eveniet ex accusamus!
              </p>
              <button className={classNames(entryButton,"flex uppercase")}>
                Read More
                <img
                  src="../../../../../svg/other/arrow.svg"
                  alt="arrow"
                  className={entryIcon}
                />
              </button>
            </div>
            <a href="#"
              ><img
                className={postImg}
                src="../../../../../img/home/top-grid-news/top-post-bg-1.jpg"
                alt="post-img"
            /></a>
          </div>
        </div>
        <div className={post}>
          <div className={postContent}>
            <div className={postMeta}>
              <h5 className="uppercase">
                <a href="#">Your aquarios factors and your...</a>
              </h5>
              <p>
                <a href="#">Oct. 26, 2016</a>
                <span>- by</span>
                <a href="#">admin</a>
              </p>
              <p className={entryP}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi voluptate excepturi eius obcaecati veniam! Unde sunt
                cupiditate, aperiam reiciendis quam dolor perspiciatis id
                perferendis reprehenderit sint quasi rerum voluptate quaerat.
              </p>
              <button className={classNames(entryButton,"flex uppercase")}>
                Read More
                <img
                  src="../../../../../svg/other/arrow.svg"
                  alt="arrow"
                  className={entryIcon}
                />
              </button>
            </div>
            <a href="#"
              ><img
                className={postImg}
                src="../../../../../img/home/top-grid-news/top-post-bg-2.jpg"
                alt="post-img"
            /></a>
          </div>
        </div>
    </>
  );
};

export default TopGridNews;
