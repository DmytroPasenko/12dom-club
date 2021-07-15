import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  page,
  paginationNews,
  quote,
  quoteText,
  quoteAuthor,
  linkPost,
  linkPostContent,
  imagePost,
  imageHover,
  newsDate,
  aDate,
  newsButton,
  arrowIcon,
  pagination,
  paginator,
  pageButton,
  currentPage,
  leftNews,
  rightNews,
  // tempHidden,
} from "./PaginationContent.module.scss";

import arrow from "../../../../../../static/svg/other/arrow.svg";

interface NewsRecord {
  num: number;
  class: string;
  image: string;
  title: string;
  date: number;
  author: string;
}

interface GalleryRecord {
  num: number;
  class: string;
  image: string;
  title: string;
  date: number;
  author: string;
}

interface LatsNewsRecord {
  num: number;
  class: string;
  image: string;
  title: string;
  date: number;
  author: string;
}

const PaginationContent: FunctionComponent = () => {
  const { t } = useTranslation(["site", "pagination-content"]);
  const { locale } = useLocalization();

  const getNews = (): NewsRecord[] => [
    {
      num: 1,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-1.jpg",
      title: "Magic love ball",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 2,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-2.jpg",
      title: "What 2017 brings you",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 3,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-3.jpg",
      title: "Do you two match up?",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 4,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-4.jpg",
      title: "My daily horoscope",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 5,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-5.jpg",
      title: "Affects tour life everyday!",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 6,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-6.jpg",
      title: "2017",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 7,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-7.jpg",
      title: "Pisces",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 8,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-8.jpg",
      title: "Use your Jupiter luck",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 9,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-9.jpg",
      title: "Your aquarius factors and your 1999 flashback",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 10,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-10.jpg",
      title: "You have a power",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 11,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-11.jpg",
      title: "We are energy",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 12,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-12.jpg",
      title: "Forks in the road of life",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 13,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-13.jpg",
      title: "Open your whole self",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 14,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-14.jpg",
      title: "I am of you",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 15,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-15.jpg",
      title: "Greet the dawn",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 16,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-16.jpg",
      title: "Astrology",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 17,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-17.jpg",
      title: "Astrology",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 18,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-18.jpg",
      title: "Taurus: weekly horoscope",
      date: new Date().getTime(),
      author: "admin",
    },
  ];

  const news = getNews();

  const getGallery = (): GalleryRecord[] => [
    {
      num: 22,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "img/home/left-column/pagination-content/pagination-news-bg-13.jpg",
      title: "Image Post",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 23,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "img/home/left-column/pagination-content/pagination-news-bg-13.jpg",
      title: "Image Post",
      date: new Date().getTime(),
      author: "admin",
    },
  ];

  const galleyNews = getGallery();

  const getLastNews = (): LatsNewsRecord[] => [
    {
      num: 24,
      class: classNames(paginationNews, rightNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-7.jpg",
      title: "Gemini: weekly horoscope",
      date: new Date().getTime(),
      author: "admin",
    },
    {
      num: 25,
      class: classNames(paginationNews, leftNews, "sm:col-span-1 col-span-2"),
      image:
        "/img/home/left-column/pagination-content/pagination-news-bg-19.jpg",
      title: "Taurus: weekly horoscope",
      date: new Date().getTime(),
      author: "admin",
    },
  ];

  const lastNews = getLastNews();

  return (
    <>
      <div className={classNames(page, "grid grid-cols-2 text-black")}>
        {news.map((item) => (
          <div data-num={item.num} className={item.class}>
            <a href="http://localhost:8000/blogPost">
              <img src={item.image} alt="pagination content bg" />
              <h5>{item.title}</h5>
              <div className={classNames(newsDate, "normal-case flex")}>
                <p className={aDate}>{formatDate(item.date, locale)}</p>
                <span>- by</span>
                <p>{item.author}</p>
              </div>
              <button
                type="button"
                className={classNames(newsButton, "flex uppercase")}
              >
                Read More
                <div className={arrowIcon}>
                  <img src={arrow} alt="arrow" />
                </div>
              </button>
            </a>
          </div>
        ))}

        <div
          data-num="19"
          className={classNames(
            paginationNews,
            leftNews,
            "sm:col-span-1 col-span-2",
          )}
        >
          <iframe
            title="Rick Levine Astrology Forecast for March 2017"
            src="https://youtube.com/embed/Iw2JO621eyM"
          />
          <a href="http://localhost:8000/blogPost">
            <h5>Video Post</h5>
            <div className={classNames(newsDate, "normal-case flex")}>
              <p className={aDate}>Oct. 21, 2016</p>
              <span>- by</span>
              <p>admin</p>
            </div>
          </a>
        </div>

        <div
          data-num="20"
          className={classNames(
            paginationNews,
            rightNews,
            "sm:col-span-1 col-span-2",
          )}
        >
          <a href="http://localhost:8000/blogPost">
            <div className={quote}>
              <p className={classNames(quoteText, "uppercase")}>
                Anyways, as it turns out to come as a huge surprise to almost
                everyone who hears it - there is actually a whole other set of
                Zodiac signs originating from...Europe!
              </p>
              <p className={quoteAuthor}>— Adma Smith</p>
            </div>
          </a>
        </div>

        <div
          data-num="21"
          className={classNames(
            paginationNews,
            leftNews,
            "sm:col-span-1 col-span-2",
          )}
        >
          <div className={classNames(linkPost, "text-center")}>
            <div className={linkPostContent}>
              <h5>Link Post</h5>
              <a className="lowercase" href="https://www.templatemonster.com">
                https://www.templatemonster.com/
              </a>
            </div>
          </div>
        </div>

        {galleyNews.map((item) => (
          <div data-num={item.num} className={item.class}>
            <a href="http://localhost:8000/blogPost">
              <div className={imagePost}>
                <img src={item.image} alt="post-bg" />
                <div className={imageHover} />
                <p>+</p>
              </div>
              <h5>{item.title}</h5>
              <div className={classNames(newsDate, "normal-case flex")}>
                <p className={aDate}>{formatDate(item.date, locale)}</p>
                <span>- by</span>
                <p>{item.author}</p>
              </div>
              <button
                type="button"
                className={classNames(newsButton, "flex uppercase")}
              >
                Read More
                <div className={arrowIcon}>
                  <img src={arrow} alt="arrow" />
                </div>
              </button>
            </a>
          </div>
        ))}

        {lastNews.map((item) => (
          <div data-num={item.num} className={item.class}>
            <a href="http://localhost:8000/blogPost">
              <img src={item.image} alt="pagination content bg" />
              <h5>{item.title}</h5>
              <div className={classNames(newsDate, "normal-case flex")}>
                <p className={aDate}>{formatDate(item.date, locale)}</p>
                <span>- by</span>
                <p>{item.author}</p>
              </div>
              <button
                type="button"
                className={classNames(newsButton, "flex uppercase")}
              >
                Read More
                <div className={arrowIcon}>
                  <img src={arrow} alt="arrow" />
                </div>
              </button>
            </a>
          </div>
        ))}

        <div
          data-num="26"
          className={classNames(
            paginationNews,
            rightNews,
            "sm:col-span-1 col-span-2",
          )}
        >
          <audio src="../sound/sound1.mp3" controls>
            <track
              kind="captions"
              src="video/jane.en.srt"
              srcLang="en"
              label="English"
            />
          </audio>
          <a href="http://localhost:8000/blogPost">
            <h5>Audio post</h5>
            <div className={classNames(newsDate, "normal-case flex")}>
              <p className={aDate}>Oct. 23, 2016</p>
              <span>- by</span>
              <p>admin</p>
            </div>
            <button
              type="button"
              className={classNames(newsButton, "flex uppercase")}
            >
              Read More
              <div className={arrowIcon}>
                <img src={arrow} alt="arrow" />
              </div>
            </button>
          </a>
        </div>
      </div>

      <div className={classNames(pagination, "flex mx-auto")}>
        <div
          className={paginator}
          id="paginators"
          // onclick="pagination(event)"
        >
          <span className={currentPage} data-page="0" id="page1">
            1
          </span>
          <span className={pageButton} data-page="6" id="page1">
            2
          </span>
          <span className={pageButton} data-page="12" id="page1">
            3
          </span>
          <span className={pageButton} data-page="18" id="page1">
            4
          </span>
          <span className={pageButton} data-page="24" id="page1">
            5
          </span>
        </div>
      </div>
    </>
  );
};

export default PaginationContent;
