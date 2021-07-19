import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import {
  doubleSmartBoxContent,
  doubleSmartBoxImg,
  doubleSmartBoxText,
  postDate,
  entryP,
  postButton,
  arrowIcon,
} from "./DoubleSmartBox.module.scss";

import doubleSmartBoxBg from "../../../../../../static/img/home/left-column/double-smart-box/double-smart-box-bg.jpg";
import arrow from "../../../../../../static/svg/other/arrow.svg";

const DoubleSmartBox: FunctionComponent = () => {
  const { t } = useTranslation(["site", "double-smart-box"]);

  return (
    <>
      <div className={doubleSmartBoxContent}>
        <a href="http://localhost:8000/blogPost">
          <img
            src={doubleSmartBoxBg}
            alt="smart-box-bg"
            className={doubleSmartBoxImg}
          />
          <div className={classNames(doubleSmartBoxText, "normal-case")}>
            <h5 className="uppercase">Astrology: Talent, Faith and Succes…</h5>
            <div className={classNames(postDate, "flex")}>
              <p>Oct. 24, 2016</p>
              <span>- by</span>
              <p>admin</p>
              <p>No comment(s)</p>
            </div>
            <p className={entryP}>
              Find Out How the Stars And Planets Movement. Why the Western
              world’s been fancying the conventional Zodiac system, hence the
              one created further east – believed to be originally a creation of
              the Egyptians, later on adopted by the Babylonians and then
              historically spread across the rest of the ancient world. Anyways,
              as it turns out to come as a huge surprise to almost everyone who
              hears it – there is actually a whole other set of Zodiac signs
              originating from…Europe! Yet., strangely arguably no one in Europe
              remembers, not to mention uses it these days. However, this Celtic
              analog…
            </p>
            <button
              type="button"
              className={classNames(postButton, "flex uppercase")}
            >
              Read More
              <div className={arrowIcon}>
                <img src={arrow} alt="arrow" />
              </div>
            </button>
          </div>
        </a>
      </div>
    </>
  );
};

export default DoubleSmartBox;
