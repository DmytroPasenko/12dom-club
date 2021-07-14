import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

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

import firstNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/main-news/main-news-bg-1.jpg";
import secondNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/main-news/main-news-bg-2.jpg";
import thirdNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-1.jpg";
import fourthNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-2.jpg";
import fifthNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-3.jpg";
import sixthNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-4.jpg";

const NewsSmartBox: FunctionComponent = () => {
  const { t } = useTranslation(["site", "news-smart-box"]);

  return (
    <>
      <div className={classNames(newsBoxContainer, "lg:col-span-1 col-span-2")}>
        <div className={mainNews}>
          <a href="http://localhost:8000/blogPost">
            <div className={newsTextContent}>
              <h5>You have a power</h5>
              <div className="normal-case flex">
                <p>Oct. 26, 2016</p>
                <span>- by</span>
                <p>admin</p>
                <p>No comment(s)</p>
              </div>
            </div>
            <img className={newsImg} src={firstNewsBg} alt="news-bg" />
          </a>
        </div>
      </div>

      <div className={classNames(newsBoxContainer, "lg:col-span-1 col-span-2")}>
        <div className={mainNews}>
          <a href="http://localhost:8000/blogPost">
            <div className={newsTextContent}>
              <h5>We are energy</h5>
              <div className="normal-case flex">
                <p>Oct. 26, 2016</p>
                <span>- by</span>
                <p>admin</p>
                <p>No comment(s)</p>
              </div>
            </div>
            <img className={newsImg} src={secondNewsBg} alt="news-bg" />
          </a>
        </div>
      </div>

      <div
        className={classNames(
          newsBoxContainer,
          leftBox,
          "sm:col-span-1 col-span-2",
        )}
      >
        <div className={classNames(softNews, "text-black flex")}>
          <a href="http://localhost:8000/blogPost" className="flex flex-row">
            <img className={softNewsImg} src={thirdNewsBg} alt="news-bg" />
            <div className={classNames(newsTextContent, "flex flex-col")}>
              <h5>Forks in the road of life</h5>
              <div className="normal-case flex items-center">
                <p className={aDate}>Oct. 25, 2016</p>
                <span>- by</span>
                <p>admin</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div
        className={classNames(
          newsBoxContainer,
          rightBox,
          "sm:col-span-1 col-span-2",
        )}
      >
        <div className={classNames(softNews, "text-black flex")}>
          <a href="http://localhost:8000/blogPost" className="flex flex-row">
            <img className={softNewsImg} src={fourthNewsBg} alt="news-bg" />
            <div className={classNames(newsTextContent, "flex flex-col")}>
              <h5>Open your hole safe</h5>
              <div className="normal-case flex items-center">
                <p className={aDate}>Oct. 25, 2016</p>
                <span>- by</span>
                <p>admin</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div
        className={classNames(
          newsBoxContainer,
          leftBox,
          "sm:col-span-1 col-span-2",
        )}
      >
        <div className={classNames(softNews, "text-black flex")}>
          <a href="http://localhost:8000/blogPost" className="flex flex-row">
            <img className={softNewsImg} src={fifthNewsBg} alt="news-bg" />
            <div className={classNames(newsTextContent, "flex flex-col")}>
              <h5>I am of you</h5>
              <div className="normal-case flex items-center">
                <p className={aDate}>Oct. 24, 2016</p>
                <span>- by</span>
                <p>admin</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div
        className={classNames(
          newsBoxContainer,
          rightBox,
          "sm:col-span-1 col-span-2",
        )}
      >
        <div className={classNames(softNews, "text-black flex")}>
          <a href="http://localhost:8000/blogPost" className="flex flex-row">
            <img className={softNewsImg} src={sixthNewsBg} alt="news-bg" />
            <div className={classNames(newsTextContent, "flex flex-col")}>
              <h5>Greet the dawn</h5>
              <div className="normal-case flex items-center">
                <p className={aDate}>Oct. 24, 2016</p>
                <span>- by</span>
                <p>admin</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsSmartBox;
