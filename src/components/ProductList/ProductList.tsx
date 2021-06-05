import { graphql, useStaticQuery } from "gatsby";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import AppLink from "../AppLink";
import {
  box,
  product_image,
  product_single,
  product_deatils,
  product_title,
  product_button,
} from "./ProductList.module.scss";

interface ProductListData {
  products: {
    nodes: {
      slug: string;
      image: string;
    }[];
  };
}

const ProductList: FunctionComponent = () => {
  const { t } = useTranslation("products");

  /* const { products } = useStaticQuery<ProductListData>(
    graphql`
      query {
        products: allProductsJson(sort: { fields: position }) {
          nodes {
            slug
            image
          }
        }
      }
    `,
  ); */

  return (
    <section className={box}>
      <div className="container">
        <div className="row">
          {/* {products.nodes.map((product) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={product.slug}>
              <AppLink to={`/product/${product.slug}`}>
                <div className={product_single}>
                  <div className={product_image}>
                    <img
                      src={product.image}
                      alt=""
                      loading="lazy"
                      width="370"
                      height="404"
                    />
                  </div>
                  <div className={product_deatils}>
                    <h2 className={product_title}>
                      {t(`products:${product.slug}`)}
                    </h2>
                    <div className={product_button}>
                      <div style={{ marginTop: 0 }}>
                        <span className="appBtn">
                          {t("products:moreDetails")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AppLink>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
