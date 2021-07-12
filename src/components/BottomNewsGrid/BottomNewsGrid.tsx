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
	thumbnailImg } from "./BottomNewsGrid.module.scss";

import postImg1 from "../../../static/img/bottom-news-grid/post-bg-1.jpg"
import postImg2 from "../../../static/img/bottom-news-grid/post-bg-2.jpg"
import postImg3 from "../../../static/img/bottom-news-grid/post-bg-3.jpg"
import postImg4 from "../../../static/img/bottom-news-grid/post-bg-4.jpg"
import buttonIcon from "../../../static/svg/other/arrow.svg"

const BottomNewsGrid: FunctionComponent = () => {
  const { t } = useTranslation(["site", "bottom-news-grid"]);

  return (
    <section className={classNames(bottomNewsGrid,"text-white")}>
      <div className={classNames(bottomNewsGridWrapper,"grid md:grid-cols-4 grid-cols-2 flex")}>
        <div className={bottomNews}>
          <div className={bottomNewsContent}>
            <div className={bottomNewsMeta}>
              <h5 className="uppercase">
                <a href="#">Aries: weekly horoscope...</a>
              </h5>
              <p>
                <a href="#">Oct. 24, 2016</a>
                <span>- by</span>
                <a href="#">admin</a>
              </p>
              <p className={entryP}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                incidunt nostrum amet?
              </p>
              <button className={classNames(entryButton, "flex uppercase")}>
                Read More
                <img
                  src={buttonIcon}
                  alt="arrow"
                  className={entryIcon}
                />
              </button>
            </div>
            <a href="#">
              <img
                className={thumbnailImg}
                src={postImg1}
                alt="thumbnail-img"
              />
            </a>
          </div>
        </div>

        <div className={bottomNews}>
          <div className={bottomNewsContent}>
            <div className={bottomNewsMeta}>
              <h5 className="uppercase">
                <a href="#">Taurus: weekly horoscope...</a>
              </h5>
              <p>
                <a href="#">Oct. 23, 2016</a>
                <span>- by</span>
                <a href="#">admin</a>
              </p>
              <p className={entryP}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                incidunt nostrum amet?
              </p>
              <button className={classNames(entryButton, "flex uppercase")}>
                Read More
                <img
                  src={buttonIcon}
                  alt="arrow"
                  className={entryIcon}
                />
              </button>
            </div>
            <a href="#">
              <img
                className={thumbnailImg}
                src={postImg2}
                alt="thumbnail-img"
              />
            </a>
          </div>
        </div>

        <div className={bottomNews}>
          <div className={bottomNewsContent}>
            <div className={bottomNewsMeta}>
              <h5 className="uppercase">
                <a href="#">Gemini: weekly horoscope...</a>
              </h5>
              <p>
                <a href="#">Oct. 20, 2016</a>
                <span>- by</span>
                <a href="#">admin</a>
              </p>
              <p className={entryP}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                incidunt nostrum amet?
              </p>
              <button className={classNames(entryButton, "flex uppercase")}>
                Read More
                <img
                  src={buttonIcon}
                  alt="arrow"
                  className={entryIcon}
                />
              </button>
            </div>
            <a href="#">
              <img
                className={thumbnailImg}
                src={postImg3}
                alt="thumbnail-img"
              />
            </a>
          </div>
        </div>

        <div className={bottomNews}>
          <div className={bottomNewsContent}>
            <div className={bottomNewsMeta}>
              <h5 className="uppercase">
                <a href="#">Cancer: weekly horoscope...</a>
              </h5>
              <p>
                <a href="#">Oct. 12, 2016</a>
                <span>- by</span>
                <a href="#">admin</a>
              </p>
              <p className={entryP}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                incidunt nostrum amet?
              </p>
              <button className={classNames(entryButton, "flex uppercase")}>
                Read More
                <img
                  src={buttonIcon}
                  alt="arrow"
                  className={entryIcon}
                />
              </button>
            </div>
            <a href="#">
              <img
                className={thumbnailImg}
                src={postImg4}
                alt="thumbnail-img"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNewsGrid;
