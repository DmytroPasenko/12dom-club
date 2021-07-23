import { FunctionComponent, Fragment } from "react";
import classNames from "classnames";
import { useLocalization } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import { useLocation } from "@reach/router";
import {
  header,
  logo,
  menuContainer,
  siteNavigation,
  menuIcon,
  // activeIcon,
  siteLink,
  moreThenBlack,
  subMenu,
  siteSubLink,
  // subMoreThenBlack,
  // activeLink,
  // subMoreThenContainer,
  // subSubMenu,
  // blogMiddleLi,
  // blogBottomLi,
  // middleLi,
  bottomLi,
  // siteSubSubLink,
  // activeNavigation,
  // currentPage,
  moreThenContainer,
  moreThen,
  // subMoreThen,
  // currentSubLink,
  topLi,
  // currentSiteSubSubLink,
  linkList,
  // homeTopLi,
  // homeBottomLi,
  // blogTopLi,
  localizationImage,
  localizationMenu,
} from "./Header.module.scss";
import logoImage from "../../../static/img/logo/logo.png";
import moreIcon from "../../../static/svg/header/more-icon.svg";
import ruIcon from "../../../static/img/flags/ru.png";
import uaIcon from "../../../static/img/flags/ua.png";
import AppLink from "../AppLink";
import { LOCALE_RU, LOCALE_UA } from "../../../app-config";

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  const { t } = useTranslation(["site"]);
  const { pathname } = useLocation();
  const { locale } = useLocalization();

  let relativeUrl = "";
  if (pathname !== "/" && pathname !== `/${locale}`) {
    relativeUrl = pathname.startsWith(`/${locale}/`)
      ? pathname.substr(`/${locale}/`.length - 1)
      : pathname;
  }

  return (
    <>
      <header
        className={classNames(
          header,
          "flex items-center justify-between text-white uppercase mx-auto",
        )}
      >
        <AppLink to="/" className={classNames("flex justify-center")}>
          <img
            className={classNames(logo, "flex")}
            src={logoImage}
            alt="site-logo"
          />
        </AppLink>
        <div className={menuContainer}>
          <div className={menuIcon} id="menu-icon">
            <span />
          </div>
          <nav
            className={classNames(siteNavigation, "mx-auto text-xs text-white")}
            id="site-navigation"
          >
            <ul className={classNames("flex md:flex-row flex-col")}>
              <li>
                <AppLink
                  to="/"
                  className={classNames(siteLink, linkList, "flex uppercase")}
                >
                  {t("site:home")}
                </AppLink>
              </li>

              <li>
                <AppLink
                  to="/about/"
                  className={classNames(siteLink, "uppercase")}
                >
                  {t("site:about")}
                </AppLink>
              </li>

              {/* <li>
                <a
                  className={classNames(siteLink, linkList, "flex uppercase")}
                  href="http://localhost:8000/"
                >
                  Blog
                  <div className={classNames(moreThenContainer, "flex")}>
                    <img
                      className={classNames(moreThen, "md:block hidden")}
                      src={moreIcon}
                      alt="more"
                    />
                    <img
                      className={classNames(moreThenBlack, "md:hidden")}
                      src={moreIcon}
                      alt="more"
                    />
                  </div>
                </a>
                <ul className={classNames(subMenu, "md:normal-case")}>
                  <li className={classNames(topLi, blogTopLi, "md:bg-white")}>
                    <a
                      className={classNames(siteSubLink, "flex")}
                      href="http://localhost:8000/"
                    >
                      Post Formats
                      <div className={subMoreThenContainer}>
                        <img
                          className={classNames(subMoreThen, subMoreThenBlack)}
                          src={moreIcon}
                          alt="more"
                        />
                      </div>
                    </a>
                    <ul className={subSubMenu}>
                      <li className={classNames(topLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Nonstandart Post
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Gallery Post
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Image Post
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Link Post
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Quote Post
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Video Post
                        </a>
                      </li>
                      <li className={classNames(bottomLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Audio Post
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={classNames(
                      middleLi,
                      blogMiddleLi,
                      "md:bg-white",
                    )}
                  >
                    <a
                      className={classNames(siteSubLink, "flex")}
                      href="http://localhost:8000/"
                    >
                      Blog Layouts
                      <div className={subMoreThenContainer}>
                        <img
                          className={classNames(subMoreThen, subMoreThenBlack)}
                          src={moreIcon}
                          alt="more"
                        />
                      </div>
                    </a>
                    <ul className={subSubMenu}>
                      <li className={classNames(topLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Classic
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Grid
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Mansory
                        </a>
                      </li>
                      <li className={classNames(bottomLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Justify
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={classNames(
                      bottomLi,
                      blogBottomLi,
                      "md:bg-white",
                    )}
                  >
                    <a
                      className={classNames(siteSubLink, "flex")}
                      href="http://localhost:8000/"
                    >
                      Sidebar
                      <div className={subMoreThenContainer}>
                        <img
                          className={classNames(subMoreThen, subMoreThenBlack)}
                          src={moreIcon}
                          alt="more"
                        />
                      </div>
                    </a>
                    <ul className={subSubMenu}>
                      <li className={classNames(topLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Left Sidebar
                        </a>
                      </li>
                      <li className={classNames(middleLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          Right Sidebar
                        </a>
                      </li>
                      <li className={classNames(bottomLi, "md:bg-white")}>
                        <a
                          href="http://localhost:8000/"
                          className={siteSubSubLink}
                        >
                          No Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}

              {/* <li>
                <a
                  className={classNames(siteLink, linkList, "flex uppercase")}
                  href="http://localhost:8000/"
                >
                  Pages
                  <div className={classNames(moreThenContainer, "flex")}>
                    <img
                      className={classNames(moreThen, "md:block hidden")}
                      src={moreIcon}
                      alt="more"
                    />
                    <img
                      className={classNames(moreThenBlack, "md:hidden")}
                      src={moreIcon}
                      alt="more"
                    />
                  </div>
                </a>
                <ul className={classNames(subMenu, "md:normal-case")}>
                  <li className={classNames(topLi, "md:bg-white")}>
                    <a
                      className={classNames(siteSubLink, "flex")}
                      href="http://localhost:8000/"
                    >
                      Typography
                    </a>
                  </li>
                  <li className={classNames(middleLi, "md:bg-white")}>
                    <a
                      className={classNames(siteSubLink, "flex")}
                      href="http://localhost:8000/"
                    >
                      Error 404 Page
                    </a>
                  </li>
                  <li className={classNames(bottomLi, "md:bg-white")}>
                    <a
                      className={classNames(siteSubLink, "flex")}
                      href="http://localhost:8000/"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </li> */}

              <li>
                <AppLink
                  to="/contacts/"
                  className={classNames(siteLink, "uppercase")}
                >
                  {t("site:contacts")}
                </AppLink>
              </li>

              <li>
                <a
                  className={classNames(siteLink, linkList, "flex uppercase")}
                  href="http://localhost:8000/"
                >
                  {t("site:localization")}
                  <div className={classNames(moreThenContainer, "flex")}>
                    <img
                      className={classNames(moreThen, "md:block hidden")}
                      src={moreIcon}
                      alt="more"
                    />
                    <img
                      className={classNames(moreThenBlack, "md:hidden")}
                      src={moreIcon}
                      alt="more"
                    />
                  </div>
                </a>
                <ul
                  className={classNames(
                    subMenu,
                    localizationMenu,
                    "md:normal-case",
                  )}
                >
                  <li className={classNames(topLi, "md:bg-white")}>
                    <AppLink
                      to={relativeUrl || "/"}
                      language={LOCALE_RU}
                      className={classNames(siteSubLink, "flex items-center")}
                    >
                      <img
                        className={classNames(localizationImage, "mr-3")}
                        src={ruIcon}
                        alt="ru"
                      />
                      Русский
                    </AppLink>
                  </li>
                  <li className={classNames(bottomLi, "md:bg-white")}>
                    <AppLink
                      to={relativeUrl || "/ua"}
                      language={LOCALE_UA}
                      className={classNames(siteSubLink, "flex items-center")}
                    >
                      <img
                        className={classNames(localizationImage, "mr-3")}
                        src={uaIcon}
                        alt="ua"
                      />
                      Українська
                    </AppLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
