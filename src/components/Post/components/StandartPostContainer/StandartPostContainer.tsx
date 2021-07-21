import { FunctionComponent } from "react";
import classNames from "classnames";
import {
  postDate,
  adminLink,
  mainImg,
  postImg,
  entryContent,
  initialCap,
  shareList,
  socialNetworksContent,
  socialNetworks,
  socialLink,
} from "./StandartPostContainer.module.scss";
import mainPostImg from "../../../../../static/img/blog-post/post-container/main-post-img.jpg";
import softPostImg from "../../../../../static/img/blog-post/post-container/soft-post-img.jpg";
import fbIcon from "../../../../../static/svg/social-networks/fb-icon.svg";
import googlePlusIcon from "../../../../../static/svg/social-networks/google-plus-icon.svg";
import pinterestIcon from "../../../../../static/svg/social-networks/pinterest-icon.svg";
import twitterIcon from "../../../../../static/svg/social-networks/twitter-icon.svg";
import linkedinIcon from "../../../../../static/svg/social-networks/linkedin-icon.svg";

const StandartPostContainer: FunctionComponent = () => (
  <>
    <h3 className="uppercase">Your aquarius factors and your 1999 flashback</h3>
    <a
      href="http://localhost:8000/blogPost"
      className={classNames(postDate, "normal-case flex")}
    >
      <p>Oct. 26, 2016</p>
      <span>- by</span>
      <p className={adminLink}>admin</p>
      <p>No comment(s)</p>
      <p>Astrology</p>
      <p>Zodiac</p>
    </a>
    <img
      src={mainPostImg}
      alt="post"
      className={classNames(postImg, mainImg)}
    />
    <div className={entryContent}>
      <p>
        <span className={initialCap}>F</span>ind Out How the Stars And Planets
        Movement. Why the Western world’s been fancying the conventional Zodiac
        system, hence the one created further east – believed to be originally a
        creation of the Egyptians, later on adopted by the Babylonians and then
        historically spread across the rest of the ancient world.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Anyways, as it turns out to come as a huge surprise to almost everyone
        who hears it – there is actually a whole other set of Zodiac signs
        originating from…Europe!
      </p>
      <p>
        <img src={softPostImg} alt="post" className={postImg} />
      </p>
      <p>
        Yet., strangely arguably no one in Europe remembers, not to mention uses
        it these days.
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
        Funnily, the meanings of those compared back to back (or rather month to
        month) seem to be quite similar.
      </p>
      <p>But, as Arthur C. Clarke have brilliantly put it once:</p>
      <blockquote>
        <p className="uppercase">
          I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.
        </p>
        <cite> — Adma Smith </cite>
      </blockquote>
    </div>
    <div className={shareList}>
      <div className={socialNetworksContent}>
        <ul
          className={classNames(
            socialNetworks,
            "grid sm:grid-cols-5 grid-cols-4",
          )}
        >
          <li className="flex">
            <a href="https://www.facebook.com/">
              <img className={socialLink} src={fbIcon} alt="social-network-1" />
            </a>
          </li>
          <li className="flex">
            <a href="https://twitter.com/">
              <img
                className={socialLink}
                src={twitterIcon}
                alt="social-network-2"
              />
            </a>
          </li>
          <li className="flex">
            <a href="https://myaccount.google.com/">
              <img
                className={socialLink}
                src={googlePlusIcon}
                alt="social-network-3"
              />
            </a>
          </li>
          <li className="flex">
            <a href="https://www.linkedin.com/">
              <img
                className={socialLink}
                src={linkedinIcon}
                alt="social-network-4"
              />
            </a>
          </li>
          <li className="flex sm:col-span-1 col-span-4 sm:my-0 my-2">
            <a href="https://www.pinterest.com/">
              <img
                className={socialLink}
                src={pinterestIcon}
                alt="social-network-5"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default StandartPostContainer;
