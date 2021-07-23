import { FunctionComponent, useContext } from "react";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import {
  latestPostsBlock,
  latestPostsBlockContent,
} from "./LatestPosts.module.scss";
import IndexPageContext from "../../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../../utils/getPropertyAsStr";
import AppLink from "../../../../AppLink";

const LatestPosts: FunctionComponent = () => {
  const { t } = useTranslation();
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return (
    <>
      <div className={latestPostsBlock}>
        <div className={latestPostsBlockContent}>
          <h5 className="uppercase">{t("site:latestPosts")}</h5>
          <ul>
            {posts?.slice(13, 16).map((item) => {
              const title = getPropertyAsStr(item, "title");
              const date = getPropertyAsStr(item, "date");
              const formattedDate = date
                ? formatDate(parseInt(date, 10), locale)
                : "";

              return (
                <li className="flex flex-col" key={item.slug}>
                  <AppLink to={`/post/${item.slug}`} className="uppercase">
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
