import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import {
  footer,
  footerContent,
  footerHeader,
  emailContainer,
  inputBox,
  emailImg,
  emailInput,
  emailButton,
  socialNetworksContent,
  socialNetworks,
  greyLink,
  pinkLink,
  copyright
} from "./Footer.module.scss"

import emailIcon from "../../../static/svg/footer/email-icon.svg"
import fbGreyIcon from "../../../static/svg/social-networks/fb-grey-icon.svg"
import fbPinkIcon from "../../../static/svg/social-networks/fb-pink-icon.svg"
import googlePlusGreyIcon from "../../../static/svg/social-networks/google-plus-icon-grey.svg"
import googlePlusPinkIcon from "../../../static/svg/social-networks/google-plus-icon-pink.svg"
import vimeoGreyIcon from "../../../static/svg/social-networks/icon-vimeo-grey.svg"
import vimeoPinkIcon from "../../../static/svg/social-networks/icon-vimeo-pink.svg"
import pinterestGreyIcon from "../../../static/svg/social-networks/pinterest-icon-grey.svg"
import pinterestPinkIcon from "../../../static/svg/social-networks/pinterest-icon-pink.svg"
import twitterGreyIcon from "../../../static/svg/social-networks/twitter-icon-grey.svg"
import twitterPinkIcon from "../../../static/svg/social-networks/twitter-icon-pink.svg"
import youtubeGreyIcon from "../../../static/svg/social-networks/youtube-icon-grey.svg"
import youtubePinkIcon from "../../../static/svg/social-networks/youtube-icon-pink.svg"

const Footer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "footer"]);

  return (
    <footer className={classNames(footer,"flex flex-col text-center uppercase")}>
      <div className={classNames(footerContent,"mx-auto")}>
        <h5 className={footerHeader}>
          Get latest news delivered daily! We will send you breaking news right
          to yuor inbox.
        </h5>
        <div className={classNames(emailContainer,"flex sm:flex-row flex-col")}>
          <div className={inputBox}>
            <img
              src={emailIcon}
              className={emailImg}
              alt="email-icon"
            />
            <input
              className={emailInput}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <button className={emailButton}>Subscribe</button>
        </div>
        <div className={socialNetworksContent}>
          <ul className={classNames(socialNetworks,"lex grid sm:grid-cols-6 grid-cols-5")}>
            <li className="flex">
              <a href="https://www.facebook.com/"
                ><img
                  className={greyLink}
                  src={fbGreyIcon}
                  alt="social-network-1"
              /></a>
              <a href="https://www.facebook.com/"
                ><img
                  className={pinkLink}
                  src={fbPinkIcon}
                  alt="social-network-1"
              /></a>
            </li>
            <li className="flex">
              <a href="https://twitter.com/"
                ><img
                  className={greyLink}
                  src={twitterGreyIcon}
                  alt="social-network-2"
              /></a>
              <a href="https://twitter.com/"
                ><img
                  className={pinkLink}
                  src={twitterPinkIcon}
                  alt="social-network-2"
              /></a>
            </li>
            <li className="flex">
              <a href="https://myaccount.google.com/"
                ><img
                  className={greyLink}
                  src={googlePlusGreyIcon}
                  alt="social-network-3"
              /></a>
              <a href="https://myaccount.google.com/"
                ><img
                  className={pinkLink}
                  src={googlePlusPinkIcon}
                  alt="social-network-3"
              /></a>
            </li>
            <li className="flex">
              <a href="https://vimeo.com/"
                ><img
                  className={greyLink}
                  src={vimeoGreyIcon}
                  alt="social-network-4"
              /></a>
              <a href="https://vimeo.com/"
                ><img
                  className={pinkLink}
                  src={vimeoPinkIcon}
                  alt="social-network-4"
              /></a>
            </li>
            <li className="flex">
              <a href="https://www.youtube.com/"
                ><img
                  className={greyLink}
                  src={youtubeGreyIcon}
                  alt="social-network-5"
              /></a>
              <a href="https://www.youtube.com/"
                ><img
                  className={pinkLink}
                  src={youtubePinkIcon}
                  alt="social-network-5"
              /></a>
            </li>
            <li className="flex sm:col-span-1 col-span-5 mx-auto">
              <a href="https://www.pinterest.com/"
                ><img
                  className={greyLink}
                  src={pinterestGreyIcon}
                  alt="social-network-6"
              /></a>
              <a href="https://www.pinterest.com/"
                ><img
                  className={pinkLink}
                  src={pinterestPinkIcon}
                  alt="social-network-6"
              /></a>
            </li>
          </ul>
        </div>
        <p className={classNames(copyright,"normal-case")}>Geminiz Theme © 2019.</p>
      </div>
    </footer>
  );
};

export default Footer;
