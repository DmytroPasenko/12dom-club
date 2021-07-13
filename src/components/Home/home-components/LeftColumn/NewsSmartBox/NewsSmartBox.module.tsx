import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { 
  newsBoxContainer,
  mainNews,
  newsTextContainer,
  newsImg,
  softNews,
  softNewsImg,
  newsTextContent,
  aDate,
  leftBox,
  rightBox
} from "./NewsSmartBox.module.scss"

import firstNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/main-news/main-news-bg-1.jpg"
import secondNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/main-news/main-news-bg-2.jpg"
import thirdNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-1.jpg"
import fourthNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-2.jpg"
import fifthNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-3.jpg"
import sixthNewsBg from "../../../../../../static/img/home/left-column/news-smart-box/soft-news/soft-news-bg-4.jpg"

const NewsSmartBox: FunctionComponent = () => {
  const { t } = useTranslation(["site", "news-smart-box"]);

  return (
    <>
      <div className={classNames(newsBoxContainer,"lg:col-span-1 col-span-2")}>
        <div className={mainNews}>
          <div className={newsTextContent}>
            <h5>You have a power</h5>
            <p className="normal-case">
              <a href="#">Oct. 26, 2016</a>
              <span>- by</span>
              <a href="#">admin</a>
              <a href="#">No comment(s)</a>
            </p>
          </div>
          <img
            className={newsImg}
            src={firstNewsBg}
            alt="news-bg"
          />
        </div>
      </div>

      <div className={classNames(newsBoxContainer,"lg:col-span-1 col-span-2")}>
        <div className={mainNews}>
          <div className={newsTextContent}>
            <h5>We are energy</h5>
            <p className="normal-case">
              <a href="#">Oct. 26, 2016</a>
              <span>- by</span>
              <a href="#">admin</a>
              <a href="#">No comment(s)</a>
            </p>
          </div>
          <img
            className={newsImg}
            src={secondNewsBg}
            alt="news-bg"
          />
        </div>
      </div>

      <div className={classNames(newsBoxContainer,leftBox,"sm:col-span-1 col-span-2")}>
        <div className={classNames(softNews,"text-black flex")}>
          <img
            className={softNewsImg}
            src={thirdNewsBg}
            alt="news-bg"
          />
          <div className={classNames(newsTextContent,"flex flex-col")}>
            <h5>Forks in the road of life</h5>
            <p className="normal-case">
              <a className={aDate} href="#">Oct. 25, 2016</a>
              <span>- by</span>
              <a href="#">admin</a>
            </p>
          </div>
        </div>
      </div>

      <div className={classNames(newsBoxContainer,rightBox,"sm:col-span-1 col-span-2")}>
        <div className={classNames(softNews,"text-black flex")}>
          <img
            className={softNewsImg}
            src={fourthNewsBg}
            alt="news-bg"
          />
          <div className={classNames(newsTextContent,"flex flex-col")}>
            <h5>Open your hole safe</h5>
            <p className="normal-case">
              <a className={aDate} href="#">Oct. 25, 2016</a>
              <span>- by</span>
              <a href="#">admin</a>
            </p>
          </div>
        </div>
      </div>

      <div className={classNames(newsBoxContainer,leftBox,"sm:col-span-1 col-span-2")}>
        <div className={classNames(softNews,"text-black flex")}>
          <img
            className={softNewsImg}
            src={fifthNewsBg}
            alt="news-bg"
          />
          <div className={classNames(newsTextContent,"flex flex-col")}>
            <h5>I am of you</h5>
            <p className="normal-case">
              <a className={aDate} href="#">Oct. 24, 2016</a>
              <span>- by</span>
              <a href="#">admin</a>
            </p>
          </div>
        </div>
      </div>

      <div className={classNames(newsBoxContainer,rightBox,"sm:col-span-1 col-span-2")}>
        <div className={classNames(softNews,"text-black flex")}>
          <img
            className={softNewsImg}
            src={sixthNewsBg}
            alt="news-bg"
          />
          <div className={classNames(newsTextContent,"flex flex-col")}>
            <h5>Greet the dawn</h5>
            <p className="normal-case">
              <a className={aDate} href="#">Oct. 24, 2016</a>
              <span>- by</span>
              <a href="#">admin</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSmartBox;
