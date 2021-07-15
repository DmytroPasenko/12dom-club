import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { tagsBlock, tags } from "./Tags.module.scss";

const Tags: FunctionComponent = () => {
  const { t } = useTranslation(["site", "tags"]);

  return (
    <>
      <div className={classNames(tagsBlock, "flex")}>
        <div className={tags}>
          <h5 className="uppercase">Tags</h5>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Aquarius</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Astrology</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Blog</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Business</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Love</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">News</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Pisces</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Tarol</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Tips</a>
          </button>
          <button type="button">
            <a href="http://localhost:8000/blogPost">Zodiac</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Tags;
