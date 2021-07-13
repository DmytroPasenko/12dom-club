import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import {
  latestPostsBlock,
  latestPostsBlockContent
} from "./LatestPosts.module.scss";

const CustomPosts: FunctionComponent = () => {
  const { t } = useTranslation(["site", "custom-posts"]);

  return (
    <>
      <div className={latestPostsBlock}>
        <div className={latestPostsBlockContent}>
          <h5 className="uppercase">Latest post</h5>
          <ul>
            <li className="flex flex-col">
              <a className="uppercase" href="#">Magic Love Ball</a>
              <span>Jan. 11, 2017</span>
            </li>
            <li className="flex flex-col">
              <a className="uppercase" href="#">What 2017 brings you</a>
              <span>Jan. 10, 2017</span>
            </li>
            <li className="flex flex-col">
              <a className="uppercase" href="#">Do you two match up?</a>
              <span>Jan. 9, 2017</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomPosts;
