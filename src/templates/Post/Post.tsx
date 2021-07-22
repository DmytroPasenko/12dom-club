import { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { CmsTableRecord } from "../../types/common";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";
import { getPropertyAsStr } from "../../utils/getPropertyAsStr";
import { SEO_DESCRIPTION, SEO_TITLE } from "../../common";

interface PostTemplateProps {
  pageContext: {
    slug: string;
    locale: string;
  };
  data: {
    cmsApi: { posts: CmsTableRecord[] };
  };
}

export const templateQuery = graphql`
  query ($locale: String!, $slug: String!) {
    cmsApi {
      posts: table(content: "posts", locale: $locale, slug: $slug) {
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

const PostTemplate: FunctionComponent<PostTemplateProps> = ({ data }) => {
  const { t } = useTranslation(["site"]);
  const { cmsApi } = data;
  const { posts } = cmsApi;
  const [post] = posts;
  const title = getPropertyAsStr(post, SEO_TITLE) ?? t("site:title");
  const description =
    getPropertyAsStr(post, SEO_DESCRIPTION) ?? t("site:description");
  return (
    <Layout title={title} description={description}>
      <Post data={post} />
    </Layout>
  );
};

export default PostTemplate;
