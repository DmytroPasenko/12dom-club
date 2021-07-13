import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { 
  sliderWrapper,
  slide,
  slideContent,
  slideParagraph,
  slideLink,
  slideButton,
  slide1,
  slide2,
  slide3,
  activeSlide,
  slideBg,
  radioButtons,
  radioButton,
  activeRadio
} from "./Slider.module.scss"

const Slider: FunctionComponent = () => {
  const { t } = useTranslation(["site", "slider"]);

  return (
    <>
      <div className={sliderWrapper}>
        <div className={classNames(slide,activeSlide,"text-center")}>
          <div className={classNames(slideBg,slide1)}></div>
          <div className={slideContent}>
            <p className={slideParagraph}>
              Find out how the stars and planets movement.
            </p>
            <a className={slideLink} href="#"
              ><h2>Affects your life everyday!</h2></a
            >
            <button className={slideButton}>Read more</button>
          </div>
        </div>
        <div className={classNames(slide,"text-center")}>
          <div className={classNames(slideBg,slide2)}></div>
          <div className={slideContent}>
            <p className={slideParagraph}>
              The year of the rooster & jupiter is
            </p>
            <a className={slideLink} href="#"><h2>2017</h2></a>
            <button className={slideButton}>Read more</button>
          </div>
        </div>
        <div className={classNames(slide,"text-center")}>
          <div className={classNames(slideBg,slide3)}></div>
          <div className={slideContent}>
            <p className={slideParagraph}>
              Pisces: weekly horoscope find out how the stars
            </p>
            <a className={slideLink} href="#"><h2>Pisces</h2></a>
            <button className={slideButton}>Read more</button>
          </div>
        </div>
      </div>
      <div className={classNames(radioButtons,"flex mx-auto")}>
        <div className={classNames(radioButton,activeRadio)}></div>
        <div className={radioButton}></div>
        <div className={radioButton}></div>
      </div>
    </>
  );
};

export default Slider;
