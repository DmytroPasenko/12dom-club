// https://github.com/gatsbyjs/themes/tree/master/starters/example-react-i18next/
// https://www.gatsbyjs.com/plugins/gatsby-theme-i18n-react-i18next/
import { useLocalization } from "gatsby-theme-i18n";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/ProductList/ProductList";
import Certificates from "../templates/Certificates/Certificates";
import { ApiDataResponse, ApiRequestBody, PropertyType } from "../types/common";
import { API_SITE_ID } from "../../app-config";
import { graphql, PageProps } from "gatsby";

interface DataRecord {
  Property: string;
  Type: PropertyType;
  Value: string;
}

interface IndexPageProps extends PageProps {
  data: {
    cmsApi: {
      page: DataRecord[];
    };
  };
}

// export const pageQuery = graphql`
//   query IndexPageQuery($locale: String!) {
//     cmsApi {
//       page(locale: $locale, content: "index") {
//         Property
//         Type
//         Value
//       }
//     }
//   }
// `;

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => {
  const { t } = useTranslation(["site"]);
  const { locale } = useLocalization();

  // console.log("data.cmsApi.page", data.cmsApi.page);

  // const products = data.products.nodes.map((node) => {
  //   const { slug, image } = node;

  //   return {
  //     slug,
  //     title,
  //     image,
  //   };
  // });

  // console.log("locale", locale);

  // const API_ENDPOINT_DEV =
  //   "https://5i36cgx9w3.execute-api.eu-west-1.amazonaws.com/dev";
  // // export const API_ENDPOINT_PROD =
  // //   "https://hm98xgjl6d.execute-api.eu-west-1.amazonaws.com/prod";

  // const body: ApiRequestBody = {
  //   locale: "en-GB",
  //   path: "cms/page",
  //   params: {
  //     SiteID: "1f66155f-5011-4f75-9b15-ecea36576c43",
  //     Locale: locale,
  //   },
  // };

  // fetch(API_ENDPOINT_DEV + "/public", {
  //   method: "POST",
  //   mode: "cors",
  //   cache: "no-cache",
  //   credentials: "omit",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(body),
  // })
  //   .then((response) => response.json())
  //   .then((response: ApiDataResponse<DataRecord>) => {
  //     if (response.success) {
  //       console.log("data", response.data);
  //     } else {
  //       console.error("Error", response.error);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  // const content = await getContent("cms/page", {
  //   SiteID: API_SITE_ID,
  //   Locale: locale,
  // });
  // console.log("content", content);

  return (
    <div>
      {t("site:title")} - under construction.
      <img alt="" src="https://12dom.club/assets/cms/1.jpg" />
    </div>
  );
  // return (
  //   <Layout title={t("site:title")} description={t("site:description")}>
  //     <ProductList />
  //     <Certificates />
  //   </Layout>
  // );
};

export default IndexPage;
