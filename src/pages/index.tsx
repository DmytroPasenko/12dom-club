import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { graphql, PageProps } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n";
import equal from "fast-deep-equal/react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import IndexPageContext from "../components/Context/IndexContext";
import {
  CmsPageProperty,
  CmsTableRecord,
  IndexPageGqlArgs,
  IndexPageGqlResponse,
} from "../types/common";
import { getPropertyAsStr } from "../utils/getPropertyAsStr";
import { SEO_DESCRIPTION, SEO_TITLE } from "../common";
import callGraphqlApi from "../utils/callGraphqlApi";

interface IndexPageProps extends PageProps {
  data: {
    cmsApi: {
      page: CmsPageProperty[];
      posts: CmsTableRecord[];
    };
  };
}

export const pageQuery = graphql`
  query IndexPageQuery($locale: String!) {
    cmsApi {
      page(locale: $locale, content: "index") {
        name
        type
        value
      }
      posts: table(locale: $locale, content: "posts") {
        slug
        position
        properties {
          name
          type
          value
        }
      }
    }
  }
`;

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => {
  const { t } = useTranslation(["site"]);
  const { locale } = useLocalization();
  const { cmsApi } = data;
  const [pageData, setPageData] = useState(cmsApi);
  const { page, posts } = pageData;

  const title = getPropertyAsStr(page, SEO_TITLE) ?? t("site:title");
  const description =
    getPropertyAsStr(page, SEO_DESCRIPTION) ?? t("site:description");

  useEffect(() => {
    callGraphqlApi<IndexPageGqlResponse, IndexPageGqlArgs>(
      `query IndexPageQuery($locale: String!) {
          page(locale: $locale, content: "index") {
            name
            type
            value
          }
          posts: table(locale: $locale, content: "posts") {
            slug
            position
            properties {
              name
              type
              value
            }
          }
        }`,
      {
        locale,
      },
    ).then((response) => {
      if (!response.error && response.data && !equal(pageData, response.data)) {
        setPageData(response.data);
      }
    });
  }, []);

  return (
    <IndexPageContext.Provider
      value={{
        page,
        posts,
      }}
    >
      <Layout title={title} description={description}>
        <Home />
      </Layout>
    </IndexPageContext.Provider>
  );
};

export default IndexPage;
