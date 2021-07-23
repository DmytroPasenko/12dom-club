import { FunctionComponent } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import {
  followAndSubscribeBlock,
  follow,
  followLink,
  subscribe,
  subscribeGroup,
} from "./FollowAndSubscribe.module.scss";
import emailIcon from "../../../../../../static/svg/footer/email-icon.svg";
import fbIcon from "../../../../../../static/svg/social-networks/fb-icon.svg";
import googlePlusIcon from "../../../../../../static/svg/social-networks/google-plus-icon.svg";
import vimeoIcon from "../../../../../../static/svg/social-networks/vimeo-icon.svg";
import pinterestIcon from "../../../../../../static/svg/social-networks/pinterest-icon.svg";
import twitterIcon from "../../../../../../static/svg/social-networks/twitter-icon.svg";
import youtubeIcon from "../../../../../../static/svg/social-networks/youtube-icon.svg";

const FollowAndSubscribe: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={followAndSubscribeBlock}>
        <div className={follow}>
          <h5 className="uppercase">{t("site:follow")}</h5>
          <ul className="grid sm:grid-cols-6 grid-cols-3">
            <li className="flex">
              <a href="https://www.facebook.com/">
                <img
                  className={followLink}
                  src={fbIcon}
                  alt="social-network-1"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://twitter.com/">
                <img
                  className={followLink}
                  src={twitterIcon}
                  alt="social-network-2"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://myaccount.google.com/">
                <img
                  className={followLink}
                  src={googlePlusIcon}
                  alt="social-network-3"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://vimeo.com/">
                <img
                  className={followLink}
                  src={vimeoIcon}
                  alt="social-network-4"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://www.youtube.com/">
                <img
                  className={followLink}
                  src={youtubeIcon}
                  alt="social-network-5"
                />
              </a>
            </li>
            <li className="flex">
              <a href="https://www.pinterest.com/">
                <img
                  className={followLink}
                  src={pinterestIcon}
                  alt="social-network-6"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className={subscribe}>
          <h5 className="uppercase">{t("site:subscribe")}</h5>
          <div
            className={classNames(
              subscribeGroup,
              "mx-auto flex xl:flex-row flex-col",
            )}
          >
            <img src={emailIcon} alt="email-icon" />
            <input type="email" placeholder="Enter you email" />
            <button type="button" className="text-center">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default FollowAndSubscribe;
