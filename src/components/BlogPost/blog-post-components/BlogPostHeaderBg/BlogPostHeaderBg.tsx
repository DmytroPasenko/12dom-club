import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { blogPostHeader } from "./BlogPostHeaderBg.module.scss";

const BlogPostHeaderBg: FunctionComponent = () => {
  const { t } = useTranslation(["site", "blog-post-header-bg"]);

  return <div className={blogPostHeader} />;
};

export default BlogPostHeaderBg;
