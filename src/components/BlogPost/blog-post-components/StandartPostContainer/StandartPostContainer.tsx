import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { blogPostHeader } from "./StandartPostContainer.module.scss";

const StandartPostContainer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "standart-post-container"]);

  return (
    <>
      <h3 className="uppercase">
        Your aquarius factors and your 1999 flashback
      </h3>
      <p className="post-date normal-case">
        <a href="#">Oct. 26, 2016</a>
        <span>- by</span>
        <a href="#" className="admin-link">
          admin
        </a>
        <a href="#">No comment(s)</a>
        <a href="#">Astrology</a>
        <a href="#">Zodiac</a>
      </p>
      <img src="../img/4-post-2.jpg" alt="post-image" className="post-img" />
      <div className="entry-content">
        <p>
          <span className="initial-cap">F</span>ind Out How the Stars And
          Planets Movement. Why the Western world’s been fancying the
          conventional Zodiac system, hence the one created further east –
          believed to be originally a creation of the Egyptians, later on
          adopted by the Babylonians and then historically spread across the
          rest of the ancient world.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Anyways, as it turns out to come as a huge surprise to almost everyone
          who hears it – there is actually a whole other set of Zodiac signs
          originating from…Europe!
        </p>
        <p>
          <img
            src="../img/3-sp-content-bg-2-l.jpg"
            alt="post-image"
            className="post-img"
          />
        </p>
        <p>
          Yet., strangely arguably no one in Europe remembers, not to mention
          uses it these days.
        </p>
        <p>
          However, this Celtic analog of the Eastern Astrological Zodiac’s been
          around for almost as long.
        </p>
        <p>
          Also splitting the year into 12 months of roughly the same length, it
          has its Celtic animal counterparts to every other Zodiac sign
        </p>
        <p>
          Funnily, the meanings of those compared back to back (or rather month
          to month) seem to be quite similar.
        </p>
        <p>But, as Arthur C. Clarke have brilliantly put it once:</p>
        <blockquote>
          <p className="uppercase">
            I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.
          </p>
          <cite> — Adma Smith </cite>
        </blockquote>
      </div>
      <div className="share-list">
        <div className="social-networks-content">
          <ul className="social-networks flex grid sm:grid-cols-5 grid-cols-4">
            <li className="flex">
              <a href="https://www.facebook.com/">
                <img
                  className="pink-link"
                  src="../img/fb-pink-icon.svg"
                  alt="social-network-1"
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  className="black-link"
                  src="../img/fb-black-icon.svg"
                  alt="social-network-1"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://twitter.com/">
                <img
                  className="pink-link"
                  src="../img/twitter-icon-pink.svg"
                  alt="social-network-2"
                />
              </a>
              <a href="https://twitter.com/">
                <img
                  className="black-link"
                  src="../img/twitter-icon-black.svg"
                  alt="social-network-2"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://myaccount.google.com/">
                <img
                  className="pink-link"
                  src="../img/google-plus-icon-pink.svg"
                  alt="social-network-3"
                />
              </a>
              <a href="https://myaccount.google.com/">
                <img
                  className="black-link"
                  src="../img/google-plus-icon-black.svg"
                  alt="social-network-3"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://www.linkedin.com/">
                <img
                  className="pink-link"
                  src="../img/linkedin-pink-icon.svg"
                  alt="social-network-3"
                />
              </a>
              <a href="https://www.linkedin.com/">
                <img
                  className="black-link"
                  src="../img/linkedin-black-icon.svg"
                  alt="social-network-3"
                />
              </a>
            </li>
            <li className="flex sm:col-span-1 col-span-4 sm:my-0 my-2">
              <a href="https://www.pinterest.com/">
                <img
                  className="pink-link"
                  src="../img/pinterest-icon-pink.svg"
                  alt="social-network-6"
                />
              </a>
              <a href="https://www.pinterest.com/">
                <img
                  className="black-link"
                  src="../img/pinterest-icon-black.svg"
                  alt="social-network-6"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StandartPostContainer;
