import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { entryContent } from "./AboutMePostContainer.module.scss";

import mainPostImg from "../../../../../static/img/about-me-page/about-me-main-img.jpg";
import softPostImg from "../../../../../static/img/about-me-page/about-me-soft-img.jpg";

const AboutMePostContainer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "about-me-post-container"]);

  return (
    <>
      <h3 className="uppercase">Astrology is a precise science!</h3>
      <div className={entryContent}>
        <img src={mainPostImg} alt="about-me-post" />
        <h3 className="uppercase">What astrology is what about?</h3>
        <p>
          As far as the sciences that concern our actual lives go, Astrology may
          seem controversial at a first glance.But in reality, can the science
          that’s been researched and followed for millenia by all cultures of
          the Ancient world be a hoax? I don’t think so.
        </p>
        <img src={softPostImg} alt="about-me-post" />
        <h3 className="uppercase">Why have i become an astrologist?</h3>
        <p>
          It was because of how precise all the predictions made for me were,
          that I’ve decided to become an astrologist myself. That happened 20
          years ago when I was predicted to make a move to the New York City and
          make a fortune there. At the end of the day, it worked just like that,
          but only because I’ve become one of the most well-known and reputable
          astrologists and tarot masters in the city. All in all, I have always
          been fascinated by how astrology predicts the future. It tracks how
          the Universe’s motion (e.g. stars and planets and their orbits
          changes) affect our life in every way. So follow my blog and I’ll help
          you make sense of what astrology has in store for your love life, your
          work life and everything in between!
        </p>
      </div>
    </>
  );
};

export default AboutMePostContainer;
