import { FunctionComponent } from "react";
import classNames from "classnames";
import StandartPostContainer from "./components/StandartPostContainer/StandartPostContainer";
import AuthorBio from "./components/AuthorBio/AuthorBio";
import {
  siteContainer,
  standartPostContainer,
  postAuthorBio,
  blogPostHeader,
} from "./Post.module.scss";
import { CmsTableRecord } from "../../types/common";

interface PostProps {
  data: CmsTableRecord;
}

const Post: FunctionComponent<PostProps> = ({ data }) => {
  console.log("data", data);

  return (
    <>
      <div id="blog-post-header">
        <div className={blogPostHeader} />
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

export default Post;
