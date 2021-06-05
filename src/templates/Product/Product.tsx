import { Fragment, FunctionComponent } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import AppLink from "../../components/AppLink";
import {
  detail_title,
  information,
  list,
  box,
  product_image,
  actionBox,
} from "./Product.module.scss";
import ProductQuality from "../../components/ProductQuality/ProductQuality";

interface ProductTemplateProps {
  pageContext: {
    slug: string;
    locale: string;
  };
  data: {
    product: {
      imageBig: string;
      packages: string[];
      qualities: {
        name: string;
        metering: string;
        value: string;
        limit: string;
      }[];
    };
  };
}

/* export const templateQuery = graphql`
  query ($slug: String!) {
    product: productsJson(slug: { eq: $slug }) {
      imageBig
      packages
      qualities {
        name
        metering
        value
        limit
      }
    }
  }
`;*/

const ProductTemplate: FunctionComponent<ProductTemplateProps> = ({
  pageContext,
  data,
}) => {
  const { t } = useTranslation(["product", "products"]);
  const { slug } = pageContext;
  const { imageBig, packages, qualities } = data.product;
  const title = t(`products:${slug}`);

  const description = title + " " + t(`product:seoDescription`);

  return (
    <Layout title={title} description={description}>
      <section className={box}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className={product_image}>
                <img
                  src={imageBig}
                  alt=""
                  loading="lazy"
                  width="1170"
                  height="549"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <h2 className={detail_title}>{title}</h2>
              <ProductQuality data={qualities}></ProductQuality>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className={information}>
                {!!packages.length && (
                  <Fragment>
                    <h3>{t("product:packagingOptions")}</h3>
                    <ul className={list}>
                      {packages.map((item) => (
                        <li key={item}>{t(`product:${item}`)}</li>
                      ))}
                    </ul>
                  </Fragment>
                )}

                <div className={actionBox}>
                  <AppLink to="/contact">
                    <span className="appBtn">{t("product:order")}</span>
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductTemplate;
