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
  socialLink,
  copyright,
} from "./Footer.module.scss";

import emailIcon from "../../../static/svg/footer/email-icon.svg";
import fbIcon from "../../../static/svg/social-networks/fb-icon.svg";
import googlePlusIcon from "../../../static/svg/social-networks/google-plus-icon.svg";
import vimeoIcon from "../../../static/svg/social-networks/vimeo-icon.svg";
import pinterestIcon from "../../../static/svg/social-networks/pinterest-icon.svg";
import twitterIcon from "../../../static/svg/social-networks/twitter-icon.svg";
import youtubeIcon from "../../../static/svg/social-networks/youtube-icon.svg";

const Footer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "footer"]);

  return (
    <footer
      className={classNames(footer, "flex flex-col text-center uppercase")}
    >
      <div className={classNames(footerContent, "mx-auto")}>
        {/* <h5 className={footerHeader}>
          Get latest news delivered daily! We will send you breaking news right
          to yuor inbox.
        </h5> */}
        {/* <div
          className={classNames(emailContainer, "flex sm:flex-row flex-col")}
        >
          <div className={inputBox}>
            <img src={emailIcon} className={emailImg} alt="email-icon" />
            <input
              className={emailInput}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <button type="button" className={emailButton}>
            Subscribe
          </button>
        </div> */}
        <h5 className={footerHeader}>{t("site:follow")}</h5>
        <div className={socialNetworksContent}>
          <ul className={classNames(socialNetworks, "flex justify-between")}>
            <li className="flex mx-2">
              <a href="https://www.facebook.com/">
                <img
                  className={socialLink}
                  src={fbIcon}
                  alt="social-network-1"
                />
              </a>
            </li>
            <li className="flex mx-2">
              <a href="https://twitter.com/">
                <img
                  className={socialLink}
                  src={twitterIcon}
                  alt="social-network-2"
                />
              </a>
            </li>
            <li className="flex mx-2">
              <a href="https://myaccount.google.com/">
                <img
                  className={socialLink}
                  src={googlePlusIcon}
                  alt="social-network-3"
                />
              </a>
            </li>
            <li className="flex mx-2">
              <a href="https://vimeo.com/">
                <img
                  className={socialLink}
                  src={vimeoIcon}
                  alt="social-network-4"
                />
              </a>
            </li>
            <li className="flex mx-2">
              <a href="https://www.youtube.com/">
                <img
                  className={socialLink}
                  src={youtubeIcon}
                  alt="social-network-5"
                />
              </a>
            </li>
            <li className="flex mx-2">
              <a href="https://www.pinterest.com/">
                <img
                  className={socialLink}
                  src={pinterestIcon}
                  alt="social-network-6"
                />
              </a>
            </li>
          </ul>
        </div>
        <p className={classNames(copyright, "normal-case")}>
          12dom.club © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
