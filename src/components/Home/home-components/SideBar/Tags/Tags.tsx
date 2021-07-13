import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import {
  tagsBlock,
  tags
} from "./Tags.module.scss";

const Tags: FunctionComponent = () => {
  const { t } = useTranslation(["site", "tags"]);

  return (
    <>
    <div className={classNames(tagsBlock,"flex")}>
      <div className={tags}>
        <h5 className="uppercase">Tags</h5>
        <button><a href="#">Aquarius</a></button>
        <button><a href="#">Astrology</a></button>
        <button><a href="#">Blog</a></button>
        <button><a href="#">Business</a></button>
        <button><a href="#">Love</a></button>
        <button><a href="#">News</a></button>
        <button><a href="#">Pisces</a></button>
        <button><a href="#">Tarol</a></button>
        <button><a href="#">Tips</a></button>
        <button><a href="#">Zodiac</a></button>
      </div>
    </div>
    </>
  );
};

export default Tags;
