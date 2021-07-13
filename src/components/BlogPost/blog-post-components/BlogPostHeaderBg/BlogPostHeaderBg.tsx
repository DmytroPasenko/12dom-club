import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { blogPostHeader } from "./BlogPostHeaderBg.module.scss";

const BlogPostHeaderBg: FunctionComponent = () => {
  const { t } = useTranslation(["site", "blog-post-header-bg"]);

  return <div className={blogPostHeader}></div>;
};

export default BlogPostHeaderBg;
