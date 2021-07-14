import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import {
  bottomNewsGrid,
  bottomNewsGridWrapper,
  bottomNews,
  bottomNewsContent,
  bottomNewsMeta,
  entryP,
  entryButton,
  entryIcon,
  thumbnailImg,
} from "./BottomNewsGrid.module.scss";

import buttonIcon from "../../../static/svg/other/arrow.svg";

interface NewsRecord {
  title: string;
  date: number;
  author: string;
  text: string;
  image: string;
}

const BottomNewsGrid: FunctionComponent = () => {
  const { t } = useTranslation(["site", "bottom-news-grid"]);

  const getNews = (): NewsRecord[] => [
    {
      title: "Aries: weekly horoscope...",
      date: new Date().getTime(),
      author: "admin",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt nostrum amet?",
      image: "../../../img/bottom-news-grid/post-bg-1.jpg",
    },
    {
      title: "Taurus: weekly horoscope...",
      date: new Date().getTime(),
      author: "admin",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est enim ullam illum laudantium cum.",
      image: "../../../img/bottom-news-grid/post-bg-2.jpg",
    },
    {
      title: "Gemini: weekly horoscope...",
      date: new Date().getTime(),
      author: "admin",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsa sunt quod nostrum optio.",
      image: "../../../img/bottom-news-grid/post-bg-3.jpg",
    },
    {
      title: "Cancer: weekly horoscope...",
      date: new Date().getTime(),
      author: "admin",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni numquam fugiat.",
      image: "../../../img/bottom-news-grid/post-bg-4.jpg",
    },
  ];

  // TODO replace fake data to data from database
  const news = getNews();

  return (
    <section className={classNames(bottomNewsGrid, "text-white")}>
      <div
        className={classNames(
          bottomNewsGridWrapper,
          "grid md:grid-cols-4 grid-cols-2 flex",
        )}
      >
        {news.map((item) => (
          <div className={bottomNews}>
            <div className={bottomNewsContent}>
              <div className={bottomNewsMeta}>
                <h5 className="uppercase">
                  <a href="#">{item.title}</a>
                </h5>
                <p>
                  <a href="#">{new Date(item.date).toString()}</a>
                  <span>- by</span>
                  <a href="#">{item.author}</a>
                </p>
                <p className={entryP}>{item.text}</p>
                <button className={classNames(entryButton, "flex uppercase")}>
                  Read More
                  <img src={buttonIcon} alt="arrow" className={entryIcon} />
                </button>
              </div>
              <a href="#">
                <img
                  className={thumbnailImg}
                  src={item.image}
                  alt="thumbnail-img"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BottomNewsGrid;
