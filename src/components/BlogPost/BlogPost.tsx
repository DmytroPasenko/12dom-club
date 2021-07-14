import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
// import { PageProps } from "gatsby";
// import Layout from "../Layout/Layout";
// import { PropertyType } from "../../types/common"
import BlogPostHeaderBg from "./blog-post-components/BlogPostHeaderBg/BlogPostHeaderBg";
import StandartPostContainer from "./blog-post-components/StandartPostContainer/StandartPostContainer";
import AuthorBio from "./blog-post-components/AuthorBio/AuthorBio";

import {
  siteContainer,
  standartPostContainer,
  postAuthorBio,
} from "./BlogPost.module.scss";

// interface DataRecord {
//   Property: string;
//   Type: PropertyType;
//   Value: string;
// }

// interface IndexPageProps extends PageProps {
//   data: {
//     cmsApi: {
//       page: DataRecord[];
//     };
//   };
// }

const BlogPost: FunctionComponent = () => {
  const { t } = useTranslation(["site", "blog-post"]);

  return (
    <>
      <div id="blog-post-header">
        <BlogPostHeaderBg />
      </div>

      <div className={classNames(siteContainer, "mx-auto")}>
        <section className={standartPostContainer}>
          <StandartPostContainer />
        </section>

        <section className={classNames(postAuthorBio, "flex items-left")}>
          <AuthorBio />
        </section>
      </div>
    </>
  );
};

export default BlogPost;
