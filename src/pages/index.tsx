// https://github.com/gatsbyjs/themes/tree/master/starters/example-react-i18next/
// https://www.gatsbyjs.com/plugins/gatsby-theme-i18n-react-i18next/
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/ProductList/ProductList";
import Certificates from "../templates/Certificates/Certificates";

// interface IndexPageProps extends PageProps {
//   data: {
//     products: {
//       nodes: {
//         slug: string;
//         image: string;
//       }[];
//     };
//   };
// }

// query HomePageQuery($locale: String!) {
// export const pageQuery = graphql`
//   query HomePageQuery {
//     products: allProductsJson(sort: { fields: position }) {
//       nodes {
//         slug
//         image
//       }
//     }
//   }
// `;

// const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => {
const IndexPage: FunctionComponent = () => {
  const { t } = useTranslation(["site"]);
  // const { locale } = useLocalization();

  // const products = data.products.nodes.map((node) => {
  //   const { slug, image } = node;

  //   return {
  //     slug,
  //     title,
  //     image,
  //   };
  // });

  return <div>{t("site:title")} - under construction</div>;
  // return (
  //   <Layout title={t("site:title")} description={t("site:description")}>
  //     <ProductList />
  //     <Certificates />
  //   </Layout>
  // );
};

export default IndexPage;
