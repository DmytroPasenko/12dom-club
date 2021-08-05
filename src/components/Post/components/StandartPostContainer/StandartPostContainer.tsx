import { FunctionComponent } from "react";
import classNames from "classnames";
import {
  postDate,
  mainImg,
  postImg,
  entryContent,
  // initialCap,
  shareList,
  socialNetworksContent,
  socialNetworks,
  socialLink,
} from "./StandartPostContainer.module.scss";
import fbIcon from "../../../../../static/svg/social-networks/fb-icon.svg";
import googlePlusIcon from "../../../../../static/svg/social-networks/google-plus-icon.svg";
import pinterestIcon from "../../../../../static/svg/social-networks/pinterest-icon.svg";
import twitterIcon from "../../../../../static/svg/social-networks/twitter-icon.svg";
import linkedinIcon from "../../../../../static/svg/social-networks/linkedin-icon.svg";

interface PostProps {
  title: string;
  date: string;
  image: string;
  text: string;
  author: string;
}

const StandartPostContainer: FunctionComponent<PostProps> = ({
  title,
  date,
  image,
  text,
  author,
}) => {
  console.log("items", this);
  return (
    <>
      <h3 className="uppercase">{title}</h3>
      <a
        href="http://localhost:8000/blogPost"
        className={classNames(postDate, "normal-case flex flex-wrap")}
      >
        <p>{date}</p>
        <span>- by</span>
        <p>{author}</p>
        <p>No comment(s)</p>
        <p>Astrology</p>
        <p>Zodiac</p>
      </a>
      <img src={image} alt="post" className={classNames(postImg, mainImg)} />
      <div className={entryContent}>
        <p>{text}</p>
        <blockquote>
          <p className="uppercase">
            I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.
          </p>
          <cite> — Adma Smith </cite>
        </blockquote>
      </div>
      <div className={shareList}>
        <div className={socialNetworksContent}>
          <ul className={classNames(socialNetworks, "grid grid-cols-5")}>
            <li className="flex">
              <a href="https://www.facebook.com/">
                <img
                  className={socialLink}
                  src={fbIcon}
                  alt="social-network-1"
                />
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
            <li className="flex">
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
};

export default StandartPostContainer;
