// https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/#background-images

import { FunctionComponent } from "react";
import { useLocalization } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import AppLink from "../AppLink";
import { getRootPath } from "../../../utils/getRootPath";
import {
  container_box,
  site_header,
  logo_box,
  main_logo,
  main_nav,
  main_nav_box,
  main_nav_header,
  page_container,
  page_header,
  topbar,
  topbar_content,
  topbar_nav_box,
  topbar_right_box,
} from "./Header.module.scss";
import classNames from "classnames";
import logoPng from "../../../static/img/logo.png";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import MobileMenu from "../MobileMenu/MobileMenu";

// import {
//   getImage,
//   ImageDataLike,
//   StaticImage,
//   withArtDirection,
//   GatsbyImage,
// } from "gatsby-plugin-image";
// import { graphql, useStaticQuery } from "gatsby";

// interface HeaderData {
//   desktopImage: ImageDataLike;
//   mobileImage: ImageDataLike;
// }

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  const { t } = useTranslation("site");
  const { locale } = useLocalization();
  const rootPath = getRootPath(locale);

  // const { desktopImage, mobileImage } = useStaticQuery<HeaderData>(
  //   graphql`
  //     query {
  //       desktopImage: file(
  //         sourceInstanceName: { eq: "images" }
  //         relativePath: { eq: "header-bg.jpg" }
  //       ) {
  //         childImageSharp {
  //           gatsbyImageData(
  //             height: 300
  //             layout: FIXED
  //             placeholder: NONE
  //             # backgroundColor: "#d3d3d3"
  //           )
  //         }
  //       }
  //       mobileImage: file(
  //         sourceInstanceName: { eq: "images" }
  //         relativePath: { eq: "header-bg.jpg" }
  //       ) {
  //         childImageSharp {
  //           gatsbyImageData(
  //             height: 300
  //             width: 475
  //             layout: FIXED
  //             placeholder: NONE
  //             # backgroundColor: "#d3d3d3"
  //             transformOptions: { cropFocus: CENTER }
  //           )
  //         }
  //       }
  //     }
  //   `,
  // );

  // const desktopImageData = getImage(desktopImage);
  // const mobileImageData = getImage(mobileImage);

  // const backgroundImages =
  //   desktopImageData && mobileImageData
  //     ? withArtDirection(desktopImageData, [
  //         {
  //           media: "(max-width: 425px)",
  //           image: mobileImageData,
  //         },
  //       ])
  //     : undefined;

  return (
    <Fragment>
      <div className={site_header}>
        <div className={topbar}>
          <div className={container_box}>
            <div className={classNames(topbar_content, "clearfix")}>
              <div className={classNames(logo_box, "float-left")}>
                <AppLink to={rootPath}>
                  <img
                    src={logoPng}
                    className={main_logo}
                    alt="Agroimpex"
                    width="102"
                    height="110"
                  />
                </AppLink>
              </div>

              <div className={classNames(topbar_nav_box, "float-left")}>
                <nav className="stricky clearfix">
                  <div className="container">
                    <div className={classNames(main_nav_header, "clearfix")}>
                      <div className={classNames(main_nav, "float-left")}>
                        <ul className={main_nav_box}>
                          <li>
                            <AppLink to={rootPath}>{t("site:home")}</AppLink>
                          </li>
                          <li>
                            <AppLink to={`/products`}>
                              {t("site:ourProducts")}
                            </AppLink>
                          </li>
                          <li>
                            <AppLink to={`/about`}>{t("site:about")}</AppLink>
                          </li>
                          <li>
                            <AppLink to={`/contact`}>
                              {t("site:contacts")}
                            </AppLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              <div className={topbar_right_box}>
                <LanguageMenu />
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={page_header}>
        <div className={classNames(page_container, "container")}>
          <h1>{title}</h1>
        </div>
      </section>

      {/* <div className={css.header} style={{ display: "grid" }}>
        {backgroundImages && (
          <GatsbyImage
            loading="eager"
            image={backgroundImages}
            alt=""
            // style={{ height: 300 }}
            className={css.artDirected}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
          />
        )}
        <div
          // className={css.title}
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            maxWidth: "100vw",
          }}
        >
          <h1>{title}</h1>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Header;
