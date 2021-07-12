import { FunctionComponent, Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import {
  header,
  logo,
  menuContainer,
  siteNavigation,
  menuIcon,
  activeIcon,
  siteLink,
  moreThenBlack,
  subMenu,
  siteSubLink,
  subMoreThenBlack,
  activeLink,
  subMoreThenContainer,
  subSubMenu,
  blogMiddleLi,
  blogBottomLi,
  middleLi,
  bottomLi,
  siteSubSubLink,
  activeNavigation,
  currentPage,
  moreThenContainer,
  moreThen,
  subMoreThen,
  currentSubLink,
  topLi,
  currentSiteSubSubLink,
  linkList,
  homeTopLi,
  homeBottomLi,
  blogTopLi
} from "./Header.module.scss";
import moreIcon from "../../../static/svg/header/more-icon.svg"

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => (
  <>  
    <header className={classNames(header, "flex flex-col text-white uppercase mx-auto")}>
      <a href="#" className={classNames("flex justify-center")}
        ><StaticImage className={classNames(logo,"flex")} src="../../../static/img/logo/logo.png" alt="site-logo"
      /></a>
      <div className={menuContainer}>
        <div className={menuIcon} id="menu-icon">
          <span></span>
        </div>
        <nav
          className={classNames(siteNavigation, "mx-auto text-xs text-white")}
          id="site-navigation"
        >
          <ul className={classNames("flex md:flex-row flex-col")}>
            <li>
              <a className={classNames(siteLink,linkList,"flex uppercase")} href="#">
                Home
                <div className={classNames(moreThenContainer,"flex")}>
                  <img
                    className={classNames(moreThen,"md:block hidden")}
                    src={moreIcon}
                    alt="more"
                  />
                  <img
                    className={classNames(moreThenBlack,"md:hidden")}
                    src={moreIcon}
                    alt="more"
                  />
                </div>                
              </a>
              <ul className={classNames(subMenu,"flex flex-col md:normal-case")}>
                <li className={classNames(topLi,homeTopLi,"md:bg-white")}>
                  <a className={classNames(siteSubLink,"flex")} href="#">
                    Header settings
                    <div className={subMoreThenContainer}>
                      <img
                        className={classNames(subMoreThen)}
                        src={moreIcon}
                        alt="more"
                      />
                    </div>
                  </a>
                  <ul className={subSubMenu}>
                    <li className={classNames(topLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Header Style 1</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Header Style 2</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Header Style 3</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Header Style 4</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Header Style 5</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Header Style 6</a>
                    </li>
                    <li className={classNames(bottomLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Header Style 7</a>
                    </li>
                  </ul>
                </li>

                <li className={classNames(bottomLi,homeBottomLi,"md:bg-white")}>
                  <a
                    className={classNames(siteSubLink,"flex")}
                    href="#"
                  >
                    Footer settings
                    <div className={subMoreThenContainer}>
                      <img
                        className={classNames(subMoreThen,subMoreThenBlack)}
                        src={moreIcon}
                        alt="more"
                      />
                    </div>
                  </a>
                  <ul className={subSubMenu}>
                    <li className={classNames(topLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Footer Style 1</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Footer Style 2</a>
                    </li>
                    <li className={classNames(bottomLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Footer Style 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a className={classNames(siteLink,"uppercase")} href="#">About me</a>
            </li>

            <li>
              <a
                className={classNames(siteLink,linkList,"flex uppercase")}
                href="#"
              >
                Blog
                <div className={classNames(moreThenContainer,"flex")}>
                  <img
                    className={classNames(moreThen,"md:block hidden")}
                    src={moreIcon}
                    alt="more"
                  />
                  <img
                    className={classNames(moreThenBlack,"md:hidden")}
                    src={moreIcon}
                    alt="more"
                  />
                </div> 
              </a>
              <ul className={classNames(subMenu,"md:normal-case")}>
                <li className={classNames(topLi,blogTopLi,"md:bg-white")}>
                  <a className={classNames(siteSubLink,"flex")} href="#">
                    Post Formats
                    <div className={subMoreThenContainer}>
                      <img
                        className={classNames(subMoreThen,subMoreThenBlack)}
                        src={moreIcon}
                        alt="more"
                      />
                    </div>
                  </a>
                  <ul className={subSubMenu}>
                    <li className={classNames(topLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Nonstandart Post</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Gallery Post</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Image Post</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Link Post</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Quote Post</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Video Post</a>
                    </li>
                    <li className={classNames(bottomLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Audio Post</a>
                    </li>
                  </ul>
                </li>

                <li className={classNames(middleLi,blogMiddleLi,"md:bg-white")}>
                  <a className={classNames(siteSubLink,"flex")} href="#">
                    Blog Layouts
                    <div className={subMoreThenContainer}>
                      <img
                        className={classNames(subMoreThen,subMoreThenBlack)}
                        src={moreIcon}
                        alt="more"
                      />
                    </div>
                  </a>
                  <ul className={subSubMenu}>
                    <li className={classNames(topLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Classic</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Grid</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Mansory</a>
                    </li>
                    <li className={classNames(bottomLi,"md:bg-white")}>
                      <a href="#" className={siteSubSubLink}>Justify</a>
                    </li>
                  </ul>
                </li>

                <li className={classNames(bottomLi,blogBottomLi,"md:bg-white")}>
                  <a className={classNames(siteSubLink,"flex")} href="#"> 
                    Sidebar
                    <div className={subMoreThenContainer}>
                      <img
                        className={classNames(subMoreThen,subMoreThenBlack)}
                        src={moreIcon}
                        alt="more"
                      />
                    </div>
                  </a>
                  <ul className={subSubMenu}>
                    <li className={classNames(topLi,"md:bg-white")}>
                    <a href="#" className={siteSubSubLink}>Left Sidebar</a>
                    </li>
                    <li className={classNames(middleLi,"md:bg-white")}>
                    <a href="#" className={siteSubSubLink}>Right Sidebar</a>
                    </li>
                    <li className={classNames(bottomLi,"md:bg-white")}>
                    <a href="#" className={siteSubSubLink}>No Sidebar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a
                className={classNames(siteLink,linkList,"flex uppercase")}
                href="#"
              >
                Pages
                <div className={classNames(moreThenContainer,"flex")}>
                  <img
                    className={classNames(moreThen,"md:block hidden")}
                    src={moreIcon}
                    alt="more"
                  />
                  <img
                    className={classNames(moreThenBlack,"md:hidden")}
                    src={moreIcon}
                    alt="more"
                  />
                </div> 
              </a>
              <ul className={classNames(subMenu,"md:normal-case")}>
                <li className={classNames(topLi,"md:bg-white")}>
                  <a className={classNames(siteSubLink,"flex")} href="#">Typography</a>
                </li>
                <li className={classNames(middleLi,"md:bg-white")}>
                  <a className={classNames(siteSubLink,"flex")} href="#">Error 404 Page</a>
                </li>
                <li className={classNames(bottomLi,"md:bg-white")}>
                  <a className={classNames(siteSubLink,"flex")} href="#">Documentation</a>
                </li>
              </ul>
            </li>

            <li>
              <a className={classNames(siteLink,"uppercase")} href="#">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);
export default Header;
