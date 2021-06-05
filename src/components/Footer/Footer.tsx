import { useStaticQuery } from "gatsby";
import { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "gatsby";
import AppLink from "../AppLink";
import {
  box,
  bgImage,
  widgetColumn,
  widgetTitle,
  widgetLinks,
  widgetContactBox,
  widgetContact,
  widgetSocial,
  bottomBox,
  copyright,
  hypersoft,
} from "./Footer.module.scss";
import classNames from "classnames";
import linkedInSvg from "../../../static/svg/linkedin.svg";
import { useLocalization } from "gatsby-theme-i18n";
import { getRootPath } from "../../../utils/getRootPath";

interface FooterData {
  products: {
    nodes: {
      slug: string;
    }[];
  };
}

const Footer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "company", "footer", "products"]);
  const { locale } = useLocalization();
  const rootPath = getRootPath(locale);

  /* const { products } = useStaticQuery<FooterData>(
    graphql`
      query {
        products: allProductsJson(sort: { fields: position }) {
          nodes {
            slug
          }
        }
      }
    `,
  ); */

  return (
    <Fragment>
      <footer className={box}>
        <div className={bgImage}>
          <img
            src="/img/site-footer-farm.png"
            alt=""
            loading="lazy"
            width="760"
            height="550"
          />
        </div>
        <div className="container" style={{ padding: "0 20px" }}>
          <div className="row no-gutters">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className={widgetColumn}>
                <div className={widgetTitle}>
                  <h3>{t("site:menu")}</h3>
                </div>
                <ul className={widgetLinks}>
                  <li>
                    <AppLink to={rootPath}>{t("site:home")}</AppLink>
                  </li>
                  <li>
                    <AppLink to={`/products`}>{t("site:ourProducts")}</AppLink>
                  </li>
                  <li>
                    <AppLink to={`/about`}>{t("site:about")}</AppLink>
                  </li>
                  <li>
                    <AppLink to={`/contact`}>{t("site:contacts")}</AppLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className={widgetColumn}>
                <div className={widgetTitle}>
                  <h3>{t("site:products")}</h3>
                </div>
                <ul className={widgetLinks}>
                  {/* {products.nodes.map((item) => (
                    <li key={item.slug}>
                      <AppLink to={`/product/${item.slug}`}>
                        {t(`products:${item.slug}`)}
                      </AppLink>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className={classNames(widgetColumn, widgetContactBox)}>
                <div className={widgetTitle}>
                  <h3>{t("site:contacts")}</h3>
                </div>
                <div className={widgetContact}>
                  <p>{t("company:address")}</p>
                  <a href="mailto:info@agroimpex.group">info@agroimpex.group</a>
                  <br />
                  <a href="tel:+380552390162">+38 055 239 0162</a>
                  <br />
                  <a href="tel:+380504940410">+38 050 494 0410</a>
                  <br />
                  <a href="tel:+380675589405">+38 067 558 9405</a>
                  <div className={widgetSocial}>
                    <a
                      href="https://www.linkedin.com/company/agroimpex/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedInSvg} alt="in" width="20" height="20" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className={bottomBox}>
        <div className="container">
          <div className={copyright}>
            <span>© 2012-{new Date().getFullYear()}, Agroimpex.group.</span>
            <span>{t("footer:copyright")}</span>

            <span className={hypersoft}>
              <a href="https://hypersoft.io">
                {t("footer:designedBy")} <u>HyperSoft</u>
              </a>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
