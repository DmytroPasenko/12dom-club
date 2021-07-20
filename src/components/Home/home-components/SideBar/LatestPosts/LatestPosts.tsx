import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  latestPostsBlock,
  latestPostsBlockContent,
} from "./LatestPosts.module.scss";
import { isEven } from "../../../../../utils/isEven";
import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import AppLink from "../../../../AppLink";

const LatestPosts: FunctionComponent = () => {
  const { t } = useTranslation(["site", "latest-posts"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      <div className={latestPostsBlock}>
        <div className={latestPostsBlockContent}>
          <h5 className="uppercase">Latest posts</h5>
          <ul>
            {posts?.slice(4, 7).map((item) => {
              const title = getPropertyAsStr(item, "title");
              const date = getPropertyAsStr(item, "date");
              const formattedDate = date
                ? formatDate(parseInt(date, 10), locale)
                : "";

              return (
                <li className="flex flex-col" key={item.slug}>
                  <AppLink to={`news/${item.slug}`} className="uppercase">
                    {title}
                  </AppLink>
                  <span>{formattedDate}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
