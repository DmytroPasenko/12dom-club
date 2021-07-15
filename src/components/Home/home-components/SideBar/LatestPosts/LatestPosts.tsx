import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import {
  latestPostsBlock,
  latestPostsBlockContent,
} from "./LatestPosts.module.scss";

const LatestPosts: FunctionComponent = () => {
  const { t } = useTranslation(["site", "latest-posts"]);

  return (
    <>
      <div className={latestPostsBlock}>
        <div className={latestPostsBlockContent}>
          <h5 className="uppercase">Latest post</h5>
          <ul>
            <li className="flex flex-col">
              <a className="uppercase" href="http://localhost:8000/blogPost">
                Magic Love Ball
              </a>
              <span>Jan. 11, 2017</span>
            </li>
            <li className="flex flex-col">
              <a className="uppercase" href="http://localhost:8000/blogPost">
                What 2017 brings you
              </a>
              <span>Jan. 10, 2017</span>
            </li>
            <li className="flex flex-col">
              <a className="uppercase" href="http://localhost:8000/blogPost">
                Do you two match up?
              </a>
              <span>Jan. 9, 2017</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
