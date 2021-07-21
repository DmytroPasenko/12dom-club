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
    post: CmsTableRecord;
  };
}

export const templateQuery = graphql`
  query ($locale: String!, $slug: String!) {
    cmsApi {
      post: table(content: "posts", locale: $locale, slug: $slug) {
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

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  pageContext,
  data,
}) => {
  const { t } = useTranslation(["site"]);
  // const { slug } = pageContext;
  const { post } = data;

  console.log("pageContext", pageContext);
  console.log("post", post);

  const title = getPropertyAsStr(post, SEO_TITLE) ?? t("site:title");
  const description =
    getPropertyAsStr(post, SEO_DESCRIPTION) ?? t("site:description");

  // const { imageBig, packages, qualities } = data.product;
  // const title = t(`products:${slug}`);

  // const description = `${title} ${t(`product:seoDescription`)}`;

  return (
    <Layout title={title} description={description}>
      <Post data={data.post} />
    </Layout>
  );
};

export default PostTemplate;
