import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

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
  _tempHidden
} from "./PaginationContent.module.scss"

import paginationNewsBg1 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-1.jpg"
import paginationNewsBg2 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-2.jpg"
import paginationNewsBg3 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-3.jpg"
import paginationNewsBg4 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-4.jpg"
import paginationNewsBg5 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-5.jpg"
import paginationNewsBg6 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-6.jpg"
import paginationNewsBg7 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-7.jpg"
import paginationNewsBg8 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-8.jpg"
import paginationNewsBg9 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-9.jpg"
import paginationNewsBg10 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-10.jpg"
import paginationNewsBg11 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-11.jpg"
import paginationNewsBg12 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-12.jpg"
import paginationNewsBg13 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-13.jpg"
import paginationNewsBg14 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-14.jpg"
import paginationNewsBg15 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-15.jpg"
import paginationNewsBg16 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-16.jpg"
import paginationNewsBg17 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-17.jpg"
import paginationNewsBg18 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-18.jpg"
import paginationNewsBg19 from "../../../../../../static/img/home/left-column/pagination-content/pagination-news-bg-19.jpg"
import arrow from "../../../../../../static/svg/other/arrow.svg"


const PaginationContent: FunctionComponent = () => {
  const { t } = useTranslation(["site", "pagination-content"]);

  return (
    <>
      <div className={classNames(page,"grid grid-cols-2 text-black")}>
        <div
          data-num="1"
          className={classNames(paginationNews,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg1}
              alt="pagination content bg"
          /></a>
          <h5>Magic love ball</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Jan. 11, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="2"
          className={classNames(paginationNews,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg2}
              alt="pagination content bg"
          /></a>
          <h5>What 2017 brings you</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Jan. 10, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="3"
          className={classNames(paginationNews,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg3}
              alt="pagination content bg"
          /></a>
          <h5>Do you two match up?</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Jan. 9, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="4"
          className={classNames(paginationNews,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg4}
              alt="pagination content bg"
          /></a>
          <h5>My daily horoscope</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Jan. 8, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="5"
          className={classNames(paginationNews,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg5}
              alt="pagination content bg"
          /></a>
          <h5>Affects tour life everyday!</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Nov. 9, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="6"
          className={classNames(paginationNews,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg6}
              alt="pagination content bg"
          /></a>
          <h5>2017</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Nov. 8, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="7"
          className={classNames(paginationNews,leftNews,_tempHidden,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg7}
              alt="pagination content bg"
          /></a>
          <h5>Pisces</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Nov. 8, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="8"
          className={classNames(paginationNews,rightNews,_tempHidden,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg8} alt="pagination content bg"
          /></a>
          <h5>Use your Jupiter luck</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Nov. 8, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="9"
          className={classNames(paginationNews,_tempHidden,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg9} alt="pagination content bg"
          /></a>
          <h5>Your aquarius factors and your 1999 flashback</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct.26, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="10"
          className={classNames(paginationNews,_tempHidden,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg10} alt="pagination content bg"
          /></a>
          <h5>You have a power</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 25, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="11"
          className={classNames(paginationNews,_tempHidden,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg11} alt="pagination content bg"
          /></a>
          <h5>We are energy</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 25, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="12"
          className={classNames(paginationNews,_tempHidden,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg12} alt="pagination content bg"
          /></a>
          <h5>Forks in the road of life</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 25, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="13"
          className={classNames(paginationNews,_tempHidden,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg13} alt="pagination content bg"
          /></a>
          <h5>Open your whole self</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 25, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="14"
          className={classNames(paginationNews,_tempHidden,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg14} alt="pagination content bg"
          /></a>
          <h5>I am of you</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 24, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="15"
          className={classNames(paginationNews,_tempHidden,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img src={paginationNewsBg15} alt="pagination content bg"
          /></a>
          <h5>Greet the dawn</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 24, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="16"
          className={classNames(paginationNews,_tempHidden,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg16}
              alt="pagination content bg"
          /></a>
          <h5>Astrology</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 24, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="17"
          className={classNames(paginationNews,_tempHidden,leftNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg17}
              alt="pagination content bg"
          /></a>
          <h5>Aries: weekly horoscope</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 24, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="18"
          className={classNames(paginationNews,_tempHidden,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg18}
              alt="pagination content bg"
          /></a>
          <h5>Taurus: weekly horoscope</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 23, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="19"
          className={classNames(paginationNews,_tempHidden,leftNews,"sm:col-span-1 col-span-2")}
        >
          <iframe
            src="https://youtube.com/embed/Iw2JO621eyM"
            // frameborder="0"
          ></iframe>
          <h5>Video Post</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 21, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
        </div>

        <div
          data-num="20"
          className={classNames(paginationNews,_tempHidden,rightNews,"sm:col-span-1 col-span-2")}
        >
          <a href="#">
            <div className={quote}>
              <p className={classNames(quoteText,"uppercase")}>
                Anyways, as it turns out to come as a huge surprise to
                almost everyone who hears it - there is actually a whole
                other set of Zodiac signs originating from...Europe!
              </p>
              <p className={quoteAuthor}>— Adma Smith</p>
            </div>
          </a>
        </div>

        <div
          data-num="21"
          className={classNames(paginationNews,_tempHidden,leftNews,"sm:col-span-1 col-span-2")}
        >
          <div className={classNames(linkPost,"text-center")}>
            <div className={linkPostContent}>
              <h5>Link Post</h5>
              <a className="lowercase" href="https://www.templatemonster.com"
                >https://www.templatemonster.com/</a
              >
            </div>
          </div>
        </div>

        <div
          data-num="22"
          className={classNames(paginationNews,_tempHidden,rightNews,"sm:col-span-1 col-span-2")}
        >
          <div className={imagePost}>
            <a href="#"
              ><img
                src={paginationNewsBg13}
                alt="image-post-bg"
            /></a>
            <div className={imageHover}></div>
            <p>+</p>
          </div>
          <h5>Image Post</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 21, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="23"
          className={classNames(paginationNews,leftNews,_tempHidden,"sm:col-span-1 col-span-2")}
        >
          <div className={imagePost}>
            <a href="#"
              ><img
                src={paginationNewsBg13}
                alt="image-post-bg"
            /></a>
            <div className={imageHover}></div>
            <p>+</p>
          </div>
          <h5>Gallery Post</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 21, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="24"
          className={classNames(paginationNews,rightNews,_tempHidden,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg7}
              alt="pagination content bg"
          /></a>
          <h5>Gemini: weekly horoscope</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 23, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="25"
          className={classNames(paginationNews,leftNews,_tempHidden,"sm:col-span-1 col-span-2")}
        >
          <a href="#"
            ><img
              src={paginationNewsBg19}
              alt="pagination content bg"
          /></a>
          <h5>Cancer: weekly horoscope</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 23, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        <div
          data-num="26"
          className={classNames(paginationNews,rightNews,_tempHidden,"sm:col-span-1 col-span-2")}
        >
          <audio src="../sound/sound1.mp3" controls></audio>
          <h5>Audio post</h5>
          <p className={classNames(newsDate,"normal-case")}>
            <a className={aDate} href="#">Oct. 23, 2016</a>
            <span>- by</span>
            <a href="#">admin</a>
          </p>
          <button className={classNames(newsButton,"flex uppercase")}>
            Read More
            <div className={arrowIcon}>
              <img
                src={arrow}
                alt="arrow"
              />
            </div>
          </button>
        </div>
      </div>

      <div className={classNames(pagination,"flex mx-auto")}>
        <div
          className={paginator}
          id="paginators"
          // onclick="pagination(event)"
        >
          <span className={currentPage} data-page="0" id="page1">1</span>
          <span className={pageButton} data-page="6" id="page1">2</span>
          <span className={pageButton} data-page="12" id="page1">3</span>
          <span className={pageButton} data-page="18" id="page1">4</span>
          <span className={pageButton} data-page="24" id="page1">5</span>
        </div>
      </div>
    </>
  );
};

export default PaginationContent;
