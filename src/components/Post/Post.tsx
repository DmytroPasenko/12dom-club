import { FunctionComponent } from "react";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import StandartPostContainer from "./components/StandartPostContainer/StandartPostContainer";
import AuthorBio from "./components/AuthorBio/AuthorBio";
import {
  siteContainer,
  standartPostContainer,
  postAuthorBio,
  blogPostHeader,
} from "./Post.module.scss";
import { CmsTableRecord } from "../../types/common";
import { getPropertyAsStr } from "../../utils/getPropertyAsStr";

interface PostProps {
  data: CmsTableRecord;
}

const Post: FunctionComponent<PostProps> = ({ data }) => {
  const { locale } = useLocalization();
  const date = getPropertyAsStr(data, "date");
  const formattedDate = date ? formatDate(parseInt(date, 10), locale) : "";

  return (
    <>
      <div id="blog-post-header">
        <div className={blogPostHeader} />
      </div>

      <div className={classNames(siteContainer, "mx-auto")}>
        <section className={standartPostContainer}>
          <StandartPostContainer
            title={getPropertyAsStr(data, "title")}
            date={formattedDate}
            image={getPropertyAsStr(data, "image")}
            text={getPropertyAsStr(data, "text")}
            author={getPropertyAsStr(data, "author")}
          />
        </section>

        <section className={classNames(postAuthorBio, "flex items-left")}>
          <AuthorBio author={getPropertyAsStr(data, "author")} />
        </section>
      </div>
    </>
  );
};

export default Post;
