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
  activeRadio,
} from "./Slider.module.scss";

interface SlidesRecord {
  slideClasses: string;
  slideBgClasses: string;
  slideParagraph: string;
  slideLink: string;
}

const Slider: FunctionComponent = () => {
  const { t } = useTranslation(["site", "slider"]);

  const getSlides = (): SlidesRecord[] => [
    {
      slideClasses: classNames(slide, activeSlide, "text-center"),
      slideBgClasses: classNames(slideBg, slide1),
      slideParagraph: "Find out how the stars and planets movemented.",
      slideLink: "Affects your life everyday!",
    },
    {
      slideClasses: classNames(slide, "text-center"),
      slideBgClasses: classNames(slideBg, slide2),
      slideParagraph: "The year of the rooster & jupiter is",
      slideLink: "2017",
    },
    {
      slideClasses: classNames(slide, "text-center"),
      slideBgClasses: classNames(slideBg, slide3),
      slideParagraph: "Pisces: weekly horoscope find out how the stars",
      slideLink: "Pisces",
    },
  ];

  // TODO replace fake data to data from database
  const slides = getSlides();

  return (
    <>
      <div className={sliderWrapper}>
        {slides.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={item.slideClasses} key={idx}>
            <div className={item.slideBgClasses} />
            <div className={slideContent}>
              <p className={slideParagraph}>{item.slideParagraph}</p>
              <a className={slideLink} href="#">
                <h2>{item.slideLink}</h2>
              </a>
              <button className={slideButton}>Read more</button>
            </div>
          </div>
        ))}
      </div>
      <div className={classNames(radioButtons, "flex mx-auto")}>
        <div className={classNames(radioButton, activeRadio)} />
        <div className={radioButton} />
        <div className={radioButton} />
      </div>
    </>
  );
};

export default Slider;
